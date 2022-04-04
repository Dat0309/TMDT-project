import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../Provider/StateProvider'
import { getBasketTotal } from '../../controller/reducer';

function Subtotal() {

    const [{basket}, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
        <CurrencyFormat 
            renderText={(value) => ( 
                <>
                    <p>
                        Giỏ hàng ({basket.length} sản phẩm):
                        <strong> {value} </strong>
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox" /> This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />

        <button> Thanh toán </button>
    </div>
  )
}

export default Subtotal