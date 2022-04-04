import React from 'react'
import { useStateValue } from '../Provider/StateProvider'
import "./Checkout.css"
import CheckOutProduct from './CheckOutProduct';
import Subtotal from './Subtotal'

function Checkout() {

    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className='checkout'>

            <div className="checkout_left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout_ad" />
                
                <div>
                    <h2 className="checkout_title">
                        Giỏ hàng của bạn
                    </h2>
                    {/* BasketItem */}
                    {basket.map(item => (
                        <CheckOutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout