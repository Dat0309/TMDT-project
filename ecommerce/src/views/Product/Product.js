import React from 'react'
import "./Product.css"
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from '../Provider/StateProvider';

function Product({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    console.log("this is the basket", basket);

    const addToBasket = () => {
        // dispatch the item intoo the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className='product'>
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_, i) => (<StarIcon />))}
                </div>


            </div>
            <img src={image}
                alt="" />
            <button onClick={addToBasket}> Thêm vào giỏ hàng </button>

        </div>
    )
}

export default Product