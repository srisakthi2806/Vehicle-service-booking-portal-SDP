import React, { useContext, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import WheelBroLogo from './Assets/WheelBroLogo.png';
import './Bikeservices';
import './Blogpage';
import './Carservices';
import './Cart';
import { CartContext } from './CartContext';
import './Login.css';
import './LoginValidation';
import "./Navbar.css";
import './Signup.css';
import './SignupValidation';


const Navbar = () => {


const {cart} = useContext(CartContext);

  const [visible,setvisible]=useState(true);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  return (

    <header>
    <div >
    <ul type="none"  className="logo">
    <h2><li><img src= {WheelBroLogo} height={240} width={250} alt='/'/></li></h2>
    </ul>
    </div>
    
    <div className="display-menu">
    <Link className="menu" to="/">Home</Link>
    <Link className="menu" to="/services">Services</Link>
    <div className="menu dropdown" onMouseEnter={() => setDropdownVisible(true)} onMouseLeave={() => setDropdownVisible(false)}>
          <Link className="menu" to="/services">Book Service</Link>
          {dropdownVisible && (
            <div className="dropdown-content">
              <Link to="/carservices">Car Services</Link>
              <Link to="/bikeservices">Bike Services</Link>
            </div>
          )}
        </div>
    <Link className="menu" to="/howitworks">How it works?</Link>
    <Link className="menu" to="/blogpage">Blogs</Link>
    
    <Link className="menu" to="/about">About</Link>
    <Link className="menu" to="/contact">Contact</Link>
    <Link className="menu" to="/Signup" onClick={()=>setvisible(true)}>Signup</Link>

    <Link className="menu cart-icon" to="/cart">
    <FiShoppingCart size={24} />
    {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
  </Link>

    
    </div>
    </header>

  )
}

export default Navbar
