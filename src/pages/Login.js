import React, { useState } from 'react';

import  './login.css';
// import AllDetails from './AllBirdDetails';
import { Link } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
   };


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();

   
  };


  return (
  
    <div className="loginform ">
    <form onSubmit={handleFormSubmit} className="login">
      <h3 className='text-center pt-0 pb-2'>Login</h3>
      <h5 > Email: <input className='ip' type="email" value={email} onChange={handleEmailChange}  required  /></h5> <br></br>
        <h5 >password: <input className='ip'  type="password" value={password} onChange={handlePasswordChange}  required /></h5><br></br>
    <Link to="/AdminNav" > <button  className='loginButton fs-3 bg-info border rounded-pill' type="submit">Login</button></Link><br></br>
    </form>
  </div>
      
 
  );
};
export default Login;