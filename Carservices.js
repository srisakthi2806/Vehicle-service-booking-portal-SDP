/*import React, { useState } from 'react';
import { PiCheckCircleDuotone } from "react-icons/pi";
import { FiClock } from "react-icons/fi";
import { GiCheckMark } from "react-icons/gi";
import { BiRupee } from "react-icons/bi";
import './Carservices.css';

const services = [
    {
        id: 1,
        title: 'Basic Service',
        imageUrl: 'https://media.licdn.com/dms/image/D4D12AQGWyz69NcdJ7g/article-cover_image-shrink_720_1280/0/1706725877364?e=2147483647&v=beta&t=cwGKhh5GaGaeXqD62thfyRfEjybCt4hh4OmA8UxE-Uo',
        types: ['Car Wash', 'Engine Oil Replacement', 'Battery Water Top Up','Interior Vacuuming'],
        hrs: 'Takes 6 Hours',
        price: 3619
    },
    {
        id: 2,
        title: 'Battery Service',
        price: 7000,
        imageUrl: 'https://car-o-man.com/wp-content/uploads/2018/04/battery-service-car-o-man-hyderabad.jpg',
        types: ['Free Installation', 'Battery Replacement', 'Fitting of Alternator','44 Months Warranty'],
        hrs: 'Takes 2 Hours',
    },
    {
        id: 3,
        title: 'Tyre & Wheel Care',
        price: 6800,
        imageUrl: 'https://media.istockphoto.com/id/498888104/photo/replacing-car-wheel-and-tyre.webp?b=1&s=170667a&w=0&k=20&c=sHONmerli1bvD054yaQXM5QH62UO0UQIUxhcbqZKaLI=',
        types: ['Tyers Inspection', 'Tyers Replacement', 'Wheel Services','Steering Adjustment'],
        hrs: 'Takes 4 Hours'
    },
    {
        id: 4,
        title: 'Denting & Painting',
        price: 2900,
        imageUrl: 'https://automechanica.com/uploads/service/service_image/2/shutterstock_772014295.jpg',
        types: ['Pannel Rubbing ', 'Protective Layer Paint', 'Grade A Primer','4 Layers of Painting'],
        hrs: 'Takes 3 days',
    },
    {
        id: 5,
        title: 'AC Service & Repair',
        price: 3970,
        imageUrl: 'https://www.shutterstock.com/image-photo/repairman-holding-monitor-tool-check-600nw-2279387293.jpg',
        types: ['AC Vent Cleaning ', 'AC Gas(upto 400gms)', 'AC Filter Cleaning','Cooling Coil Cleaning'],
        hrs: 'Takes 8 Hours',
    },
    {
        id: 6,
        title: 'Detailing Services',
        price: 5099,
        imageUrl: 'https://www.5kcarcare.com/branch-assets/assets/img/blog/people-love-on-auto-detailing-service-01.jpg',
        types: ['Pressure Car Wash', 'Removes Scratches', '3M Wax Polishing','Deep All Round Spa'],
        hrs: 'Takes 2 Days',
    },
    {
        id: 7,
        title: 'Denting & Painting',
        price: 2900,
        imageUrl: 'https://automechanica.com/uploads/service/service_image/2/shutterstock_772014295.jpg',
        types: ['Pannel Rubbing ', 'Protective Layer Paint', 'Grade A Primer','4 Layers of Painting'],
        hrs: 'Takes 3 days',
    },
    {
        id: 8,
        title: 'AC Service & Repair',
        price: 3970,
        imageUrl: 'https://www.shutterstock.com/image-photo/repairman-holding-monitor-tool-check-600nw-2279387293.jpg',
        types: ['AC Vent Cleaning ', 'AC Gas(upto 400gms)', 'AC Filter Cleaning','Cooling Coil Cleaning'],
        hrs: 'Takes 8 Hours',
    },
    {
        id: 9,
        title: 'Detailing Services',
        price: 5099,
        imageUrl: 'https://www.5kcarcare.com/branch-assets/assets/img/blog/people-love-on-auto-detailing-service-01.jpg',
        types: ['Pressure Car Wash', 'Removes Scratches', '3M Wax Polishing','Deep All Round Spa'],
        hrs: 'Takes 2 Days',
    },
    
];

function Carservice() {
    const [cart, setCart] = useState([]);

    const addToCart = (service) => {
        setCart([...cart, service]);
        alert(`${service.title} has been added to your cart!`);
    };

    return (
        <div className="car-service-container">
            {services.map(service => (
                <div key={service.id} className="service-card">
                    <img src={service.imageUrl} alt={service.title} />
                    <h2>{service.title}</h2>
                   
                    <div className="service-details">
                        {service.types.map((type, index) => (
                            <p key={index} ><GiCheckMark  className='bicn'/> {type}</p>
                        ))}
                    </div>
                    <div className='btn-details'>
                    <div className="btn-details1">
                    <h4><FiClock  className='bicn1'/> {service.hrs} </h4>
                    </div>

                    <div className="btn-details2">
                    <h3><BiRupee className='bicn2'/>{service.price} </h3>
                    </div>
                    </div>

                    <div className="service-actions">
                        <button onClick={() => addToCart(service)} className="btn-service">+ Add Service</button>
                    </div>
                    
                </div>
            ))}
        </div>
    );
}

export default Carservice;*/

