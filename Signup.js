/*import axios from 'axios';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import './Signup.css';

Modal.setAppElement('#root');
export default function Signup() {

  
const[values, setValues]= useState({
  name:'',
  email: '',
  password: ''
});


const [visible,setvisible]=useState(true);


const handleInput =(event) =>{
  const {name,value}=event.target;
  setValues({
    ...values,
    [name]:value,
});
};


const handleSubmit= async (event) =>{
  event.preventDefault();

  console.log(values);
  
  
  try {
      const response = await axios.post("http://localhost:8080/api/users/signup", values);
      console.log(response.data);
      alert('Successfully registered!');
     
  } catch (error) {
      console.error(error);
      alert('Registration failed. Please try again.');
  }

};

  return (
    <div >

    <img src= "https://i.pinimg.com/originals/73/5c/ea/735cea56968f703df45d4c551ee3b160.gif"
     className='image'></img>



    <p className='wrds'><h2 className='wrds-h'>"Effortless Service, Every Time"
     </h2><br></br>Our mission is to enable premium quality care for your 
     luxury vehicle service at affordable pricing . 
     We ensure real time updates for complete vehicle care needs with a fair and 
     transparent pricing mechanism.Have all kinds of repairs - from Wash & Detailing, 
     Quick Service, Mechanical Repairs of Tyre & Battery for your vehicles.</p>

    <div className='d-flex justify-content-center align-items-center  vh-100'>

    <Modal className='box' isOpen={visible} onRequestClose={()=>setvisible(true)}>

    <div className='close-btn' onClick={()=>setvisible(false)}>&times;</div>

      
      <h1 className='signuptitle'>Sign-Up</h1><br />

      
      <form action="" onSubmit={handleSubmit}>

      <div className='mb-3'>
      <label htmlFor="name"><strong>Name</strong></label>
      <input type="text" placeholder ='Enter Name' name='name'
      value={values.name}
      onChange={handleInput} className='iptxt' required></input>
      
      </div>

      <div className='mb-3'>
      <label htmlFor="email"><strong>Email</strong></label>
      <input type="email" placeholder ='Enter Email' name='email'
      value={values.email}
      onChange={handleInput} className='iptxt' required></input>
      </div>

      <div className='mb-3'>
      <label htmlFor="password"><strong>Password</strong></label>
      <input type="password" placeholder ='Enter Password' name='password'
      value={values.password}
      onChange={handleInput} className='iptxt' required></input>
      
      </div>

      <button type='submit' className='btn1' >Signup</button><br /><br/>
      <p className='words'>Already have an account?
      <Link to="/login" className='btn2'>Login</Link></p>
      </form>
      </Modal>
      </div>
    </div>
    
  )
}*/


/*import axios from 'axios';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import './Signup.css';

Modal.setAppElement('#root');

export default function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [visible, setVisible] = useState(true);
  const [message, setMessage] = useState(''); // State to hold message
  const [messageType, setMessageType] = useState(''); // State to hold message type

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/users/signup", values);
      console.log(response.data);
      setMessage('Successfully registered!');
      setMessageType('success');
    } catch (error) {
      console.error(error);
      setMessage('Registration failed. Please try again.');
      setMessageType('error');
    }
  };

  return (
    <div>
      <img
        src="https://i.pinimg.com/originals/73/5c/ea/735cea56968f703df45d4c551ee3b160.gif"
        className='image'
        alt="Service Background"
      />
      <p className='wrds'>
        <h2 className='wrds-h'>"Effortless Service, Every Time"</h2><br />
        Our mission is to enable premium quality care for your luxury vehicle service at affordable pricing. 
        We ensure real-time updates for complete vehicle care needs with a fair and transparent pricing mechanism.
        Have all kinds of repairs - from Wash & Detailing, Quick Service, Mechanical Repairs of Tyre & Battery for your vehicles.
      </p>

      <div className='d-flex justify-content-center align-items-center vh-100'>
        <Modal
          className='box' 
          isOpen={visible} 
          onRequestClose={() => setVisible(false)}
          ariaHideApp={false}
        >
          <div className='close-btn' onClick={() => setVisible(false)}>&times;</div>
          <h1 className='signuptitle'>Sign-Up</h1><br />
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor="name"><strong>Name</strong></label>
              <input 
                type="text" 
                placeholder='Enter Name' 
                name='name'
                value={values.name}
                onChange={handleInput} 
                className='iptxt' 
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor="email"><strong>Email</strong></label>
              <input 
                type="email" 
                placeholder='Enter Email' 
                name='email'
                value={values.email}
                onChange={handleInput} 
                className='iptxt' 
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor="password"><strong>Password</strong></label>
              <input 
                type="password" 
                placeholder='Enter Password' 
                name='password'
                value={values.password}
                onChange={handleInput} 
                className='iptxt' 
                required
              />
            </div>
            <button type='submit' className='btn1'>Signup</button><br /><br/>
            <p className='words'>
              Already have an account? 
              <Link to="/login" className='btn2'>Login</Link>
            </p>
            {message && (
              <p className={messageType === 'success' ? 'success-message' : 'error-message'}>
                {message}
              </p>
            )}
          </form>
        </Modal>
      </div>
    </div>
  );
}
*/


