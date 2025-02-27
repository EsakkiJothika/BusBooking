import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"

const SignupForm = () => {


let [username,setUsername] = useState();
let [email,setEmail] = useState();
let [password,setPassword] = useState();




function signUpData(e){
    e.preventDefault();

let formData = {
    username:username,
    password:password,
    email:email
}

console.log(formData);

axios.post("http://localhost:3000/auth/signup",formData)
.then(()=>{
    alert("data Posted")
})
.catch(()=>{
    alert("Error")
})






}



  return (
    <div className="container" style={{ minHeight: "100vh" }}>
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-md-6 col-lg-4">
          <div className="signup-container p-4 bg-white rounded shadow">
            <h2 className="text-center mb-4">Sign Up</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" placeholder="Enter your username" required onChange={(e)=>setUsername(e.target.value)}/>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" required onChange={(e)=>setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter your password" required onChange={(e)=>setPassword(e.target.value)}/>
              </div>
              <button type="submit" className="btn btn-primary w-100" onClick={signUpData}>Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;