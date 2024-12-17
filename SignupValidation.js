function Validation (values) {
    let error = {}
    if(values.name === "") {
        error.name = "Please Enter Your Name"
        }
        else {
        error.name=""
        }


    if(values.email === "") {
    error.email = "Please Enter Your Email"
    }

    
    else {
    error.email =""
    }
    
    if(values.password === "") {
    error.password = "Please Enter Your Password"
    }

    else {
    error.password =""
    }
    return error;
}

export default Validation;