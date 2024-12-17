/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { HiArrowUp } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdLocationPin, MdMail } from "react-icons/md";
import { PiPhoneDisconnectFill } from "react-icons/pi";
import { TfiYoutube } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import "./Contact.css";
const Contact = () => {

    const [isVisible, setIsVisible] = useState(false);
  
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
          alert('Your Booking is Noted!');
        }
        catch (error) {
          console.error(error);
          alert('Something Went Wrong!');
        }
    };


  return (
    <div className="contact-page">
    
    
    <div  className="cimg">
    <img src="https://img.freepik.com/premium-photo/man-black-suit-stands-front-black-background-with-red-light_713562-7092.jpg"
    height={350} 
   width={1550}  alt="/" />
    <div className='cimg-c'>
    <div className='cimg-t'>
    <h1 className='cimg-h'>Contact</h1>
    <Link className="clin l1" to="/">Home / </Link>
    <Link className="clin l2" to="/contact">Contact</Link>
    </div>
    </div>
    </div>
    
    <img src="https://scottsfortcollinsauto.com/wp-content/uploads/CarService1-1.jpg" 
    alt="/"  className="contimg" />

    <div className="contact-form-container">
    <h2>Get In Touch</h2><br />
    <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
            />
        </div>
        <div className="form-row">
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
            >
                <option value="">Service Select</option>
                <option value="service1">Tiers Replacement</option>
                <option value="service2">Transmission</option>
                <option value="service3">Batteries</option>
                <option value="service3">Breaks</option>
            </select>
        </div>
        <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
        ></textarea>
        <button type="submit" className="submit-button">Send Message</button>
    </form>
</div>

    <div className="contact-box">
      <div className="cb-1" >
      <div className="logo-1">
        <p><MdLocationPin className="logo-size" /></p>
      </div>
      <div className="cb-title1">
      <p>Address</p>
      </div>
      <div className="cb-body1">
      <p> Green Fort , Theethipalayam , Coimbatore-641010</p>
      </div>
      </div>
      

  
      <div className="cb-2" >
      <div className="logo-2">
        <p><MdMail className="logo-size" /></p>
      </div>
      <div className="cb-title2">
      <p>Mail</p>
      </div>
      <div className="cb-body2"><p>service@wheelbro.com</p>
      </div>
      </div>

      <div className="cb-3" >
      <div className="logo-3">
        <p><PiPhoneDisconnectFill className="logo-size"/></p>
      </div>
      <div className="cb-title3">
      <p>Mobile</p>
      </div>
      <div className="cb-body3">
      <p>9932-020-542</p>
      </div>
      </div>
</div>

<img src="https://www.geotab.com/CMS-Media-production/UK/Resources/Blogs/2022/January/ConnectedCarsConnectedFleets/connected-car-blog-AdobeStock_190904424-823729237-hero@2x.jpg" 
alt="/"  className="contact-img" />

<p className="img-t">we can help. our team of experts is on hand to answer your question, by using our website,
 you can watch many services, you can easily contact us.
 24/7 any problem at any time, we are ready for your help, so pls contact us <br /><br />
 <h3 className="follow">Follow Us On:</h3>
 <ul className="followus" type="none">
<li><a herf="#"><h3><FaFacebookF/></h3></a></li>
<li><a herf="#"><h3><FaInstagram/></h3></a></li>
<li><a herf="#"><h3><FaTwitter/></h3></a></li>
<li><a herf="#"><h3><FaLinkedinIn/></h3></a></li>
<li><a herf="#"><h3><TfiYoutube/></h3></a></li>
<li><a herf="#"><h3><IoLogoWhatsapp/></h3></a></li>

</ul>
 </p><br />
 <div className="scroll-to-top">
  {isVisible &&
    <div onClick={scrollToTop} className="scroll-button">
      <p><HiArrowUp /></p>
    </div>
  }
</div>

    </div>
  )
}

export default Contact
*/


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdLocationPin, MdMail } from "react-icons/md";
import { PiPhoneDisconnectFill } from "react-icons/pi";
import { TfiYoutube } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import "./Contact.css";

const Contact = () => {
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
      setPopupMessage('Your Booking is Noted!');
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
    <div className="contact-page">
      {popupVisible && <div className="popup-message">{popupMessage}</div>}
      <div className="cimg">
        <img src="https://img.freepik.com/premium-photo/man-black-suit-stands-front-black-background-with-red-light_713562-7092.jpg"
          height={350}
          width={1550} alt="/" />
        <div className='cimg-c'>
          <div className='cimg-t'>
            <h1 className='cimg-h'>Contact</h1>
            <Link className="clin l1" to="/">Home / </Link>
            <Link className="clin l2" to="/contact">Contact</Link>
          </div>
        </div>
      </div>

      <img src="https://media.istockphoto.com/id/1706069983/photo/customer-satisfaction-guarantee-and-car-part-warranty-concept-male-employee-holding-an-led.jpg?s=612x612&w=0&k=20&c=5-q2WaDNIq9Lb5Np8kYX9J0JdLkWWVgrKE9pD_Qvrck="
        alt="/" className="contimg" />

      <div className="contact-form-container">
        <h2>Get In Touch</h2><br />

        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
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
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>

      <div className="contact-box">
        <div className="cb-1">
          <div className="logo-1">
            <p><MdLocationPin className="logo-size" /></p>
          </div>
          <div className="cb-title1">
            <p>Address</p>
          </div>
          <div className="cb-body1">
            <p> Green Fort , Theethipalayam , Coimbatore-641010</p>
          </div>
        </div>

        <div className="cb-2">
          <div className="logo-2">
            <p><MdMail className="logo-size" /></p>
          </div>
          <div className="cb-title2">
            <p>Mail</p>
          </div>
          <div className="cb-body2"><p>service@wheelbro.com</p>
          </div>
        </div>

        <div className="cb-3">
          <div className="logo-3">
            <p><PiPhoneDisconnectFill className="logo-size" /></p>
          </div>
          <div className="cb-title3">
            <p>Mobile</p>
          </div>
          <div className="cb-body3">
            <p>9932-020-542</p>
          </div>
        </div>
      </div>

      <img src="https://www.geotab.com/CMS-Media-production/UK/Resources/Blogs/2022/January/ConnectedCarsConnectedFleets/connected-car-blog-AdobeStock_190904424-823729237-hero@2x.jpg"
        alt="/" className="contact-img" />

      <p className="img-t">we can help. our team of experts is on hand to answer your question, by using our website,
        you can watch many services, you can easily contact us.
        24/7 any problem at any time, we are ready for your help, so pls contact us <br /><br />
        <h3 className="follow">Follow Us On:</h3>
        <ul className="followup" type="none">
          <li><a href="#"><h3 className='followups'><FaFacebookF /></h3></a></li>
          <li><a href="#"><h3 className='followups'><FaInstagram /></h3></a></li>
          <li><a href="#"><h3 className='followups'><FaTwitter /></h3></a></li>
          <li><a href="#"><h3 className='followups'><TfiYoutube /></h3></a></li>
          <li><a href="#"><h3 className='followups'><IoLogoWhatsapp /></h3></a></li>
        </ul>
      </p><br />

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

export default Contact;
