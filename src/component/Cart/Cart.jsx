import React, { useState } from "react";
import style from "./Cart.module.css";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { useOutletContext } from "react-router-dom";

function Cart() {
  const { cart } = useOutletContext();

  // Initialize quantities for each product in the cart
  const [quantities, setQuantities] = useState(cart.map(() => 1));

  // Function to increase quantity for a specific product
  const addQuantity = (index) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((qty, i) => (i === index ? qty + 1 : qty))
    );
  };

  // Function to decrease quantity for a specific product
  const minusQuantity = (index) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((qty, i) => (i === index && qty > 1 ? qty - 1 : qty))
    );
  };

  return (
    <div className={style.cart_container}>
      <div className={style.cart_header}>
        <BiSolidShoppingBagAlt className={style.cart} /> <h2>My Cart</h2>
      </div>
      <div className={style.cart}>
        <div className={style.cartLeft}>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={item.src}
                      alt={item.title}
                      style={{ width: "70px" }}
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>₹{item.price}</td>
                  <td>
                    <div className={style.quantity}>
                      <button
                        className={style.first}
                        onClick={() => minusQuantity(index)}
                      >
                        -
                      </button>
                      <span className={style.separator}>
                        {quantities[index]}
                      </span>
                      <button
                        className={style.last}
                        onClick={() => addQuantity(index)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>₹{item.price * quantities[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={style.cartRight}>
          <h3>
            Total Amount: ₹
            {cart.reduce(
              (total, item, index) => total + item.price * quantities[index],
              0
            )}
          </h3>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
