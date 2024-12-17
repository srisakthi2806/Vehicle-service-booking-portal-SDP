
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { HiArrowUp } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import './Batteryservice.css';

const Batteryservice = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  
    // Show button when page is scrolled down
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, []);

    const [formData, setFormData] = useState({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:8080/api/users/bookings", formData);
        console.log(response.data);
        setPopupMessage('Booking Confirmed!');
        setPopupVisible(true);
        setTimeout(() => setPopupVisible(false), 3000);
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          message: ''
        });
      } catch (error) {
        console.error(error);
        setPopupMessage('Create Account For Booking!');
        setPopupVisible(true);
        setTimeout(() => setPopupVisible(false), 3000);
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          message: ''
        });
      }
    };
    


    return (
        <div className="wheelservice-page">
        {popupVisible && <div className="popup-message">{popupMessage}</div>}
            <div className="sidebar">
                <div className="categories">
                    <h3>Categories</h3><br />
                    <ul>
                    <Link  to="/customrepair" className='links'><li className='wcat1'>Engine Repair</li></Link>
                    <Link  to="/oilreplacement" className='links'><li className='wcat2'>Oil Replacement</li></Link>
                    <Link  to="/dentpaint" className='links'><li className='wcat3'>Denting & Painting</li></Link>
                    <Link  to="/waterwash" className='links'><li className='wcat4'>Water Wash</li></Link>
                    <Link  to="/batteryservice" className='links'><li className='wcat5'>Batteries Replacement</li></Link>
                    <Link  to="/interiorvacuum" className='links'><li className='wcat6'>Interior Vacuum</li></Link>
                    </ul>
                </div><br />
                <div className="offer">
                    <h2>Get 25% Off</h2>
                    <p><h1>ALL ORDER</h1></p>
                </div>
                <div className="contact-info">
                    <p className='ics'> <FaPhone /> Phone</p>
                    <p className='infot'>9932-020-542</p><br />
                    <p className='ics'><MdEmail/> Email</p>
                    <p className='infot'> service@wheelbro.com</p><br />
                    <p className='ics'><FaLocationDot/> Address</p>
                    <p className='infot'>Green Fort , Theethipalayam , Coimbatore-641010</p>
                </div>
            </div>

            <div className="main-content">
                <div className="hero-image">
                    <img src="https://media.istockphoto.com/id/106545560/photo/auto-mechanic-replacing-car-battery.jpg?s=612x612&w=0&k=20&c=R582NLS4GlDiUTc6Cf3iBwM5_K24LqV4PG9Ew1ZaU9M=" alt="Hero"
                     />
                </div>
                <div className="content">
                    <p>At WheelBro, we ensure your vehicle's battery is in top condition. 
                    Our comprehensive battery service includes testing, maintenance, and replacement. 
                    Whether you’re dealing with slow starts, dim headlights, or warning lights on your 
                    dashboard, our experts will diagnose and fix the issue promptly. Trust WheelBro
                     to keep your vehicle powered up and running smoothly.</p>
                </div>
                <div className="highlighted-content">
                    <p>"Keep your wheels powered with WheelBro's expert battery service!"</p>
                </div>
                <div className="additional-content">
                    <img src="https://www.fasttrackemarat.com/assets/img/battery/banner.webp" alt="Additional 1" />
                    <p>Rev up your ride with WheelBro's top-notch battery service! Say goodbye to 
                    sluggish starts and dim lights. Our expert technicians
                     provide quick and reliable battery testing, maintenance, 
                     and replacement. <br /><br />With WheelBro, you'll always have the power to
                      go the extra mile. Stay charged and drive with confidence!</p>
                </div>
                <Link  to="/services" className='links'><button type="submit">Back To Services</button></Link>
              
            </div>


            <div className="wheelservice-container">
            <div className="wheelform-container">

                <h2>Book An Appointment</h2>
                <form onSubmit={handleSubmit}>
                    <div className="wheelform-group">
                        <input type="text" placeholder="Name"  name="name"  value={formData.name}
                        onChange={handleChange} required/>

                        <input type="text" placeholder="Phone" name="phone"  value={formData.phone}
                        onChange={handleChange} required/>
                    </div>
                    <div className="wheelform-group">
                        <input type="email" placeholder="Email" name="email"   value={formData.email}
                        onChange={handleChange} required />
                        <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange} required>
                        <option value="">Service Select</option>
                        <option value="Wheel Care">Wheel Care</option>
                        <option value="Battery">Battery</option>
                        <option value="Water Wash">Water Wash</option>
                        <option value="Oil Replacement">Oil Replacement</option>
                        <option value="Denting & Painting">Denting & Painting</option>
                        <option value="Interior Vacuum">Interior Vacuum</option>
                        <option value="Body Polish">Body Polish</option>
                        </select>
                    </div>
                    <div className="wheelform-group">
                        <textarea placeholder="Message"
                        name="message"
                        value={formData.message}
            onChange={handleChange} required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
            </div>
            <div className="scroll-to-top">
  {isVisible &&
    <div onClick={scrollToTop} className="scroll-button">
      <p><HiArrowUp /></p>
    </div>
  }
</div>
        </div>
        
    );
};

export default Batteryservice;
