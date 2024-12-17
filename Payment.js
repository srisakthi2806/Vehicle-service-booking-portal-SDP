import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Payment.css';

function Payment() {
    const { cart } = useContext(CartContext);
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <div><br /><br />
        <div className="payment-container">
            <div className="payment-form">
                <h2>Pay with card</h2>
                <form>
                    <div className="payment-group">
                        <label htmlFor="cardName">Name on card</label>
                        <input type="text" id="cardName" name="cardName" required/>
                    </div>
                    <div className="payment-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="payment-group">
                        <label htmlFor="cardNumber">Card Number</label>
                        <input type="text" id="cardNumber" name="cardNumber" placeholder="1234 1234 1234 1234" required/>
                    </div>
                    <div className="payment-group">
                        <label htmlFor="expirationDate">Expiration Date</label>
                        <input type="text" id="expirationDate" name="expirationDate" placeholder="MM / YY" required/>
                    </div>
                    <div className="payment-group">
                        <label htmlFor="cvc">CVC</label>
                        <input type="text" id="cvc" name="cvc" placeholder="CVC" required />
                    </div>
                    <button type="submit" className="pay-button">PAY ₹ {totalPrice}</button>
                </form>
                
            </div>
            <div className="cart-summary">
                <h3>Your cart <span>({cart.length})</span></h3>
                <ul className="cart-items">
                    {cart.map((item, index) => (
                        <li key={index} className="cart-item">
                            <p>{item.title}</p>
                            <p>₹{item.price}</p>
                        </li>
                    ))}
                </ul>
              
                <div className="cart-total">
                    <p>Total (INR)</p>
                    <p>₹ {totalPrice}</p>
                </div>
            </div>
        </div><br /><br />
        </div>
    );
}

export default Payment;


/*import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import './Payment.css';

function Payment() {
    const { cart } = useContext(CartContext);
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const [formData, setFormData] = useState({
        cardName: '',
        email: '',
        cardNumber: '',
        expirationDate: '',
        cvc: '',
    });

    const [popup, setPopup] = useState({
        isVisible: false,
        message: '',
        success: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Form validation (basic example)
        if (
            formData.cardName &&
            formData.email &&
            formData.cardNumber &&
            formData.expirationDate &&
            formData.cvc
        ) {
            // Show success popup
            setPopup({
                isVisible: true,
                message: 'Payment Successful!',
                success: true,
            });
        } else {
            // Show failure popup
            setPopup({
                isVisible: true,
                message: 'Please fill in all fields correctly!',
                success: false,
            });
        }
    };

    const closePopup = () => {
        setPopup({ ...popup, isVisible: false });
    };

    return (
        <div>
            <br />
            <br />
            <div className="payment-container">
                <div className="payment-form">
                    <h2>Pay with card</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="payment-group">
                            <label htmlFor="cardName">Name on card</label>
                            <input
                                type="text"
                                id="cardName"
                                name="cardName"
                                value={formData.cardName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="payment-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="payment-group">
                            <label htmlFor="cardNumber">Card Number</label>
                            <input
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                placeholder="1234 1234 1234 1234"
                                value={formData.cardNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="payment-group">
                            <label htmlFor="expirationDate">Expiration Date</label>
                            <input
                                type="text"
                                id="expirationDate"
                                name="expirationDate"
                                placeholder="MM / YY"
                                value={formData.expirationDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="payment-group">
                            <label htmlFor="cvc">CVC</label>
                            <input
                                type="text"
                                id="cvc"
                                name="cvc"
                                placeholder="CVC"
                                value={formData.cvc}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="pay-button">
                            PAY ₹ {totalPrice}
                        </button>
                    </form>
                </div>

                <div className="cart-summary">
                    <h3>Your cart <span>({cart.length})</span></h3>
                    <ul className="cart-items">
                        {cart.map((item, index) => (
                            <li key={index} className="cart-item">
                                <p>{item.title}</p>
                                <p>₹{item.price}</p>
                            </li>
                        ))}
                    </ul>

                    <div className="cart-total">
                        <p>Total (INR)</p>
                        <p>₹ {totalPrice}</p>
                    </div>
                </div>
            </div>

            {popup.isVisible && (
                <div className={`popup ${popup.success ? 'success' : 'failure'}`}>
                    <div className="popup-content">
                        <p>{popup.message}</p>
                        <button onClick={closePopup}>Close</button>
                    </div>
                </div>
            )}

            <br />
            <br />
        </div>
    );
}

export default Payment;*/

