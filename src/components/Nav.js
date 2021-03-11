import React from 'react'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import { BsFillBagFill } from "react-icons/bs";
const Nav = () => {
    const {totalQuantities} = useSelector(state => state.CartReducer)
    return (
        <div className="nav" style={{backgroundColor:"#005580"}}>
            <div className="container">
                <div className="nav__container">
                    <div className="nav__left">
                        <Link to="/"> <h1 style={{color:"white",fontWeight:"bold"}} className="china">CHINA-TOWN</h1> </Link>
                    </div>
                    <div className="nav__right">
                        <Link to="/cart">
                            <div className="basket">
                                
                             <BsFillBagFill style={{color:"white",width:30,height:30}} className="cart-icon" />
    <span>{totalQuantities}</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
