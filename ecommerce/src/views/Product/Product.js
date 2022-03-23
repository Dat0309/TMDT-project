import React from 'react'
import "./Product.css"
import StarIcon from '@mui/icons-material/Star';

function Product() {
    return (
        <div className='product'>
            <div className="product_info">
                <p>Nhà giả kim</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product_rating">
                    <p className="rating_icon">
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />

                    </p>
                </div>
                <img src="https://salt.tikicdn.com/ts/product/45/3b/fc/aa81d0a534b45706ae1eee1e344e80d9.jpg"
                    alt="" />

            </div>
            <button> Add to Card </button>

        </div>
    )
}

export default Product