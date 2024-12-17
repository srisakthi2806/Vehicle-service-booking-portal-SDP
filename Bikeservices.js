
import React, { useContext, useState } from 'react';
import { BiRupee } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import { GiCheckMark } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './Bikeservices.css';
import { CartContext } from './CartContext';

const services = [
    {
        id: 1,
        title: 'Basic Service',
        imageUrl: 'https://content.jdmagicbox.com/comp/bangalore/l9/080pxx80.xx80.150727121813.z4l9/catalogue/bike-zone-devarjeevanahalli-bangalore-24-hours-motorcycle-repair-and-services-4eslcgs-250.jpg',
        types: ['Brake Inspection', 'Air Filter Cleaning', 'Tire Pressure Check','Chain Lubrication'],
        hrs: 'Takes 3 Hours',
        price: 1790
    },
    {
        id: 2,
        title: 'Battery Service',
        price: 4000,
        imageUrl: 'https://media.licdn.com/dms/image/D4D12AQGi5Wm4JsOcSA/article-cover_image-shrink_720_1280/0/1685441138372?e=2147483647&v=beta&t=QeSM1X2zamzabYW6YHSxO3GsU6Qc76InIHOhtEZVo7k',
        types: ['Free Installation', 'Battery Replacement', 'Fitting of Alternator','44 Months Warranty'],
        hrs: 'Takes 2 Hours',
    },
    {
        id: 3,
        title: 'Wheel Care',
        price: 5500,
        imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2022/12/JA/LH/HC/13453934/bike-wheel-repair-service.jpeg',
        types: ['Tyers Inspection', 'Tyers Replacement', 'Wheel Services','Steering Adjustment'],
        hrs: 'Takes 3 Hours'
    },
    {
        id: 4,
        title: 'Denting & Painting',
        price: 2300,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQATivtYsx3PZE95zByqEDan4SO3yZcfWK0N6STwTZ-2zTC9ZfSfNTBfGe8BVB8ropVu0c&usqp=CAU',
        types: ['Pannel Rubbing ', 'Protective Layer Paint', 'Grade A Primer','4 Layers of Painting'],
        hrs: 'Takes 3 days',
    },
    {
        id: 5,
        title: 'Engine Services',
        price: 6070,
        imageUrl: 'https://media.istockphoto.com/id/842682040/photo/motorcycle-engines-gears-and-details.jpg?s=612x612&w=0&k=20&c=Cs5LCM6MWE4pO0pkbfjZ9uTth6CZyDH9dWeRGhTReFE=',
        types: ['Engine Replacement ', 'Cylinder Reboring', 'Ring Replacement','Valve Adjustment'],
        hrs: 'Takes 8 Hours',
    },
    {
        id: 6,
        title: 'Detailing Services',
        price: 3999,
        imageUrl: 'https://www.autoflege.com/uploads/Deeplinkimage/097834411.jpg',
        types: ['Full Body Foam Wash', 'Removes Scratches', 'Seat and Leather Care','Polishing of Metal Parts'],
        hrs: 'Takes 1 Day',
    },
    {
        id: 7,
        title: 'cooling System Service',
        price: 2900,
        imageUrl: 'https://as1.ftcdn.net/v2/jpg/05/97/04/60/1000_F_597046044_Wmc3uL10XJuFdbdSuuGhBJdgaYjw0TTX.jpg',
        types: ['Radiator Flush', 'Coolant Replacement', 'Thermostat Inspection','Coolant Inspection'],
        hrs: 'Takes 3 Hours',
    },
    {
        id: 8,
        title: 'Electrical System Service',
        price: 6070,
        imageUrl: 'https://i.pinimg.com/736x/50/8a/87/508a87d60feb0c3bb7ee16698d2f80b5.jpg',
        types: ['Battery Check ', 'Wiring Inspection', 'Horn Repair','Head light Replacement'],
        hrs: 'Takes 6 Hours',
    },
    {
        id: 9,
        title: 'Brake System Service',
        price: 2999,
        imageUrl: 'https://www.shutterstock.com/image-photo/motorcycle-mechanic-check-brake-discs-600nw-1838752612.jpg',
        types: ['Brake Pad Replacement', 'Disc Brake Inspection', 'Brake Fluid Top-up','Drum Brake Adjustment'],
        hrs: 'Takes 4 Hours',
    }
];

function Bikeservices() {

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
        <div><img src="https://wallpapercave.com/wp/wp3647907.jpg" 
        alt="/" className='bikeimg'></img>
        <div className='bikeimg-c'>
    <div className='bikeimg-t'>
    <h1 className='bikeimg-h'>Book Bike Services</h1>
    <Link className="bikelin bikel1" to="/">Home / </Link>
    <Link className="bikelin bikel2" to="/bikeservices">Bike Services</Link>
    </div>
    </div>
        </div>
    <h2 className='bikehead'>Bike Services</h2>
    <p className='bikepara'>At WheelBro, our bike services are designed to 
    keep your two-wheeler in top condition. Whether you need a 
    routine maintenance check, tire replacement, or a complete 
    engine overhaul, our expert technicians are equipped to handle it all.
     We offer quick, reliable, and affordable services to ensure your
      bike performs at its best. With WheelBro, you can ride with confidence, 
      knowing that your bike is in safe hands.</p><br /><br />


        
        {popupVisible && (
            <div className="ppmsg">
                Service added!
            </div>
        )}
    
        <div className="bike-service-container">
            <Slider {...settings}>
                {services.map(service => (
                    <div key={service.id} className="bikeservice-card">
                        <img src={service.imageUrl} alt={service.title} className="bikeservice-image"/>
                        <h3>{service.title}</h3>
                        <div className="bikeservice-details">
                            {service.types.map((type, index) => (
                                <p key={index}><GiCheckMark className='bikeicn'/> {type}</p>
                            ))}
                        </div>
                        <div className='bikebtn-details'>
                            <div className="bikebtn-details1">
                                <p><FiClock className='bikeicn1'/> {service.hrs} </p>
                            </div>
                            <div className="bikebtn-details2">
                                <h4><BiRupee className='bikeicn2'/>{service.price} </h4>
                            </div>
                        </div>
                        <div className="bikeservice-actions">
                            <button onClick={() => handleAddToCart(service)} className="bikebtn-service">+ Add Service</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div><br /><br />


    <div className='biketeams'>
        <p className='biketeamp'>Meet Our Experts</p>
        <h2 className='biketeamh'>Our WheelBros</h2>

        <div className="biketeammem">
        <div className="biketeam mem1">
        <div className="biketeamphoto">
        <img src=" http://autalogic-react.themepresss.com/static/media/img-1.128da157.jpg"
        height="400px" width="300px" alt="/" />
        </div>
        
        
        </div>
       
        <div className="biketeam mem2" >
        <div className="biketeamphoto">
          <img src="http://autalogic-react.themepresss.com/static/media/img-2.cd2b418e.jpg" 
          height="400px" width="300px"  alt="/" />
        </div>
        
        </div>
    
        <div className="biketeam mem3" >
        <div className="biketeamphoto">
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

export default Bikeservices;











