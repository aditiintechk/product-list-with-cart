import './App.css'
import data from '../data.js'
import Items from './components/Items.jsx'
import Cart from './components/Cart.jsx'

function App() {
	function getData(name, price) {
		console.log('clicked', name, price)
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
			<Cart />
		</main>
	)
}

export default App
