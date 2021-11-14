import React from 'react'
import BasketItem from './BasketItem'
import './Cart.css'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
function Cart() {
    const [{basket},dispatch]=useStateValue();
    return (
        <div className="cartpage">
             <div className="leftside">
              
              
                  <h1 className="carttitle">YOUR SHOPPING BASKET</h1>
                  
                 
                 {basket.map(item =>(
                  <BasketItem 
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                />
                ))}
                 
            
             </div>
             <div className="rightside">
                 <div className="sum">
                   <Subtotal></Subtotal>
                 </div>
                 <img className="adv" src="https://live.staticflickr.com/2090/2266152765_a95483b657_n.jpg"></img>
             </div>
        </div>
    )
}
export default Cart;
