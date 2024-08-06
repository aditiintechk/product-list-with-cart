import './App.css'
import data from '../data.js'
import Items from './components/Items.jsx'
import Cart from './components/Cart.jsx'
import ConfirmModal from './components/ConfirmModal.jsx'
import { useState } from 'react'

// Import images

import waffleImg from './assets/images/image-waffle-desktop.jpg'
import bruleeImg from './assets/images/image-creme-brulee-desktop.jpg'
import macaronImg from './assets/images/image-macaron-desktop.jpg'
import tiramisuImg from './assets/images/image-tiramisu-desktop.jpg'
import baklavaImg from './assets/images/image-baklava-desktop.jpg'
import meringueImg from './assets/images/image-meringue-desktop.jpg'
import cakeImg from './assets/images/image-cake-desktop.jpg'
import brownieImg from './assets/images/image-brownie-desktop.jpg'
import pannaImg from './assets/images/image-panna-cotta-desktop.jpg'

function App() {
	const [cartData, setCartData] = useState([])
	const [showModal, setShowModal] = useState(false)
	const [filteredData, setFilteredData] = useState([])
	const [resetItems, setResetItems] = useState(false)

	const imagesArr = [
		waffleImg,
		bruleeImg,
		macaronImg,
		tiramisuImg,
		baklavaImg,
		meringueImg,
		cakeImg,
		brownieImg,
		pannaImg,
	]

	function getData(name, price, count) {
		let newItem = {
			name,
			price,
			count,
		}
		setCartData((prevCartData) => {
			const itemIndex = prevCartData.findIndex(
				(item) => item.name === newItem.name
			)
			if (itemIndex > -1) {
				return prevCartData.map((item, index) =>
					index === itemIndex ? newItem : item
				)
			} else {
				return [...prevCartData, newItem]
			}
		})
	}

	function handleConfirmBtn(filteredCartData) {
		setShowModal(true)
		console.log(filteredCartData)
		setFilteredData(filteredCartData)
	}

	function handleStartBtn() {
		setShowModal(false)
		setCartData([])
		setResetItems(true)
	}

	const items = data.map((item, index) => {
		return (
			<Items
				key={item.name}
				image={imagesArr[index]}
				name={item.name}
				category={item.category}
				price={item.price}
				getData={getData}
				resetItems={resetItems}
				setResetItems={setResetItems}
			/>
		)
	})

	return (
		<main>
			<section className='item-container'>
				<h1 className='title'>Desserts</h1>
				<div className='items'>{items}</div>
			</section>
			<Cart cartData={cartData} handleConfirmBtn={handleConfirmBtn} />
			{showModal ? (
				<ConfirmModal
					filteredData={filteredData}
					handleStartBtn={handleStartBtn}
				/>
			) : null}
		</main>
	)
}

export default App
