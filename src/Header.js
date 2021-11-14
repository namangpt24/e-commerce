import React from "react";
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Link} from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import {signOut} from 'firebase/auth';
import {auth} from './Firebase'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import Hamburger from './Hamburger';
const Header = () => {
const [{basket,user},dispatch]=useStateValue();
 const signinoutfunc=()=>{
    if(user){
      signOut(auth).then(()=>{

      }).catch((error)=>{

      });
    }
 }
  const[decision,setdecision]=useState(false);

  return (
    <>
      <div className="header">
        <div className="menuclass">
      <MenuIcon className="menu" onClick={()=>{
         setdecision(!decision);
      }}></MenuIcon>
          </div>
        <Link to="/"> <img className="headimg" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"></img></Link>
       
        <div className="headersearch">
          <input
            className="searchinput"
            type="text"
            
          ></input>
          <SearchIcon className="headerbt"></SearchIcon>
        </div>
        <div className="headernav">
        <Link to={!user && '/login'}>
        <div onClick={signinoutfunc} className="navoption">
            <span className="upper_navoption" >Hello {user? user.email : 'Guest'}</span>
            <span className="lower_navoption" >{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
        </Link>
        
        <div className="navoption">
        <span className="upper_navoption" >Returns</span>
        <span className="lower_navoption" >& Orders</span>
        </div>
        <a href="https://www.primevideo.com/" target="_blank">
        <div className="navoption">
        <span className="upper_navoption" >Your</span>
        <span className="lower_navoption" >Prime</span>
        </div>
        </a>
        </div>
        <Link to="/cart">
        <div className="cartt">
        <AddShoppingCartIcon/>
        <span className="cartcount">{basket?.length}</span>
        </div>
        </Link>
        
        
      </div>
      {decision && <Hamburger/>}
      <div className="header2">
      <div className="headersearch2">
          <input
            className="searchinput2"
            type="text"
            
          ></input>
          <SearchIcon className="headerbt2"></SearchIcon>
        </div>
      </div>
    </>
  );
};
export default Header;
