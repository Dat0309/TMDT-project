import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div className='checkout'>

            <div className="checkout_left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout_ad" />
                
                <div>
                    <h2 className="checkout_title">
                        Giỏ hàng của bạn
                    </h2>
                    {/* BasketItem */}
                </div>
            </div>



            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout