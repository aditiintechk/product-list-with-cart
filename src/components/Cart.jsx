import emptyCartImg from '../assets/icons/illustration-empty-cart.svg'

export default function Cart(props) {
	const { cartData } = props
	for (let i = 0; i < cartData.length; i++) {
		if (cartData[i].count === 0) {
			cartData.pop(cartData[i])
		}
	}

	const filteredCartData = cartData.filter((item) => item.count > 0)

	const totalCount = filteredCartData.reduce(
		(sum, item) => sum + item.count,
		0
	)
	const totalAmount = filteredCartData.reduce(
		(sum, item) => sum + item.price * item.count,
		0
	)
	const cartItems = cartData.map((eachItem) => {
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
					<button className='confirm-order-btn'>Confirm Order</button>
				</div>
			)}
		</section>
	)
}
