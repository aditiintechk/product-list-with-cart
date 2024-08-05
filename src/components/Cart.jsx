import emptyCartImg from '../assets/icons/illustration-empty-cart.svg'

export default function Cart() {
	return (
		<section className='cart-section'>
			<h2>Your Cart(0)</h2>
			<div className='cart-info'>
				<img src={emptyCartImg} alt='' />
			</div>
		</section>
	)
}
