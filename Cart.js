import React, { useContext } from 'react';
import { GiCheckMark } from "react-icons/gi";
import { Link } from 'react-router-dom';
import './Cart.css';
import { CartContext } from './CartContext';

function Cart() {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);

    const handleRemove = (id) => {
        removeFromCart(id);
    };

    const handleClearCart = () => {
        clearCart();
    };
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);


    return (
        <div className="cart-container">
            <h1 className='carthead'>Your Cart</h1><br />
            {cart.length === 0 ? (
                <p className='cartp'>Your cart is empty !</p>
            ) : (
                <React.Fragment>
                    <ul className="cart-items">
                        {cart.map((item) => (
                            <li key={item.id} className="cart-item">
                                <img src={item.imageUrl} alt={item.title} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3>{item.title}</h3>
                                    <div className="service-details"> {item.types.map((type, index) => (
                                        <p key={index}><GiCheckMark className='bicn'/> {type}</p>
                                    ))}</div>
                                    <p className='cost'>Price: ₹{item.price}</p>
                                    <button onClick={() => handleRemove(item.id)} className="remove-item-button">Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="cart-total">
                        <h2>Total Amount : ₹ {totalPrice}</h2>
                    </div>


                    <div className="cart-actions">
                        <button onClick={handleClearCart} className="clear-cart-button">Clear Cart</button>
                        <button className="checkout-button"><Link className="checkout-button" to="/checkout">Checkout</Link></button>
                    </div>
                </React.Fragment>
            )}
        </div>
    );
}

export default Cart;
