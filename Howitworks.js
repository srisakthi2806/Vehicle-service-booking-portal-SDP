import React, { useEffect, useState } from 'react';
import { HiArrowUp } from "react-icons/hi";
import { Link } from 'react-router-dom';
import "./Howitworks.css";

const Howitworks = () => {

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
    <div className="howitworks">
    <img src="https://wallpapercave.com/wp/wp3745837.jpg"  alt="/"
    className="pic1"></img>

    
    <div className='himg-t'>
    <h1 className='himg-h'>How It Works</h1>
    <Link className="hl1" to="/">Home / </Link>
    <Link className="hl2" to="/howitworks">How It Works</Link>
    </div>
    
      
    <div className="hbox">
    <div className="box-container1" >
    <div className="logo-container1">
      <p>01</p>
    </div>
    <div className="box-title1">
    <h3>Choose</h3>
    </div>
    <div className="box-body1">
    <p>Choose Your Service </p>
    </div>
    </div>
    

   
    <div className="box-container2" >
    <div className="logo-container2">
      <p>02</p>
    </div>
    <div className="box-title2">
    <h3>Book</h3>
    </div>
    <div className="box-body2"><p>Make An Appointment With Us.</p>
    </div>
    </div>

    <div className="box-container3" >
    <div className="logo-container3">
      <p>03</p>
    </div>
    <div className="box-title3">
    <h3>Fair Pricing</h3>
    </div>
    <div className="box-body3">
    <p>Always Get a Fair Quote.</p>
    </div>
    </div>

    <div className="box-container4" >
    <div className="logo-container4">
      <p>04</p>
    </div>
    <div className="box-title4">
    <h3>Get Your Service</h3>
    </div>
    <div className="box-body4">
    <p>Get Your Luxury Services & Needs.</p>
    </div>
    </div>
    </div>


    <h1 className="t1">Our Features</h1>
      <p className="c1">Improve Safety- Protect your vehicle from expensive repair costs and increase your safety feature's life span with our preventive care services.<br /><br />

      Avoid Breakdowns - Let us keep an eye on your vehicle's performance to make sure it stays running smoothly.<br /><br />
      
      Reduce Expenses - Catch potential breakdowns before they happen so you can save money in the long run.</p><br /><br />
    
      <div className="hbox2">
      <div className="hcont1" >
      <div className="himg1">
        <img src= "https://www.indusmotor.com/public/uploads/pages/179020210129170225.jpg"  alt="/"
        width={400} height={300}></img>
      
      <div className="himgoverlay1">
      <h3>State Of The Art Workshop</h3>
      <p>Highly trained service specialists</p>
      </div>
      </div>
      </div>
      
  
     
      <div className="hcont2" >
      <div className="himg2">
        <img src= "https://cdn.wearemarmalade.co.uk/wam/2020-12/car-service.jpg" alt="/"
        width={400} height={300}></img>
      </div>
      <div className="himgoverlay2">
      <h3>Fair & Transparent Pricing</h3>
      <p>Transparent on-call quotes</p>
      </div>
      
      </div>
  
     
  
      <div className="hcont3" >
      <div className="himg3">
        <img src= "https://smartcdn.gprod.postmedia.digital/driving/wp-content/uploads/2021/10/GettyImages-873585552-scaled-e1634850111104.jpg?quality=90&strip=all&w=375&h=211&sig=ADKHZplE2bgt0TU8iGqteg" alt="/"
        width={400} height={300}></img>
      </div>
      <div className="himgoverlay3">
      <h3>Genuine OEM Products</h3>
      <p>Reliable & Genuine Parts At Valuable Prices</p>
      </div>
      
      </div>

      <div className="hcont4" >
      <div className="himg4">
        <img src= "https://digitaldealer.com/wp-content/uploads/2019/05/AdobeStock_69591919-copy.jpg"  alt="/"
        width={400} height={300}></img>
      </div>
      <div className="himgoverlay4">
      <h3>Door Step Express Service</h3>
      <p>Fixed location pick up and drop</p>
      </div>
      
      </div>
      </div>


<h1 className="boxes-heading">Secure Your Peace Of Mind With Our Hassle-Free Process</h1>

      <div className="boxes">
      <div className="b1" >
      <div className="i1">
      <img src=" https://vehiclecare.in/static/media/one.8aeb80907d58cb15bddaf981fd1d3e10.svg" alt="/" />
      </div>
      <div className="bx-title1">
      <h2>Simple Damage Reporting</h2>
      </div>
      <div className="bx-body1">
      <p>We understand that filing an insurance claim can be stressful, which is why we offer an easy damage intake process.</p>
      </div>
      </div>
     
      <div className="b2" >
      <div className="i2">
        <img src="https://vehiclecare.in/static/media/two.3bbc778d0562c07693a3880488124b1b.svg " alt="/" />
      </div>
      <div className="bx-title2">
      <h2>Streamlined Assesment</h2>
      </div>
      <div className="bx-body2"><p>Our digital assessment system ensures that all relevant data is collected and incorporated into the damage report. </p>
      </div>
      </div>
  
      <div className="b3" >
      <div className="i3">
      <img src="https://vehiclecare.in/static/media/three.93c0f562663f81618491fc3ec40b2ea0.svg " alt="/" />
      </div>
      <div className="bx-title3">
      <h2>Precise Repair Allocation</h2>
      </div>
      <div className="bx-body3">
      <p>With our optimized repair allocation process, repairs are steered intelligently or tendered in a vast, dynamic, and personalized repairer network.</p>
      </div>
      </div>
  </div>



  
  <div className="boxes">
      <div className="b1" >
      <div className="i1">
      <img src=" https://vehiclecare.in/static/media/four.07e86fee984e797066ef5a22fc031e0f.svg" alt="/" />
      </div>
      <div className="bx-title1">
      <h3>Efficient Authorization</h3>
      </div>
      <div className="bx-body1">
      <p>Our claim handlers review offers and authorize repairs quickly and accurately, minimizing delays
       and ensuring that repairs are completed as soon as possible.</p>
      </div>
      </div>
      
  
     
      <div className="b2" >
      <div className="i2">
        <img src="https://vehiclecare.in/static/media/five.55c44b049ca25a6cf1d5c9c38c855cd3.svg " alt="/" />
      </div>
      <div className="bx-title2">
      <h3>Convenient Planning</h3>
      </div>
      <div className="bx-body2"><p>We understand that our customers have busy schedules, which is why we offer a convenient planning process. 
      Customers can easily plan their repair
       appointments on dates.</p>
      </div>
      </div>
  
      <div className="b3" >
      <div className="i3">
      <img src="https://vehiclecare.in/static/media/six.ae7aa78f22b7c4e6bde9c73f5224b4fe.svg" alt="/" />
      </div>
      <div className="bx-title3">
      <h3>Insightful Repairs</h3>
      </div>
      <div className="bx-body3">
      <p>Throughout the process, customers receive updates and can provide feedback,
       which provides us with valuable network and NPS insight. </p>
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

export default Howitworks
