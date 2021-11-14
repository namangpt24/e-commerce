import './App.css'
import Header from './Header'
import Home from './Home'
import Cart from './Cart'
import Login from './Login'
import Footer from './Footer'
import Payment from './Payment'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { useEffect } from 'react'
import {auth} from "./Firebase"
import {onAuthStateChanged} from 'firebase/auth';
import { useStateValue } from './StateProvider'
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js'

const promise=loadStripe("pk_test_51JuGmnSE4XZmlpDju75BegJhI5xcBI4Jxg6tf2IoZmDSXfnaxmbQYJi7Jel2DiY8ZG3RE7tc0oznCJJjVSmJtl4E00KwGdNIof")


function App() {
  const[{},dispatch]=useStateValue();
  useEffect(()=>{
//will only run once when the app component loads.
  auth.onAuthStateChanged(authUser =>{
    console.log('The User is >>> ', authUser);
    if(authUser){
      //the user is logged in
      dispatch({
        type:'Set_user',
        user:authUser
      })
    }
    else{
      //the user is logged out
      dispatch({
        type:'Set_user',
        user:null
      })
    }
  })
  },[])
  return (
    <Router>
      <div className="App">
       <Switch>
         <Route path="/login">
           <Login></Login>
           <Footer></Footer>
         </Route>
       <Route path="/cart">
       <Header></Header>
         <Cart></Cart>
         <Footer></Footer>
         </Route>
         <Route path="/payment">
         <Header></Header>
         <Elements stripe={promise}>
         <Payment></Payment>
         </Elements>
           
         </Route>
         <Route path="/">
         <Header></Header>
         <Home></Home>
         <Footer></Footer>
         </Route>
         
       </Switch>
      
    </div>
    </Router>
  );
}

export default App;
