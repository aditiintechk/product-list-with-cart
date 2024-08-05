export default function Items(props) {
	const { image, name, category, price } = props
	return (
		<section className='item-section'>
			<img className='item-img' src={image} alt='' />
			{/* <div className='add-to-cart'>
				<button className='add-btn'>add to cart</button>
			</div> */}
			<h5 className='item-category'>{category}</h5>
			<h4 className='item-name'>{name}</h4>
			<h4 className='item-price'>${price}</h4>
		</section>
	)
}
