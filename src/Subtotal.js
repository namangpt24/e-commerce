import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'
import {useHistory} from 'react-router-dom'
function Subtotal() {
    const histt=useHistory();
    const [{basket},dispatch]=useStateValue();
    const price =getBasketTotal(basket);
    const dollarIndianLocale= Intl.NumberFormat('en-IN',{
        style:"currency",
        currency:"INR",
    });
    return (
        <div className="sumtotal">
            {/* <CurrencyFormat  renderText={(value)=>(
                 <>
                 <p>Subtotal ({basket?.length} items): <strong>{value}</strong></p>
                 <small className="check">
                 <input type="checkbox"/>  This order contains a gift
                 </small>
                 </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                hunderedSeparator={true}
                prefix={"Rs"}
                >
               

            </CurrencyFormat> */}

            <p>Subtotal ({basket?.length} items): <strong>{dollarIndianLocale.format(price)}</strong></p>
                 <small className="check">
                 <input type="checkbox"/>  This order contains a gift
                 </small>
            <button className="cartbt" onClick={o=> histt.push('/payment')}>Proceed To Checkout</button>
        </div>
    )
}

export default Subtotal
