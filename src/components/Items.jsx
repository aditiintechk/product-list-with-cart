import { useState } from 'react'
import cartImg from '../assets/icons/icon-add-to-cart.svg'
import plus from '../assets/icons/icon-increment-quantity.svg'
import minus from '../assets/icons/icon-decrement-quantity.svg'

export default function Items(props) {
	const { image, name, category, price } = props
	const [count, setCount] = useState(0)
	return (
		<section className='item-section'>
			<img className='item-img' src={image} alt='' />
			<div className='addtocart-container'>
				{count === 0 ? (
					<button className='addtocart-btn'>
						<img src={cartImg} />
						Add to Cart
					</button>
				) : (
					<div className='addtocart-section'>
						<img className='sign' src={minus} alt='minus symbol' />
						<span className='count'>{count}</span>
						<img className='sign' src={plus} alt='plus symbol' />
					</div>
				)}
			</div>
			<h5 className='item-category'>{category}</h5>
			<h4 className='item-name'>{name}</h4>
			<h4 className='item-price'>${price}</h4>
		</section>
	)
}
