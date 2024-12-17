import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import About from "./About";
import './Batteryservice';
import Batteryservice from './Batteryservice';
import Bikeservices from './Bikeservices';
import Blogpage from './Blogpage';
import Bodypolish from './Bodypolish';
import Bookservice from './Bookservice';
import Carservices from './Carservices';
import Cartcalling from './Cartcalling';
import Contact from "./Contact";
import './Customrepair';
import Customrepair from './Customrepair';
import './Dentpaint';
import Dentpaint from './Dentpaint';
import Footer from "./Footer";
import Home from "./Home";
import Howitworks from "./Howitworks";
import Interiorvacuum from './Interiorvacuum';
import Login from './Login';
import './Login.css';
import './LoginValidation';
import Navbar from "./Navbar";
import Oilreplacement from './Oilreplacement';
import Services from "./Services";
import Signup from './Signup';
import './Signup.css';
import './SignupValidation';
import Waterwash from './Waterwash';
import Wheelservice from './Wheelservice';
import './Wheelservice.css';
import { CartProvider } from './CartContext';
import Cart from './Cart';
import Checkout from './Checkout';
import Payment from './Payment';



function App() {
  return (
    <CartProvider >
    <div>
    
    <Navbar />
    
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/howitworks" element={<Howitworks />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path ='/signup' element={<Signup />} />
    <Route path ='/login' element={<Login />} />
    <Route path ='/wheelservice' element={<Wheelservice />} />
    <Route path ='/batteryservice' element={<Batteryservice />} />
    <Route path ='/dentpaint' element={<Dentpaint />} />
    <Route path ='/customrepair' element={<Customrepair />} />
    <Route path ='/oilreplacement' element={<Oilreplacement />} />
    <Route path ='/waterwash' element={<Waterwash />} />
    <Route path ='/interiorvacuum' element={<Interiorvacuum />} />
    <Route path ='/bodypolish' element={<Bodypolish />} />
    <Route path ='/blogpage' element={<Blogpage />} />
    <Route path ='/bookservice' element={<Bookservice />} />
    <Route path ='/carservices' element={<Carservices />} />
    <Route path ='/bikeservices' element={<Bikeservices />} />
    <Route path ='/cart' element={<Cart/>} />
    <Route path ='/checkout' element={<Checkout/>} />
    <Route path ='/payment' element={<Payment/>} />
    
    </Routes>
    
    <Footer />
   
    </div>
    </CartProvider>
    
  
  )
}

export default App;