/*import React, { useState } from 'react';
import Slider from 'react-slick';
import { PiCheckCircleDuotone } from "react-icons/pi";
import { FiClock } from "react-icons/fi";
import { GiCheckMark } from "react-icons/gi";
import { BiRupee } from "react-icons/bi";
import './Carservices.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
    {
        id: 1,
        title: 'Basic Service',
        imageUrl: 'https://media.licdn.com/dms/image/D4D12AQGWyz69NcdJ7g/article-cover_image-shrink_720_1280/0/1706725877364?e=2147483647&v=beta&t=cwGKhh5GaGaeXqD62thfyRfEjybCt4hh4OmA8UxE-Uo',
        types: ['Car Wash', 'Engine Oil Replacement', 'Battery Water Top Up','Interior Vacuuming'],
        hrs: 'Takes 6 Hours',
        price: 3619
    },
    {
        id: 2,
        title: 'Battery Service',
        price: 7000,
        imageUrl: 'https://car-o-man.com/wp-content/uploads/2018/04/battery-service-car-o-man-hyderabad.jpg',
        types: ['Free Installation', 'Battery Replacement', 'Fitting of Alternator','44 Months Warranty'],
        hrs: 'Takes 2 Hours',
    },
    {
        id: 3,
        title: 'Tyre & Wheel Care',
        price: 6800,
        imageUrl: 'https://media.istockphoto.com/id/498888104/photo/replacing-car-wheel-and-tyre.webp?b=1&s=170667a&w=0&k=20&c=sHONmerli1bvD054yaQXM5QH62UO0UQIUxhcbqZKaLI=',
        types: ['Tyers Inspection', 'Tyers Replacement', 'Wheel Services','Steering Adjustment'],
        hrs: 'Takes 4 Hours'
    },
    {
        id: 4,
        title: 'Denting & Painting',
        price: 2900,
        imageUrl: 'https://automechanica.com/uploads/service/service_image/2/shutterstock_772014295.jpg',
        types: ['Pannel Rubbing ', 'Protective Layer Paint', 'Grade A Primer','4 Layers of Painting'],
        hrs: 'Takes 3 days',
    },
    {
        id: 5,
        title: 'AC Service & Repair',
        price: 3970,
        imageUrl: 'https://www.shutterstock.com/image-photo/repairman-holding-monitor-tool-check-600nw-2279387293.jpg',
        types: ['AC Vent Cleaning ', 'AC Gas(upto 400gms)', 'AC Filter Cleaning','Cooling Coil Cleaning'],
        hrs: 'Takes 8 Hours',
    },
    {
        id: 6,
        title: 'Detailing Services',
        price: 5099,
        imageUrl: 'https://www.5kcarcare.com/branch-assets/assets/img/blog/people-love-on-auto-detailing-service-01.jpg',
        types: ['Pressure Car Wash', 'Removes Scratches', '3M Wax Polishing','Deep All Round Spa'],
        hrs: 'Takes 2 Days',
    },
    {
        id: 7,
        title: 'Denting & Painting',
        price: 2900,
        imageUrl: 'https://automechanica.com/uploads/service/service_image/2/shutterstock_772014295.jpg',
        types: ['Pannel Rubbing ', 'Protective Layer Paint', 'Grade A Primer','4 Layers of Painting'],
        hrs: 'Takes 3 days',
    },
    {
        id: 8,
        title: 'AC Service & Repair',
        price: 3970,
        imageUrl: 'https://www.shutterstock.com/image-photo/repairman-holding-monitor-tool-check-600nw-2279387293.jpg',
        types: ['AC Vent Cleaning ', 'AC Gas(upto 400gms)', 'AC Filter Cleaning','Cooling Coil Cleaning'],
        hrs: 'Takes 8 Hours',
    },
    {
        id: 9,
        title: 'Detailing Services',
        price: 5099,
        imageUrl: 'https://www.5kcarcare.com/branch-assets/assets/img/blog/people-love-on-auto-detailing-service-01.jpg',
        types: ['Pressure Car Wash', 'Removes Scratches', '3M Wax Polishing','Deep All Round Spa'],
        hrs: 'Takes 2 Days',
    }
    
];

function Carservice() {
    const [cart, setCart] = useState([]);

    const addToCart = (service) => {
        setCart([...cart, service]);
        alert(`${service.title} has been added to your cart!`);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 slides at a time
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="car-service-container">
            <Slider {...settings}>
                {services.map(service => (
                    <div key={service.id} className="service-card">
                        <img src={service.imageUrl} alt={service.title} />
                        <h2>{service.title}</h2>
                        <div className="service-details">
                            {service.types.map((type, index) => (
                                <p key={index}><GiCheckMark className='bicn'/> {type}</p>
                            ))}
                        </div>
                        <div className='btn-details'>
                            <div className="btn-details1">
                                <h4><FiClock className='bicn1'/> {service.hrs} </h4>
                            </div>
                            <div className="btn-details2">
                                <h3><BiRupee className='bicn2'/>{service.price} </h3>
                            </div>
                        </div>
                        <div className="service-actions">
                            <button onClick={() => addToCart(service)} className="btn-service">+ Add Service</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Carservice;*/


