import emptyCartImg from '../assets/icons/illustration-empty-cart.svg'
import PropTypes from 'prop-types'

export default function Cart(props) {
	const { cartData, handleConfirmBtn } = props

	let filteredCartData = cartData.filter((item) => item.count > 0)

	const totalCount = filteredCartData.reduce(
		(sum, item) => sum + item.count,
		0
	)
	const totalAmount = filteredCartData.reduce(
		(sum, item) => sum + item.price * item.count,
		0
	)
	const cartItems = filteredCartData.map((eachItem) => {
		return (
			<div className='cart-item' key={eachItem.name}>
				<h5 className='cart-item-name'>{eachItem.name}</h5>
				<div>
					<h5 className='cart-item-count'>{eachItem.count}x</h5>
					<h5 className='cart-item-price'>
						@${eachItem.price.toFixed(2)}
					</h5>
					<h5 className='cart-item-total'>
						${(eachItem.price * eachItem.count).toFixed(2)}
					</h5>
				</div>
				<hr />
			</div>
		)
	})

	return (
		<section className='cart-section'>
			{!filteredCartData?.length ? (
				<div>
					<h2>Your Cart (0)</h2>
					<div className='cart-info'>
						<img src={emptyCartImg} alt='' />
						<p className='message'>
							Your added items will appear here
						</p>
					</div>
				</div>
			) : (
				<div>
					<h2>Your Cart ({totalCount})</h2>
					{cartItems}
					<div className='total-info'>
						<h5>Order Total</h5>
						<h4>${totalAmount.toFixed(2)}</h4>
					</div>
					<button
						className='confirm-order-btn'
						onClick={() => handleConfirmBtn(filteredCartData)}
					>
						Confirm Order
					</button>
				</div>
			)}
		</section>
	)
}

// add react prop types according to the eslint doc -- #TODO: is it required?

Cart.propTypes = {
	cartData: PropTypes.array,
	handleConfirmBtn: PropTypes.function || PropTypes.undefined,
}
