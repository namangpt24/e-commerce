import React, { useEffect } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import BasketItem from './BasketItem';
import {Link ,useHistory} from 'react-router-dom'
import { useState } from 'react';
import {CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { getBasketTotal } from './reducer';
import axios from './axios';
import { db } from './Firebase';
function Payment() {
    const [{basket,user},dispatch]=useStateValue();
    const stripe =useStripe();
    const elements = useElements(); 
    const [error,setError]=useState(null);
    const [disabled,setDisabled]=useState(true);
    const [succeeded,setSucceeded]=useState(false);
    const [processing,setProcessing]=useState("");
    const [clientSecret, setClientSecret]=useState(true);
    const hist=useHistory();
    //what this useeffect does is whenever there is a change in basket
    //this whole request will be made for the stripe secret
    useEffect(()=>{
     //generate stripe secret which allows us to charge a customer
     //and also whenever basket changes we need to get a new secret
     const getClientSecret=async ()=>{
      const response=await axios ({
          method:"post",
          //stripe expects the total in a currencies subunits(paise)
          url: `/payments/create?total=${getBasketTotal(basket)*100}`
      })
      console.log(response.data);
      setClientSecret(response.data.clientSecret)
     }
     getClientSecret();
    },{basket})
   
    console.log("the secret is  ",clientSecret)
    const submitfunc= async (event)=>{
        event.preventDefault();
        setProcessing(true);

        const payload=await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            },
        }) .then(({paymentIntent})=>{
            console.log(paymentIntent);
            //paymentIntent=paymentConfirmation
            db.collection("users")
            .doc(user?.uid)
            .collection("orders")
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })
            setSucceeded(true);
            setError(null)
            setProcessing(false)
            dispatch({
                type: "empty_basket",
              });
            hist.replace('/')
            alert("Your Payment is successful");
        })
        
    }
    const changefunc= o=>{
      //Listen for changes in the card element
      // and display any errors as the customer types their card details
      setDisabled(o.empty);
      setError(o.error ? o.error.message : "");
    }
    const price=getBasketTotal(basket);
    const rupee=Intl.NumberFormat('en-IN',{
        style:"currency",
        currency:"INR"
    })

    return (
        <div className="payment">
             <div className="paymentcontainer">
                 <h1 className="paymentheading">Total Number Of <Link to="/cart">({basket?.length})</Link> items</h1>
                 <div className="paymentsection">
                       <div className="ptitle">
                           <h3>Payment Address:</h3>
                       </div>
                       <div className="pactual">
                           <p className="paymentemail">{user?.email}</p>
                           <p>House No. 123</p>
                           <p>Sector 12</p>
                           <p>Faridabad,Haryana(121006)</p>
                       </div>
                 </div>
                 <div className="paymentsection">
                    <div className="ptitle">
                        <h3>Review items and delivery:</h3>
                    </div>
                    <div className="pactual">
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
                 </div>
                 <div className="paymentsection">
                         <div className="ptitle">
                             <h3>Payment Method:</h3></div>   
                             <div className="pactual">
                                 <form onSubmit={submitfunc}>
                                     <CardElement onChange={changefunc}>

                                     </CardElement>
                                     <div className="pricecont">
                                      <h3 className="pricetotal">Order Total: {rupee.format(price)}</h3>
                                      <button disabled={processing || disabled || succeeded}>
                                          <span>{processing ? <p>Processing</p>:"Buy Now"}</span>
                                      </button>
                                     </div>
                                     {error && <div>{error}</div>}
                                 </form>
                             </div>                     
                 </div>
             </div>
        </div>
    )
}

export default Payment