/////////////************************* */

/*import React, { useState, useContext } from 'react';
import { BiRupee } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import { GiCheckMark } from "react-icons/gi";
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './Carservices.css';
import { CartContext } from './CartContext';

const services = [
    {
        id: 1,
        title: 'Basic Service',
        imageUrl: 'https://media.licdn.com/dms/image/D4D12AQGWyz69NcdJ7g/article-cover_image-shrink_720_1280/0/1706725877364?e=2147483647&v=beta&t=cwGKhh5GaGaeXqD62thfyRfEjybCt4hh4OmA8UxE-Uo',
        types: ['Car Wash', 'Engine Oil Replacement', 'Battery Water Top Up','Interior Vacuuming'],
        hrs: 'Takes 6 Hours',
        price: 3619
    },
    {
        id: 2,
        title: 'Battery Service',
        price: 7000,
        imageUrl: 'https://car-o-man.com/wp-content/uploads/2018/04/battery-service-car-o-man-hyderabad.jpg',
        types: ['Free Installation', 'Battery Replacement', 'Fitting of Alternator','44 Months Warranty'],
        hrs: 'Takes 2 Hours',
    },
    {
        id: 3,
        title: 'Tyre & Wheel Care',
        price: 6800,
        imageUrl: 'https://media.istockphoto.com/id/498888104/photo/replacing-car-wheel-and-tyre.webp?b=1&s=170667a&w=0&k=20&c=sHONmerli1bvD054yaQXM5QH62UO0UQIUxhcbqZKaLI=',
        types: ['Tyers Inspection', 'Tyers Replacement', 'Wheel Services','Steering Adjustment'],
        hrs: 'Takes 4 Hours'
    },
    {
        id: 4,
        title: 'Denting & Painting',
        price: 2900,
        imageUrl: 'https://automechanica.com/uploads/service/service_image/2/shutterstock_772014295.jpg',
        types: ['Pannel Rubbing ', 'Protective Layer Paint', 'Grade A Primer','4 Layers of Painting'],
        hrs: 'Takes 3 days',
    },
    {
        id: 5,
        title: 'AC Service & Repair',
        price: 3970,
        imageUrl: 'https://www.shutterstock.com/image-photo/repairman-holding-monitor-tool-check-600nw-2279387293.jpg',
        types: ['AC Vent Cleaning ', 'AC Gas(upto 400gms)', 'AC Filter Cleaning','Cooling Coil Cleaning'],
        hrs: 'Takes 8 Hours',
    },
    {
        id: 6,
        title: 'Detailing Services',
        price: 5099,
        imageUrl: 'https://www.5kcarcare.com/branch-assets/assets/img/blog/people-love-on-auto-detailing-service-01.jpg',
        types: ['Pressure Car Wash', 'Removes Scratches', '3M Wax Polishing','Deep All Round Spa'],
        hrs: 'Takes 2 Days',
    },
    {
        id: 7,
        title: 'Denting & Painting',
        price: 2900,
        imageUrl: 'https://automechanica.com/uploads/service/service_image/2/shutterstock_772014295.jpg',
        types: ['Pannel Rubbing ', 'Protective Layer Paint', 'Grade A Primer','4 Layers of Painting'],
        hrs: 'Takes 3 days',
    },
    {
        id: 8,
        title: 'AC Service & Repair',
        price: 3970,
        imageUrl: 'https://www.shutterstock.com/image-photo/repairman-holding-monitor-tool-check-600nw-2279387293.jpg',
        types: ['AC Vent Cleaning ', 'AC Gas(upto 400gms)', 'AC Filter Cleaning','Cooling Coil Cleaning'],
        hrs: 'Takes 8 Hours',
    },
    {
        id: 9,
        title: 'Detailing Services',
        price: 5099,
        imageUrl: 'https://www.5kcarcare.com/branch-assets/assets/img/blog/people-love-on-auto-detailing-service-01.jpg',
        types: ['Pressure Car Wash', 'Removes Scratches', '3M Wax Polishing','Deep All Round Spa'],
        hrs: 'Takes 2 Days',
    }
];

function Carservices() {

    const { addToCart,cart } = useContext(CartContext);

    

   

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            }
        ]
    };

    return (
        <div>
        <div><img src="https://static.vecteezy.com/system/resources/previews/032/613/036/non_2x/super-sports-car-on-a-black-background-ai-generated-free-photo.jpg" 
        alt="/" className='carimg'></img>
        <div className='carimg-c'>
    <div className='carimg-t'>
    <h1 className='carimg-h'>Book Car Services</h1>
    <Link className="carlin carl1" to="/">Home / </Link>
    <Link className="carlin carl2" to="/carservices">Car Services</Link>
    </div>
    </div>
        </div>
    <h2 className='carhead'>Car Services</h2>
    <p className='carpara'>At Wheelbro, we take the hassle out of car maintenance with our top-notch services designed to keep your vehicle running smoothly. Whether you need a quick oil change, a thorough detailing, or specialized repairs,
     our expert team is here to deliver. We blend convenience with quality, ensuring that your car receives
      the best care while you enjoy peace of mind. Drive with confidence knowing
       Wheelbro has you covered every mile of the way.</p><br /><br />

    
        <div className="car-service-container">
            <Slider {...settings}>
                {services.map(service => (
                    <div key={service.id} className="service-card">
                        <img src={service.imageUrl} alt={service.title} className="service-image"/>
                        <h3>{service.title}</h3>
                        <div className="service-details">
                            {service.types.map((type, index) => (
                                <p key={index}><GiCheckMark className='bicn'/> {type}</p>
                            ))}
                        </div>
                        <div className='btn-details'>
                            <div className="btn-details1">
                                <p><FiClock className='bicn1'/> {service.hrs} </p>
                            </div>
                            <div className="btn-details2">
                                <h4><BiRupee className='bicn2'/>{service.price} </h4>
                            </div>
                        </div>
                        <div className="service-actions">
                            <button onClick={() => addToCart(service)} className="btn-service">+ Add Service</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div><br /><br />


    <div className='teams'>
        <p className='teamp'>Meet Our Experts</p>
        <h2 className='teamh'>Our WheelBros</h2>

        <div className="teammem">
        <div className="team mem1">
        <div className="teamphoto">
        <img src=" http://autalogic-react.themepresss.com/static/media/img-1.128da157.jpg"
        height="400px" width="300px" alt="/" />
        </div>
        
        
        </div>
       
        <div className="team mem2" >
        <div className="teamphoto">
          <img src="http://autalogic-react.themepresss.com/static/media/img-2.cd2b418e.jpg" 
          height="400px" width="300px"  alt="/" />
        </div>
        
        </div>
    
        <div className="team mem3" >
        <div className="teamphoto">
        <img src="http://autalogic-react.themepresss.com/static/media/img-4.151e4e6a.jpg "
        height="400px" width="300px"   alt="/" />
        </div>
        
        </div>
        </div>
        </div>
        

        </div>
    );
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", right: "-25px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: "-25px" }}
            onClick={onClick}
        />
    );
}

export default Carservices;*/


