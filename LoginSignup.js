import React,{ useState }from "react"
import './LoginSignup.css';


const LoginSignup = () => {

  const[action,setAction]= useState("Sign Up");


  
  return (
    <div className="login-page"  >
     <div className="insert_image">
     <img src="https://www.shutterstock.com/image-photo/hand-mechanic-holding-car-service-600nw-2340377479.jpg"
     height="625px" width="800px" alt=" /" />
    
    
    <div className="login-box">
    <div className='login-container'>

      <div className="login-header">
        <div className="login-text">{action}</div>
        <div className="underline"></div>
      </div>
      <form action="">
      <div className="inputs">

{action==="Login" ? <div></div> :<div className="input">
          
          <input type="text" placeholder="Username"  required></input>
          
        </div> }
    
        <div className="input">
          
          <input type="email"  placeholder="Email Id" required ></input>
          </div>
        

        <div className="input">
          
        <input type="password"  placeholder="Password" required></input>
       
        </div>

        {action==="Login" ? <div></div> :<div className="input">
         
          <input type="password"   placeholder="Confirm Password" required></input>
          
        </div>}
       
 {action==="Sign Up" ? <div></div> :  <div className="forgot-password">Forgot Password?<span>Click Here</span></div>}
 {action==="Sign Up" ? <div></div> : <div className="login-footer2" onClick={()=>{setAction("Sign Up")}}>Dont't you have an account?<span>SignUp </span> </div>}
 

 
 
 {action==="Login" ? <div></div> :  <div className="login-footer">
  
  <p onClick={()=>{setAction("Login")}}>Already have an account?<span> Login</span></p>
  
</div>}

   {action==="Sign Up" ? <div className="submit-container" >
    <p  onClick={()=>{setAction("Sign Up")}}>Sign Up</p></div> : <div></div>}

  {action==="Login" ? <div className="submit-container2">
  <p onClick={()=>{setAction("Login")}}>Login</p></div> : <div></div>}

      </div>
      </form>
      </div>
    </div>
    
    </div>
    </div>
    
   
  )

}

export default LoginSignup