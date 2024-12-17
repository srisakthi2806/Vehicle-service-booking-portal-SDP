
/*import React, { useState } from 'react';
import './Checkout.css';
import { Link } from 'react-router-dom';

function Checkout() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        fromAddress: '',
        vehicleDetails: '',
        service: '',
        date: '',
        notes: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form data submitted:', formData);
    };

    return (
        <div>
       <br /><br /> <form className="checkout-form" onSubmit={handleSubmit}>
            <h2 className="checkout-title">Booking Information</h2>
            <div className="checkout-group">
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <input 
                    type="text" 
                    name="lastName" 
                    placeholder="Last Name" 
                    value={formData.lastName} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div className="checkout-group">
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="tel" 
                    name="phone" 
                    placeholder="Phone Number" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div className="checkout-group">
                <input 
                    type="text" 
                    name="fromAddress" 
                    placeholder="From Address" 
                    value={formData.fromAddress} 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="text" 
                    name="vehicleDetails" 
                    placeholder="Vehicle Details" 
                    value={formData.vehicleDetails} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div className="checkout-group">
                
                <input 
                    type="date" 
                    name="date" 
                    value={formData.date} 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="text" 
                    name="vehicleNumber" 
                    placeholder="Vehicle Number" 
                    value={formData.vehicleDetails} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div className="checkout-group">
                <textarea 
                    name="notes" 
                    placeholder="Additional Notes" 
                    value={formData.notes} 
                    onChange={handleChange} 
                />
            </div>
            <button type="submit" className="check-button"><Link className="check-button" to="/payment">Continue</Link></button>
        </form><br /><br />
        </div>
    );
}

export default Checkout;*/


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import './Checkout.css';

function Checkout() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        fromAddress: '',
        vehicleDetails: '',
        service: '',
        date: '',
        notes: ''
    });

    const [formErrors, setFormErrors] = useState({});

    const navigate = useNavigate();  // Hook for navigation

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const errors = {};
        // Basic validation for required fields
        if (!formData.firstName) errors.firstName = 'First name is required';
        if (!formData.lastName) errors.lastName = 'Last name is required';
        if (!formData.email) errors.email = 'Email is required';
        if (!formData.phone) errors.phone = 'Phone number is required';
        if (!formData.fromAddress) errors.fromAddress = 'From address is required';
        if (!formData.vehicleDetails) errors.vehicleDetails = 'Vehicle details are required';
        if (!formData.date) errors.date = 'Date is required';
        // You can add more custom validation here if needed

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);  // Set errors state to display error messages
        } else {
            setFormErrors({});  // Clear errors if the form is valid
            console.log('Form data submitted:', formData);
            navigate('/payment'); // Use programmatic navigation to go to payment page
        }
    };

    return (
        <div>
            <br /><br />
            <form className="checkout-form" onSubmit={handleSubmit}>
                <h2 className="checkout-title">Booking Information</h2>
                
                {/* First Name and Last Name */}
                <div className="checkout-group">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    {formErrors.firstName && <p className="error">{formErrors.firstName}</p>}  {/* Error message */}
                    
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                    {formErrors.lastName && <p className="error">{formErrors.lastName}</p>}  {/* Error message */}
                </div>

                {/* Email and Phone */}
                <div className="checkout-group">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {formErrors.email && <p className="error">{formErrors.email}</p>}  {/* Error message */}
                    
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    {formErrors.phone && <p className="error">{formErrors.phone}</p>}  {/* Error message */}
                </div>

                {/* From Address and Vehicle Details */}
                <div className="checkout-group">
                    <input
                        type="text"
                        name="fromAddress"
                        placeholder="From Address"
                        value={formData.fromAddress}
                        onChange={handleChange}
                        required
                    />
                    {formErrors.fromAddress && <p className="error">{formErrors.fromAddress}</p>}  {/* Error message */}
                    
                    <input
                        type="text"
                        name="vehicleDetails"
                        placeholder="Vehicle Details"
                        value={formData.vehicleDetails}
                        onChange={handleChange}
                        required
                    />
                    {formErrors.vehicleDetails && <p className="error">{formErrors.vehicleDetails}</p>}  {/* Error message */}
                </div>

                {/* Date and Vehicle Number */}
                <div className="checkout-group">
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                    {formErrors.date && <p className="error">{formErrors.date}</p>}  {/* Error message */}
                    
                    <input
                        type="text"
                        name="vehicleNumber"
                        placeholder="Vehicle Number"
                        value={formData.vehicleDetails}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Additional Notes */}
                <div className="checkout-group">
                    <textarea
                        name="notes"
                        placeholder="Additional Notes"
                        value={formData.notes}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="check-button">Continue</button>
            </form>
            <br /><br />
        </div>
    );
}

export default Checkout;

