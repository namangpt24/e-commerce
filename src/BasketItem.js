import React from 'react'
import './BasketItem.css'
import { useStateValue } from './StateProvider'
function BasketItem({id,image,title,price,rating}) {
    const [{basket},dispatch]=useStateValue();
    const removefunc=()=>{
        dispatch({
            type:"Remove_from_basket",
            id:id,
        })
    }
    return (
        <div className="Basketitem">
            <img src={image} className="basketimg"></img>
            <div className="basketinfo">
                <p className="baskettitle">{title}</p>
                <p className="basketprice">
                    <small>Rs </small>
                    <strong>{price}</strong>
                </p>
                <div className="rating">
                    {Array(rating).fill().map(()=>(
                        <p>⭐</p>
                    ))}
                </div>
                <button className="removebasket" onClick={removefunc}>Remove from basket</button>
            </div>
        </div>
    )
}

export default BasketItem
