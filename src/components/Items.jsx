export default function Items(props) {
	const { image, name, category, price } = props
	return (
		<section className='item-section'>
			<img src={image} alt='' />
			<div className='add-to-cart'>
				<button className='add-btn'>add to cart</button>
			</div>
			<h5>{category}</h5>
			<h4>{name}</h4>
			<h4>${price}</h4>
		</section>
	)
}