import React, { useState, useContext } from 'react';
import { BiRupee } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import { GiCheckMark } from "react-icons/gi";
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './Carservices.css';
import { CartContext } from './CartContext';

const services = [
    {
        id: 1,
        title: 'Basic Service',
        imageUrl: 'https://media.licdn.com/dms/image/D4D12AQGWyz69NcdJ7g/article-cover_image-shrink_720_1280/0/1706725877364?e=2147483647&v=beta&t=cwGKhh5GaGaeXqD62thfyRfEjybCt4hh4OmA8UxE-Uo',
        types: ['Car Wash', 'Engine Oil Replacement', 'Battery Water Top Up','Interior Vacuuming'],
        hrs: 'Takes 6 Hours',
        price: 3619
    },
    {
        id: 2,
        title: 'Battery Service',
        price: 7000,
        imageUrl: 'https://car-o-man.com/wp-content/uploads/2018/04/battery-service-car-o-man-hyderabad.jpg',
        types: ['Free Installation', 'Battery Replacement', 'Fitting of Alternator','44 Months Warranty'],
        hrs: 'Takes 2 Hours',
    },
    {
        id: 3,
        title: 'Tyre & Wheel Care',
        price: 6800,
        imageUrl: 'https://media.istockphoto.com/id/498888104/photo/replacing-car-wheel-and-tyre.webp?b=1&s=170667a&w=0&k=20&c=sHONmerli1bvD054yaQXM5QH62UO0UQIUxhcbqZKaLI=',
        types: ['Tyers Inspection', 'Tyers Replacement', 'Wheel Services','Steering Adjustment'],
        hrs: 'Takes 4 Hours'
    },
    {
        id: 4,
        title: 'Denting & Painting',
        price: 2900,
        imageUrl: 'https://automechanica.com/uploads/service/service_image/2/shutterstock_772014295.jpg',
        types: ['Pannel Rubbing ', 'Protective Layer Paint', 'Grade A Primer','4 Layers of Painting'],
        hrs: 'Takes 3 days',
    },
    {
        id: 5,
        title: 'AC Service & Repair',
        price: 3970,
        imageUrl: 'https://www.shutterstock.com/image-photo/repairman-holding-monitor-tool-check-600nw-2279387293.jpg',
        types: ['AC Vent Cleaning ', 'AC Gas(upto 400gms)', 'AC Filter Cleaning','Cooling Coil Cleaning'],
        hrs: 'Takes 8 Hours',
    },
    {
        id: 6,
        title: 'Detailing Services',
        price: 5099,
        imageUrl: 'https://www.5kcarcare.com/branch-assets/assets/img/blog/people-love-on-auto-detailing-service-01.jpg',
        types: ['Pressure Car Wash', 'Removes Scratches', '3M Wax Polishing','Deep All Round Spa'],
        hrs: 'Takes 2 Days',
    },
    {
        id: 7,
        title: 'Denting & Painting',
        price: 2900,
        imageUrl: 'https://automechanica.com/uploads/service/service_image/2/shutterstock_772014295.jpg',
        types: ['Pannel Rubbing ', 'Protective Layer Paint', 'Grade A Primer','4 Layers of Painting'],
        hrs: 'Takes 3 days',
    },
    {
        id: 8,
        title: 'Windshields & Lights',
        price: 5810,
        imageUrl: 'https://static.wixstatic.com/media/ba2cd3_23bd4afae2e049ffa9f7176472ef2ac1~mv2.jpg/v1/fill/w_640,h_412,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ba2cd3_23bd4afae2e049ffa9f7176472ef2ac1~mv2.jpg',
        types: ['Windshield ', 'Door Glass', 'Headlight OES','Tail Light OES'],
        hrs: 'Takes 4 Hours',
    },
    {
        id: 9,
        title: 'Clutch Services',
        price: 5099,
        imageUrl: 'https://img.freepik.com/premium-photo/mechanic-repairs-motorcycle-engine-workshop-closeup_151013-29313.jpg',
        types: ['Clutch Set OES', 'Clutch Oil', 'Flywheel Replacement','Gear Oil'],
        hrs: 'Takes 2 Days',
    }
];

