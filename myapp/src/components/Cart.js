import React from 'react';
import { NavLink } from "react-router-dom";
import NavigationBar from "./Navbar";

const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  const handleIncrement = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    window.location.reload(); // Refresh the page to update the cart
  };

  const handleDecrement = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));
      window.location.reload(); // Refresh the page to update the cart
    }
  };

  const handleRemove = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    window.location.reload(); // Refresh the page to update the cart
  };

  const getTotalBill = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };

  return (
    
    <div className="container">
    
      <h1>Your Cart</h1>
      <br />
      <br />
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image}  height="100px" width="100px"alt={item.title} />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <div className="cart-item-actions">
                  <button onClick={() => handleIncrement(index)}>+</button>
                  <button onClick={() => handleDecrement(index)}>-</button>
                  <button onClick={() => handleRemove(index)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
          <h2>Total Bill: ${getTotalBill()}</h2>

          <NavLink to="/Home" className="btn btn-outline-dark" >Continue Shopping</NavLink>
        </div>

        
      )}
    </div>
  );
};

export default Cart;
