import './App.css'
import data from '../data.js'
import Items from './components/Items.jsx'
import Cart from './components/Cart.jsx'
import ConfirmModal from './components/ConfirmModal.jsx'
import { useState } from 'react'

function App() {
	const [cartData, setCartData] = useState([])
	const [showModal, setShowModal] = useState(false)
	const [filteredData, setFilteredData] = useState([])

	function getData(name, price, count) {
		const newItem = {
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
		setShowModal((prevShowModal) => !prevShowModal)
		console.log(filteredCartData)
		setFilteredData(filteredCartData)
	}

	function handleStartBtn() {
		setShowModal((prevShowModal) => !prevShowModal)
		setCartData([])
	}

	const items = data.map((item) => {
		return (
			<Items
				key={item.name}
				image={item.image}
				name={item.name}
				category={item.category}
				price={item.price}
				getData={getData}
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
