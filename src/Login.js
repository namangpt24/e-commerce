import React from 'react'
import './Login.css'
import {Link,useHistory} from 'react-router-dom'
import { useStateValue } from './StateProvider'
import {useState} from 'react'
import {createUserWithEmailAndPassword } from "firebase/auth";
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "./Firebase"
import { async } from '@firebase/util'


function Login() {
  const hist=useHistory();

   const [email,updateemail]=useState('');
   const [pass,updatepass]=useState('');
   

const signin= async (o)=> {
    o.preventDefault();
    //create a user
    try{
     const user=await signInWithEmailAndPassword(auth,email,pass)
     
      hist.push('/') 
    }
    catch(error) {
        alert("Wrong Username or Password");
        const errorCode = error.code;
         const errorMessage = error.message;}
   
    
}      


    const register= async (ob)=> {
     ob.preventDefault();
       //create a user
       try{
        const user=await createUserWithEmailAndPassword(auth,email,pass);
        console.log(user);
        if(user){
               hist.push('/')

           }
        
       
    }
       catch(error) {
           console.log(error.message);
           const errorCode = error.code;
            const errorMessage = error.message;}
      
       
   }
return (
        <div className="login">
            <Link to='/'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" className="loginimg"></img>
            </Link>
            <div className="signin">
              <h1 className="signheading">Sign-In</h1> 
              <form className="signinform">
                  <h4>E-mail</h4>
                  <input className="signinput" type="text" onChange={(obj)=>(

                     updateemail(obj.target.value)
                  )}></input>
                  <h4>Password</h4>
                  <input className="signinput" type="password" onChange={(o)=>(
                      updatepass(o.target.value)
                  )}></input>
                  <button type="submit" className="signinbt" onClick={signin}>Sign In</button>

              </form>
              <p className="gyaan">By Signing in, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
              
              <button className="createbt" onClick={register}>Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
