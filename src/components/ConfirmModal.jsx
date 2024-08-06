import PropTypes from 'prop-types'

export default function ConfirmModal(props) {
	const { filteredData, handleStartBtn } = props
	const totalAmount = filteredData.reduce(
		(sum, item) => sum + item.price * item.count,
		0
	)
	const cartItems = filteredData.map((eachItem) => {
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
		<div className='modal-overlay'>
			<section className='modal-section'>
				<div>
					<h2>Order Confirmed</h2>
					{cartItems}
					<div className='total-info'>
						<h5>Order Total</h5>
						<h4>${totalAmount.toFixed(2)}</h4>
					</div>
					<button
						className='start-order-btn'
						onClick={handleStartBtn}
					>
						Start New Order
					</button>
				</div>
			</section>
		</div>
	)
}

ConfirmModal.propTypes = {
	filteredData: PropTypes.array,
	handleStartBtn: PropTypes.func,
}
