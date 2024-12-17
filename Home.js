import React, { useEffect, useState } from 'react';
import { BsPersonArmsUp } from "react-icons/bs";
import { FaPhoneVolume, FaScrewdriverWrench } from "react-icons/fa6";
import { HiArrowUp } from "react-icons/hi";
import { HiMiniCurrencyRupee } from "react-icons/hi2";
import { IoMdMail } from "react-icons/io";
import { TbEyeSearch } from "react-icons/tb";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
import "./Home.css";




const Home = () => {

  
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
    <div className='entirehome'>
  


<div className='intro'>
<p>Get your car or bike serviced effortlessly with WheelBro! Book online in </p>
<p>seconds and enjoy hassle-free, top-quality service at your convenience. </p>
<p>Drive happy, every time!</p>
<p  className="crtb">"Create Account To Explore WheelBro"<br />

</p>
<br />




</div>

   <div  className='himg'>
    <img src="https://www.onedios.com/blog/wp-content/uploads/2021/02/Car-Service.jpg" height={400} width={800}/><br />
    </div><br /><br /><br />

<div className="centerpart">

<img src="http://autalogic-react.themepresss.com/static/media/img-2.ae307b4e.png"
   className='cont-img' ></img>  

<h1 className='cont-h'>How We Can Help You</h1><br />
<p className='cont-txt'><p>WheelBro is an innovative vehicle service booking system designed
 to revolutionize the way car and bike owners 
 maintain their vehicles. This platform offers a seamless,
  user-friendly interface that allows users to book a wide 
  range of services, from routine maintenance to emergency
   repairs, with just a few clicks. By connecting users 
   with certified mechanics and reputable service centers.</p>
   <p>WheelBro ensures top-notch service quality and reliability. 
   Key features include real-time booking, transparent pricing, 
   service history tracking, and personalized service recommendations. 
   WheelBro aims to provide a hassle-free and efficient solution for vehicle 
   maintenance, enhancing the overall experience for vehicle owners.</p>
   
   <Link to="/about" className='more-btn'>More About Us</Link></p>
   
   
   
    

<p className="h1">Why Choose Us?</p>

      <div className="cards">
      <div className="card-container1" >
      <div className="img-container1">
        <h2><FaScrewdriverWrench className="i" /></h2>
      </div>
      <div className="card-title1">
      <h3>Genuine Parts</h3>
      </div>
      <div className="card-body1">
      <p>Top-notch quality with OEM/OES spares only.</p>
      </div>
      </div>
      

     
      <div className="card-container2" >
      <div className="img-container2">
        <h1><TbEyeSearch className="i" /></h1>
      </div>
      <div className="card-title2">
      <h3>Transparent</h3>
      </div>
      <div className="card-body2"><p>24X7 assistance and live status updates.</p>
      </div>
      </div>

      <div className="card-container3" >
      <div className="img-container3">
        <h1><BsPersonArmsUp className="i" /></h1>
      </div>
      <div className="card-title3">
      <h3>Hassel-Free</h3>
      </div>
      <div className="card-body3">
      <p>Services delivered through bespoke solutions.</p>
      </div>
      </div>

      <div className="card-container4" >
      <div className="img-container4">
        <h1><HiMiniCurrencyRupee  className="i" /></h1>
      </div>
      <div className="card-title4">
      <h3>Honest Pricing</h3>
      </div>
      <div className="card-body4">
      <p>Best quote in the industry for your vehicle service.</p>
      </div>
      </div>

      </div><br />

      
    
     <h1 className="picture-heading">How it works?</h1>

<img className='picture' src="https://vehiclecare.in/static/media/track-manage.432210f244cab2bbb348ee1f40766488.svg"
height="800px" width="1500px" alt="/"  />

<h1 className="adv-head">WheelBro Advantages</h1>

<div className="adv-box">

<div className="adv" >
<div className="aimg1">
<img src="https://images.squarespace-cdn.com/content/v1/51297e5de4b01fa6748bc904/1382943188070-X2RMY9MOWZJ140BH9YV2/mechanics+hands+smaller.jpg?format=1000w " 
height="300px" width="300px" alt=" /" className="adv-img" />
</div>
<div className="overlay">
<div className="adv-con">
<h4 className="adv-t">Reduce Cycle Time</h4>
<p>At less time we deliver best service to you</p>
</div>
</div>

</div>

<div className="adv" >
<div className="aimg2">
<img src="https://images.squarespace-cdn.com/content/v1/53473da8e4b0dd40982ce97e/1497266677056-NQE0WDXS09A07GU07YSE/20170612+-+Roll+139+-+006-Nick-Bedford%2C-Photographer-Black+and+White%2C+Film%2C+Gladstone+Road+Garage%2C+Kodak+Tri-X+400%2C+Leica+M7%2C+Mechanic%2C+Portrait%2C+Rodinal%2C+Voigtlander+35mm+f1.7+Ultron+Aspherical.jpg " 
height="300px" width="300px"  alt=" /" className="adv-img" />
</div>
<div className="overlay">
<div className="adv-con">
<h4 className="adv-t">State Of The Art Workshop</h4>
<p>Highly trained service specialists</p>
</div>
</div>

</div>

<div className="adv" >
<div className="aimg3">
  <img src="https://i.pinimg.com/originals/2b/89/d1/2b89d1ad61e3777b8014afb26eaa8dfe.jpg "
  height="300px" width="300px"   alt=" /" className="adv-img" />
</div>
<div className="overlay">
<div className="adv-con">
<h4 className="adv-t">Genuine OEM Products</h4>
<p>Reliable & Genuine Parts At Valuable Prices</p>
</div>
</div>
</div>

<div className="adv" >
    <div className="aimg4">
    <img src="https://i0.wp.com/bestsellingcarsblog.com/wp-content/uploads/2022/02/Picture-1-2.jpg?resize=600%2C387 "
    height="300px" width="300px"   alt=" /" className="adv-img" />
    </div>
    <div className="overlay">
<div className="adv-con">
<h4 className="adv-t">Fair & Transparent Pricing</h4>
<p>providing low cost service and repair to our customers</p>
</div>
</div>
    
    </div>


</div>


<h1 className="cnct-heading">Contact Us </h1><br />
</div>


<div className="cnct-box">
      <div className="cnct-1" >
      <div className="ic-1">
        <p><FaPhoneVolume className="ic-1"/></p>
      </div>
      <div className="cnct-title1">
      <h1>Make A Call</h1>
      </div>
      <div className="cnct-body1">
      <p> Open for 24X7 Mon-Sat, <br /><h2>9932-020-542</h2></p>
      </div>
      </div>
      

     
      <div className="cnct-2" >
      <div className="ic-2">
        <p><IoMdMail className="ic-2" /></p>
      </div>
      <div className="cnct-title2">
      <h1>Email</h1>
      </div>
      <div className="cnct-body2"><p> Open for 24X7 Mon-Sat,<br /><h2>service@wheelbro.com</h2></p>
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

export default Home
