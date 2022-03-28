import React from 'react'
import "./Product.css"
import StarIcon from '@mui/icons-material/Star';

function Product({ id, title, image, price, rating }) {
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
            <button> Thêm vào giỏ hàng </button>

        </div>
    )
}

export default Product