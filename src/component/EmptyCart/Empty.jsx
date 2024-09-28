import React from 'react'
import style from './Empty.module.css';
import { IoCartOutline } from "react-icons/io5";
import img from '../../assets/cart.jpg'

function Empty() {
  return (
    <div className={style.empty_container}>
      <div className={style.empty}>
        <h1>Shopping Cart</h1>
        <img src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png" className={style.emptyCart}/>
        <h3>Your Cart is Currently Empty!</h3>
        <p>Add something to make me happy :)</p>
        <button>Continue Shopping</button>
      </div>
    </div>
  )
}

export default Empty