import axios from 'axios';
import React, { useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleExclamation } from "react-icons/fa6";
import Modal from 'react-modal';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

Modal.setAppElement('#root');

export default function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });

const navigate=useNavigate();

  const [visible, setVisible] = useState(true);
  const [message, setMessage] = useState(''); // State to hold message
  const [messageType, setMessageType] = useState(''); // State to hold message type
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // State to control popup visibility

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/users/signup", values);
      console.log(response.data);
      setMessage('Successfully registered!');
      setMessageType('success');
      setShowSuccessPopup(true);

      setTimeout(() => { 
        setVisible(false);
        navigate('/login');
      } ,2000);
     
      
    } catch (error) {
      console.error(error);
      setMessage('Registration failed. Please try again.');
      setMessageType('error');
      setShowSuccessPopup(true);
    }
  };
  
  return (
    <div>
      <img 
        src="https://i.pinimg.com/originals/73/5c/ea/735cea56968f703df45d4c551ee3b160.gif"
        className='image'
        alt="Service Background"
      />
      <p className='wrds'>
        <h2 className='wrds-h'>"Effortless Service, Every Time"</h2><br />
        Our mission is to enable premium quality care for your luxury vehicle service at affordable pricing. 
        We ensure real-time updates for complete vehicle care needs with a fair and transparent pricing mechanism.
        Have all kinds of repairs - from Wash & Detailing, Quick Service, Mechanical Repairs of Tyre & Battery for your vehicles.
      </p>

      <div className='d-flex justify-content-center align-items-center vh-100'>
        <Modal 
          className='box' 
          isOpen={visible} 
          onRequestClose={() => setVisible(false)}
          ariaHideApp={false}
        >
          <div className='close-btn' onClick={() => setVisible(false)}>&times;</div>
          <h1 className='signuptitle'>Sign-Up</h1><br />
          <form onSubmit={handleSubmit} >
            <div className='mb-3'>
              <label htmlFor="name"><strong>Name</strong></label>
              <input 
                type="text" 
                placeholder='Enter Name' 
                name='name'
                value={values.name}
                onChange={handleInput} 
                className='iptxt' 
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor="email"><strong>Email</strong></label>
              <input 
                type="email" 
                placeholder='Enter Email' 
                name='email'
                value={values.email}
                onChange={handleInput} 
                className='iptxt' 
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor="password"><strong>Password</strong></label>
              <input 
                type="password" 
                placeholder='Enter Password' 
                name='password'
                value={values.password}
                onChange={handleInput} 
                className='iptxt' 
                required
              />
            </div>
            <button type='submit'  className='btn1'>Signup</button><br /><br/>
            <p className='words'>
              Already have an account? 
              <Link to="/login" className='btn2'>Login</Link>
            </p>
          </form>
        

         {/* Success Popup */}
         {showSuccessPopup && (
          <div className='success-popup'>
          <div className={`popup ${messageType}`}>
          {messageType === 'success' && <FaCheckCircle className='popup-icon1' />}
          {messageType === 'error' && <FaCircleExclamation className='popup-icon2' />}
            <span className='message'>{message}</span>
          </div>
          </div>
        )}
        </Modal>
      </div>
    </div>
  );
}






