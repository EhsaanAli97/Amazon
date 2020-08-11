import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, price, rating, image }) {
	const [{ basket }, dispatch] = useStateValue();

	const addToBasket = () => {
		dispatch({
			type: 'ADD_TO_BASKET',
			payload: {
				id,
				title,
				image,
				price,
				rating,
			},
		});
	};

	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>£</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{/* Creates an array of size 5, then fills it with empty values and maps through 5 times, displaying a p tag with the star sign */}
					{Array(rating)
						.fill()
						.map((_) => (
							<p>
								<i class="fas fa-star"></i>
							</p>
						))}
				</div>
			</div>
			<img src={image} alt="Product" />
			<button onClick={addToBasket}>Add to basket</button>
		</div>
	);
}

export default Product;
