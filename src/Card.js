import React from 'react'
import './Card.css'
import { useStateValue } from './StateProvider'

function Card({id,title,price,image,rating}) {
    const [{basket}, dispatch]= useStateValue();
    console.log(basket);
    const add=()=>{

        dispatch({
            type:"Add_to_basket",
            item: {
                id:id,
                title:title,
                price:price,
                image:image,
                rating:rating,
            },
        });
    }

    return (
        <div className="card">
        <div className="cardinfo">
            <p className="cardtitle">{title}</p>
            <p className="price">
                <small>Rs</small>
                <strong>{price}</strong>
            </p>
            <div className="cardrating">
                {Array(rating).fill().map(()=>(<small>⭐</small>))}
            </div> 
            <button className="cardbt" onClick={add}>ADD TO CART</button>
        </div>
        
        <img className="cardimg" src={image}></img>
        
            
        </div>
    )
}

export default Card
