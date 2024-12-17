import React, { useEffect, useState } from 'react';
import { HiArrowUp } from "react-icons/hi";
import "./About.css";
const About = () => {


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


  const images = [
    { src: 'http://autalogic-react.themepresss.com/static/media/4.46d3c83d.jpg', text: 'Diagnostic' },
    { src: 'http://autalogic-react.themepresss.com/static/media/6.49b0d003.jpg', text: 'Breaks' },
    { src: 'http://autalogic-react.themepresss.com/static/media/2.88104762.jpg', text: 'Engine Repair' },
    { src: 'http://autalogic-react.themepresss.com/static/media/3.5e36b3fb.jpg', text: 'Transmission' },
    { src: 'http://autalogic-react.themepresss.com/static/media/1.c116faa3.jpg', text: 'Tiers Replacement' },
    { src: 'https://carfixo.in/wp-content/uploads/2022/05/car-wash-2.jpg', text: 'Water Wash' },
    { src: 'http://autalogic-react.themepresss.com/static/media/5.08562380.jpg', text: 'Batteries Replacement' },
    { src: 'https://automechanica.com/uploads/service/service_image/2/shutterstock_772014295.jpg', text: 'Denting & Painting' },
    { src: 'https://www.chipsaway.co.uk/wp-content/uploads/2014/04/iStock-481395168-Interior-clean.jpg', text: 'Interior Vacuum' },
];


  return (
    <div className="aboutpage">
      <h1 className='head'>About Us</h1><br /><br />
      <img src="https://www.tyremarket.com/Images/servicefit.gif" alt="/"
      className="abpic"></img>
      <p className="text">

         Our mission is to enable premium quality care for your luxury vehicle service at affordable pricing .
          We ensure real time updates for complete vehicle care needs with a fair and transparent pricing mechanism. 
          Skilled technicians, working at our state of the art German technology workshop further ensure that only genuine OEM 
          parts are used for your vehicle care needs.<br /><br />

         Customer satisfaction is the core of all initiatives at WheelBro.
          Online appointment scheduling  is our constant endeavor to maximize customer convenience.
           Our commitment stands for reliability and unequalled professionalism<br /> to provide dealer quality auto-service at a fair price.
         </p><br /><br />
     <h1 className="dabba-heading">We provide expert vehicle services</h1>
           
    <div className="dabba">

    <div className="dabba1" >
    <div className="img-1">
      <img src="https://vehiclecare.in/static/media/boost-custumer.6b60e57035afc3124b0561745ad7f5b4.svg"
      height="200px" width="200px" alt="/" />
    
    <div className="dabba-title1">
    <h3>Boost Customer Satisfication</h3>
    
    <div className="dabba-body1">
    <p>Customers are the most important part of your business.
     We try to offer good services to our customer so that they don't get upset.</p>
    </div>
    </div>
    </div>
    </div>
    
    
   
    <div className="dabba2" >
    <div className="img-2">
      <img src="https://vehiclecare.in/static/media/reduce-cyle-time.db6df6683516e5f1cbfe2da938837258.svg "
      height="200px" width="200px"  alt="/" />
    
    <div className="dabba-title2">
    <h3>Reduce Cycle Time</h3>
    
    <div className="dabba-body2"><p>Smooth workflows and minimize manual activities.
    At less time we deliver best service to you.</p>
    </div>
    </div>
    </div>
    </div>

    <div className="dabba3" >
    <div className="img-3">
      <img src="https://vehiclecare.in/static/media/lower-repair-cost.40ef8d78476694b4f7d1476431bfcbeb.svg" 
      height="200px" width="200px"  alt="/" />
    
    <div className="dabba-title3">
    <h3>Lower Repair Cost</h3>
    
    <div className="dabba-body3">
    <p>We always try to provide low cost service and repair to our cutomers.</p>
    </div>
    </div>
    </div>
    </div>

    <div className="dabba4" >
    <div className="img-4">
      <img src="https://vehiclecare.in/static/media/experience-full.ca8a5e78bba04edc2c5dd6a691cd1fc0.svg" 
      height="180px" width="180px"  alt="/"   />
    
    <div className="dabba-title4">
    <h3>Experience Full Control</h3>
    
    <div className="dabba-body4">
    <p>Our most popular service is our Virtual Receptionist. 
    We know that sometimes it's difficult to get.</p>
    </div>
    </div>
    </div>
    </div>


    </div><br /><br />
    <div className="scroll-to-top">
  {isVisible &&
    <div onClick={scrollToTop} className="scroll-button">
      <p><HiArrowUp /></p>
    </div>
  }
</div>

<div>
           <h4 className='galh'>Our Gallery</h4>
        <div className="gallery-container">
        
        {images.map((image, index) => (
                <div className="galleryimage-container" key={index}>
                    <img src={image.src} alt={`Gallery ${index + 1}`} />
                    <div className="galleryoverlay">
                        <div className="gallerytext">{image.text}</div>
                    </div>
                </div>
            ))}

        </div>
        </div>

    </div>
  )
}

export default About
