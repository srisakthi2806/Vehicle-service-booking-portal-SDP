import React from 'react'
import { FaScrewdriverWrench } from "react-icons/fa6";
import { TbEyeSearch } from "react-icons/tb";
import { BsPersonArmsUp } from "react-icons/bs";
import { HiMiniCurrencyRupee } from "react-icons/hi2";
import "./Center.css";
const Center = () => {
  return (
    <div className="centerpart">
      <p className="heading">Why Choose Vehicle Care In Quick Fix Garage</p>
      <p className="content">A vehicle is a prized possession, no matter whether it's a hatchback, SUV, or sedan.
       And so, it is important that it is handled by the right set of hands.
        We understand the worries and apprehension one might have while looking for car service & repair.
         There are various centers that charge unreasonable prices for low-quality service while others can't be trusted with authentic
          and genuine spares and products. We aims to solve all such car woes by providing quality car service through
           a branded network of garages that work under a streamlined quality process and follow rigorous measures to
            maintain transparency and affordability for the end vehicle owner.</p>

            <div className="cards">
            <div className="card-container1" >
            <div className="img-container1">
              <h1><FaScrewdriverWrench  /></h1>
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
              <h1><TbEyeSearch /></h1>
            </div>
            <div className="card-title2">
            <h3>Transparent</h3>
            </div>
            <div className="card-body2"><p>24X7 assistance and live status updates.</p>
            </div>
            </div>

            <div className="card-container3" >
            <div className="img-container3">
              <h1><BsPersonArmsUp /></h1>
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
              <h1><HiMiniCurrencyRupee  /></h1>
            </div>
            <div className="card-title4">
            <h3>Honest Pricing</h3>
            </div>
            <div className="card-body4">
            <p>Best quote in the industry for your vehicle service.</p>
            </div>
            </div>


            </div>


    </div>
  )
}

export default Center
