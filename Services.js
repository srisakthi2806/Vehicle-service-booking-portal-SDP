import React, { useEffect, useState } from 'react';
import { AiFillCarryOut } from "react-icons/ai";
import { BiSolidCarGarage, BiSolidCarMechanic } from "react-icons/bi";
import { FaOilCan } from "react-icons/fa";
import { FaRegFaceSmileBeam, FaTruckArrowRight } from "react-icons/fa6";
import { GiCarBattery, GiCarWheel, GiPoliceCar, GiSpanner, GiSpray, GiVacuumCleaner } from "react-icons/gi";
import { GoTools } from "react-icons/go";
import { HiArrowUp } from "react-icons/hi";
import { IoOptionsOutline } from "react-icons/io5";
import { MdCarCrash, MdLocalCarWash } from "react-icons/md";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
import "./Services.css";

const Services = () => {
  const user = JSON.parse(localStorage.getItem('user'));
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





  return (
    <div className="service-page">
    <div  className="simg">
    <img src="https://images.squarespace-cdn.com/content/v1/55c0d1f8e4b0fa21b0a2e94a/1684259612044-2IV6B7Q3KT9B7PJXP45U/chicago-car-service.jpg?format=2500w"
    height="400px" width="2010px" className='img'/><br /><br />
    <div className='simg-c'>
    <div className='simg-t'>
    <h1 className='simg-h'>Service</h1>
    <Link className="lin l1" to="/">Home / </Link>
    <Link className="lin l2" to="/services">Service</Link>
    </div>
    </div>
    </div>

    <div className='whatwedo' >
    <p>What We Do</p>
    <h1>Our Services</h1>
    </div>
   

    <div className="service-box">
    <div className="sb1" >
    <div className="sl1">
    <Link  to="/wheelservice" className='links'> <h1><GiCarWheel className="logos"/></h1></Link>
    </div>
    <div className="sb-title1">
    <h4>Wheel Care</h4>
    <p>"Keep your wheels in top shape with Wheelbro's expert care!"</p>
    </div>
  
    </div>
    

   
    <div className="sb2" >
    <div className="sl2">
    <Link  to="/batteryservice" className='links'>   <h1><GiCarBattery className="logos" /></h1></Link>
    </div>
    <div className="sb-title2">
    <h4>Battery</h4>
    <p>"Power up with Wheelbro's reliable battery service!"</p>
   </div>
    </div>

    <div className="sb3" >
    <div className="sl3">
    <Link  to="/dentpaint" className='links'>   <h1><GiSpray className="logos" /></h1></Link>
    </div>
    <div className="sb-title3">
    <h4>Denting & Painting</h4>
    <p>"Restore your ride's shine with Wheelbro's denting and painting service!"</p>
    </div>
    
    </div>

    <div className="sb4" >
    <div className="sl4">
    <Link  to="/customrepair" className='links'>  <h1><GiSpanner className="logos" /></h1></Link>
    </div>
    <div className="sb-title4">
    <h4>Custom Repair</h4>
    <p>
    "Tailored fixes just for your ride with Wheelbro's custom repair service!"</p>
    </div>
    
    </div>

</div>

<div className="service-box">
    <div className="sb1" >
    <div className="sl1">
    <Link  to="/oilreplacement" className='links'>  <h1><FaOilCan className="logos"/></h1></Link>
    </div>
    <div className="sb-title1">
    <h4>Oil Replacement</h4>
    <p>"Smooth rides start with Wheelbro's quick oil replacement service!"</p>
    </div>
  
    </div>
    
    <div className="sb2" >
    <div className="sl2">
    <Link  to="/waterwash" className='links'>  <h1><MdLocalCarWash className="logos" /></h1></Link>
    </div>
    <div  className="sb-title2">
    <h4>Water Wash</h4>
    <p>
    "Sparkle and shine with Wheelbro's premium water wash service!"</p>
   </div>
    </div>

    <div className="sb3" >
    <div className="sl3">
    <Link  to="/interiorvacuum" className='links'>  <h1><GiVacuumCleaner className="logos" /></h1></Link>
    </div>
    <div className="sb-title3">
    <h4>Interior Vacuum</h4>
    <p>"Refresh your ride with Wheelbro's thorough interior vacuum service!"</p>
    </div>
    
    </div>

    <div className="sb4" >
    <div className="sl4">
    <Link  to="/bodypolish" className='links'>  <h1><GiPoliceCar className="logos" /></h1></Link>
    </div>
    <div className="sb-title4">
    <h4>Body Polish</h4>
    <p>"Turn heads with Wheelbro's brilliant body polish service!"</p>
    </div>
    
    </div>

</div><br /><br />

<div className="form-img">
<img src="https://wallpapers.com/images/hd/black-car-4k-wnfjwxcbybpwbs08.jpg" 
alt="/"  height="600px" width="1550px" />
<div className='form-img-t1'>
<ul type="none" >
    <li className='lis1'> <a herf="#" className='img-lo'><BiSolidCarMechanic />  </a> Genuine Spares</li><br /><br />
    <li className='lis2'><a herf="#" className='img-lo'><IoOptionsOutline /></a> Wide Range of Options </li><br /><br />
    <li className='lis3'> <a herf="#" className='img-lo'><FaTruckArrowRight /> </a>Exceptional Service Quality</li><br /><br />
    <li className='lis4'><a herf="#" className='img-lo'><FaRegFaceSmileBeam /></a>  Customer Satisfaction</li>
    </ul>
</div>
<div className='form-img-t2'>
<ul type="none" >
    <li className='lis5'><a herf="#" className='img-lo'><GoTools /></a> Express Servicing</li><br /><br />
    <li className='lis6'><a herf="#" className='img-lo'><MdCarCrash /></a> Detailed Diagnostic Report  </li><br /><br />
    <li className='lis7'> <a herf="#" className='img-lo'><BiSolidCarGarage /></a> Top-notch Vehicle Care</li><br /><br />
    <li className='lis8'> <a herf="#" className='img-lo'><AiFillCarryOut /></a> Pick-Up and Drop</li>
    </ul>
</div>
</div>

<div className='trust'><h1>Trust Our Process</h1><br /><br />
<p>WheelBro takes care of all your vehicle service and maintenance needs. From oil changes, filter replacements, and fluid to brake repairs, shocks and struts, muffler repair, tires, and wheel alignment, we’ve got you covered. At WheelBro, the OEM parts we carry are precisely the same as the parts that came with your vehicle and just as reliable as genuine parts, but you get them at a better value.</p>
</div>



<div className="ser-box">
      <div className="bx bx1">
      <div className="photo">
      <img src=" https://automechanica.com/uploads/service/service_image/13/1__7_.jpg"
      height="200px" width="300px" alt="/" />
      </div>
      <div className="b-title">
      <h3>Brake Repairs</h3>
      </div>
      <div className="b-body">
      <p> We all know why brake work is important,
       especially because the majority of car accidents 
       are caused by failure to stop. Get your brake pads replaced,
        which naturally wears down as you use them, 
        and aren't too costly to fix.</p>
      </div>
      </div>
     
      <div className="bx bx2" >
      <div className="photo">
        <img src="https://automechanica.com/uploads/service/service_image/14/2__5_.jpg " 
        height="200px" width="300px"  alt="/" />
      </div>
      <div className="b-title">
      <h3>Suspension Repairs</h3>
      </div>
      <div className="b-body"><p>The suspension system of your vehicle protects you
       from bouncing up and down due to the bad road conditions and bumps in the road. More importantly,
       it affects your steering ability, and that can mean the difference between life and death.</p>
      </div>
      </div>
  
      <div className="bx bx3" >
      <div className="photo">
      <img src="https://automechanica.com/uploads/service/service_image/6/2.jpg "
      height="200px" width="300px"   alt="/" />
      </div>
      <div className="b-title">
      <h3>Detailing</h3>
      </div>
      <div className="b-body">
      <p>We offers professional vehicle services at an affordable price.
      Our interior cleaning, detailing, and restoration services can 
      that new car look and smell.</p>
      </div>
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

    
  )
}

export default Services
