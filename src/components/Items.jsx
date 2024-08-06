import { useState, useEffect } from 'react'
import cartImg from '../assets/icons/icon-add-to-cart.svg'
import plus from '../assets/icons/icon-increment-quantity.svg'
import minus from '../assets/icons/icon-decrement-quantity.svg'
import PropTypes from 'prop-types'

export default function Items(props) {
	const { image, name, category, price, getData, resetItems, setResetItems } =
		props
	const [count, setCount] = useState(0)

	useEffect(() => {
		if (resetItems) {
			setCount(0)
			setResetItems(false)
		}
	}, [resetItems, setResetItems])

	function handleClick() {
		const newCount = count + 1
		setCount(newCount)
		getData(name, price, newCount)
	}

	function handleIncrement() {
		const newCount = count + 1
		setCount(newCount)
		getData(name, price, newCount)
	}

	function handleDecrement() {
		const newCount = count - 1
		setCount(newCount)
		getData(name, price, newCount)
	}

	return (
		<section className='item-section'>
			<img
				className={count ? 'red-border item-img' : 'item-img'}
				src={image}
				alt=''
			/>
			<div className='addtocart-container'>
				{count === 0 ? (
					<button className='addtocart-btn' onClick={handleClick}>
						<img src={cartImg} />
						Add to Cart
					</button>
				) : (
					<div className='addtocart-section'>
						<img
							className='decrement'
							src={minus}
							alt='minus symbol'
							onClick={handleDecrement}
						/>
						<span className='count'>{count}</span>
						<img
							className='increment'
							src={plus}
							alt='plus symbol'
							onClick={handleIncrement}
						/>
					</div>
				)}
			</div>
			<h5 className='item-category'>{category}</h5>
			<h4 className='item-name'>{name}</h4>
			<h4 className='item-price'>${price.toFixed(2)}</h4>
		</section>
	)
}

Items.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string,
	category: PropTypes.string,
	price: PropTypes.number,
	getData: PropTypes.func,
	resetItems: PropTypes.bool,
	setResetItems: PropTypes.func,
}
