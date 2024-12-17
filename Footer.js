import React from 'react';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn, FaLocationDot, FaPhone, FaTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { TfiYoutube } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import WheelBroLogoS from './Assets/WheelBroLogoS.png';
import "./Footer.css";

const Footer = () => {
  return (
    <div>
   
    <hr className='line'></hr><div className="foot"  >
    
    <div className="sec1">
    
    <ul type="none"  className="flogo">
    <h2><li><img src= {WheelBroLogoS} height={90} width={200} /></li></h2>
    </ul>
    <p className='sec-t'>WheelBro provides premium quality care for your luxury vehicle service at an affordable price. 
    With a fair and transparent pricing mechanism,
     we rebuild your trust in vehicle service and live updates.</p>
<ul className="ic" type="none">

<li><a herf="#"><h3><FaFacebookF/></h3></a></li>
<li><a herf="#"><h3><FaInstagram/></h3></a></li>
<li><a herf="#"><h3><FaTwitter/></h3></a></li>
<li><a herf="#"><h3><TfiYoutube/></h3></a></li>
<li><a herf="#"><h3><IoLogoWhatsapp/></h3></a></li>

</ul>
</div>

    <div className="sec2">
    <h2>Services</h2>
    <ul type="none">

    <Link  to="/customrepair" className='flinks'><li >Engine Repair</li></Link>
    <Link  to="/oilreplacement" className='flinks'><li >Oil Replacement</li></Link>
    <Link  to="/dentpaint" className='flinks'><li >Denting & Painting</li></Link>
    <Link  to="/waterwash" className='flinks'><li >Water Wash</li></Link>
    <Link  to="/batteryservice" className='flinks'><li>Batteries Replacement</li></Link>
    <Link  to="/interiorvacuum" className='flinks'><li>Interior Vacuum</li></Link>

    </ul>
    </div>

    <div className="sec3">
    <h2>Links</h2>
    <ul type="none">
    
    <Link  to="/" className='flinks'><li >Home</li></Link>
    <Link  to="/services" className='flinks'><li >Services</li></Link>
    <Link  to="/howitworks" className='flinks'><li >How It Works</li></Link>
    <Link  to="/about" className='flinks'><li >About Us</li></Link>
    <Link  to="/contact" className='flinks'><li>Contact</li></Link>
    <Link  to="/login" className='flinks'><li>Login/Signup</li></Link>

    </ul>
    </div>
      
    <div className="sec4">
    <h2>Contact Us</h2>
    <ul type="none" >
    <li><a herf="#"><FaLocationDot />  Green Fort , Theethipalayam , Coimbatore-641010</a></li><br />
    <li> <a herf="#"><MdEmail />  service@wheelbro.com</a></li><br />
    <li> <a herf="#"><FaPhone />  9932-020-542</a></li>
    </ul>
    </div>  


    </div>
    </div>


  )
}

export default Footer
