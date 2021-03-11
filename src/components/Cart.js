import React  from 'react'
import {useSelector, useDispatch} from "react-redux";
import currencyFormatter from "currency-formatter";
import {BsDash, BsPlus} from "react-icons/bs";
import Modal from "react-modal"
import { BsReverseBackspaceReverse } from "react-icons/bs";
import { useState } from "react";
const Cart = () => {
    const {products,totalQuantities,totalPrice} = useSelector(state => state.CartReducer);

    const dispatch = useDispatch();
    return (
        <div className="cart">
            <div className="container">
                <h1 style={{textAlign:"center",marginBottom:10}}>Your cart</h1>
                {products.length > 0 ? <>
                <div className="row">
                    <div className="col-9">
                    <div className="cart__heading" style={{backgroundColor:"#005580",color:"white"}}>
                        <div className="row">
                            <div className="col-2">Picture</div>
                            <div className="col-2">Name</div>
                            <div className="col-2">Price</div>
                            <div className="col-2">Inc/Dec</div>
                            <div className="col-2">Total Price</div>
                            <div className="col-2">Remove</div>
                        </div>
                    </div>
                    {products.map(product => (
                        <div className="row verticalAlign" key={product.id}>
                         <div className="col-2">
                             <div className="cart__image">
                                 <img src={`/images/${product.image}`} alt=""/>
                            </div>   
                         </div>
                         <div className="col-2">
                             <div className="cart__name">
                                 {product.name}
                             </div>
                         </div>
                         <div className="col-2">
                             <div className="cart__price">
                                 {currencyFormatter.format(product.discountPrice, {code: 'USD'})}
                             </div>
                         </div>
                         <div className="col-2">
                         <div className="details__info cart__incDec">
                    <div className="details__incDec">
                    <span className="dec" onClick={() => dispatch({type: 'DEC', payload: product.id})}><BsDash /></span>
    <span className="quantity">{product.quantity}</span>
    <span className="inc" onClick={() => dispatch({type: 'INC', payload: product.id})}><BsPlus/></span>
    </div>
                </div>
                         </div>
                         <div className="col-2">
                             <div className="cart__total text-center">
                                 {currencyFormatter.format(product.discountPrice * product.quantity, {code: 'USD'})}
                             </div>
                         </div>
                         <div className="col-2">
                             <div className="cart__remove" onClick={() => dispatch({type: 'REMOVE', payload: product.id})}>
                                 <BsReverseBackspaceReverse />
                             </div>
                         </div>
                        </div>
                    ))}
                    </div>
                    <div className="col-3 summary-col">
                        <div className="summary" >
                            <div className="summary__heading" style={{backgroundColor:"#005580",color:"white"}}>
                                Summary
                            </div>
                            <div className="summary__details" style={{backgroundColor:"#005580"}}>
                                <div className="row mb-10">
                                    <div className="col-6">
                                        Total Items:
                                    </div>
                    <div className="col-6">{totalQuantities}</div>
                                </div>
                                <div className="row mb-10">
                                    <div className="col-6">
                                        Total Price
                                    </div>
                                    <div className="col-6">
                                        {currencyFormatter.format(totalPrice, {code: 'USD'})}
                                    </div>
                                </div>
                                <button type="button" className="checkout" style={{color:"#005580",fontWeight:"bold"}} >Checkout</button>
                            </div>
                        </div>
                    </div>
                  
                </div>
                </> : <h2 style={{textAlign:"center",color:"#005580",fontWeight:"bold"}}>'Your cart is empty!'</h2> }
            </div>
        </div>
    )
}

export default Cart