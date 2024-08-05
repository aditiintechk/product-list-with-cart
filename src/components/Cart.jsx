import emptyCartImg from '../assets/icons/illustration-empty-cart.svg'

export default function Cart(props) {
	console.log(props.cartData)
	return (
		<section className='cart-section'>
			<h2>Your Cart (0)</h2>
			<div className='cart-info'>
				<img src={emptyCartImg} alt='' />
				<p className='message'>Your added items will appear here</p>
			</div>
		</section>
	)
}