function Carservices() {

    const { addToCart } = useContext(CartContext);
    const [popupVisible, setPopupVisible] = useState(false);



    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            }
        ]
    };
    const handleAddToCart = (service) => {
        addToCart(service);
        setPopupVisible(true);

        // Hide the popup after 3 seconds
        setTimeout(() => {
            setPopupVisible(false);
        }, 1000);
    };


    return (
        <div>
        <div><img src="https://static.vecteezy.com/system/resources/previews/032/613/036/non_2x/super-sports-car-on-a-black-background-ai-generated-free-photo.jpg" 
        alt="/" className='carimg'></img>
        <div className='carimg-c'>
    <div className='carimg-t'>
    <h1 className='carimg-h'>Book Car Services</h1>
    <Link className="carlin carl1" to="/">Home / </Link>
    <Link className="carlin carl2" to="/carservices">Car Services</Link>
    </div>
    </div>
        </div>
    <h2 className='carhead'>Car Services</h2>
    <p className='carpara'>At Wheelbro, we take the hassle out of car maintenance with our top-notch services designed to keep your vehicle running smoothly. Whether you need a quick oil change, a thorough detailing, or specialized repairs,
     our expert team is here to deliver. We blend convenience with quality, ensuring that your car receives
      the best care while you enjoy peace of mind. Drive with confidence knowing
       Wheelbro has you covered every mile of the way.</p><br /><br />


        {/* Popup Message */}
        {popupVisible && (
            <div className="ppmsg">
                Service added!
            </div>
        )}
    
        <div className="car-service-container">
            <Slider {...settings}>
                {services.map(service => (
                    <div key={service.id} className="service-card">
                        <img src={service.imageUrl} alt={service.title} className="service-image"/>
                        <h3>{service.title}</h3>
                        <div className="service-details">
                            {service.types.map((type, index) => (
                                <p key={index}><GiCheckMark className='bicn'/> {type}</p>
                            ))}
                        </div>
                        <div className='btn-details'>
                            <div className="btn-details1">
                                <p><FiClock className='bicn1'/> {service.hrs} </p>
                            </div>
                            <div className="btn-details2">
                                <h4><BiRupee className='bicn2'/>{service.price} </h4>
                            </div>
                        </div>
                        <div className="service-actions">
                            <button onClick={() => handleAddToCart(service)} className="btn-service">+ Add Service</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div><br /><br />


    <div className='teams'>
        <p className='teamp'>Meet Our Experts</p>
        <h2 className='teamh'>Our WheelBros</h2>

        <div className="teammem">
        <div className="team mem1">
        <div className="teamphoto">
        <img src=" http://autalogic-react.themepresss.com/static/media/img-1.128da157.jpg"
        height="400px" width="300px" alt="/" />
        </div>
        
        
        </div>
       
        <div className="team mem2" >
        <div className="teamphoto">
          <img src="http://autalogic-react.themepresss.com/static/media/img-2.cd2b418e.jpg" 
          height="400px" width="300px"  alt="/" />
        </div>
        
        </div>
    
        <div className="team mem3" >
        <div className="teamphoto">
        <img src="http://autalogic-react.themepresss.com/static/media/img-4.151e4e6a.jpg "
        height="400px" width="300px"   alt="/" />
        </div>
        
        </div>
        </div>
        </div>
        

        </div>
    );
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", right: "-25px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: "-25px" }}
            onClick={onClick}
        />
    );
}

export default Carservices;











