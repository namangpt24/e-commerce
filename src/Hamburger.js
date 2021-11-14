import React from 'react'
import "./Hamburger.css"
import {Link} from 'react-router-dom'
import { useStateValue } from './StateProvider'
function Hamburger() {
    const[{basket,user},dispatch]=useStateValue();
    return (
        <div className='hamdiv'>
            <Link to={ !user && "/Login"} className="hamsign">
                <p>{user ? "Sign Out" : "Sign In"}</p>
            </Link>
            
            <a href="" className="hama">Your Prime</a>
        </div>
    )
}

export default Hamburger
