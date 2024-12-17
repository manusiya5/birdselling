import React from "react";
import './Success.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Home.css'
import "bootstrap/dist/css/bootstrap.min.css";
function Success(){
return(
    <div >
         <Navbar className='homenav' bg="dark" data-bs-theme="dark">
        <Container className=' text-light p-3'>
          <Nav.Link href="/" >Report</Nav.Link>
          <Nav.Link href="/Contact"> Contact Us</Nav.Link>
            <Nav.Link href="/" className=" text-light">Rating</Nav.Link>
            <Nav.Link href="/" className=" text-light">Home</Nav.Link>
        </Container>
      </Navbar>
        <div className="success">
    <i class="successicon bi-check-circle-fill "  ></i>
    <h1 >Your order is Confirmed</h1>
    
    </div>
    <div className='footerbody bg-dark text-center '>
       
       <div className='footerlink'>
       <a href="/" className='text-light pr-5'>Privacy</a>
       <a href="/Contact" className='text-light'>Terms and  Conditions</a>
       </div>
       <div className='footercontent text-light'>
       <h5 >888 Griffiths Way, Mainland ML 12345</h5>
       <h5 >(987) 654-3210</h5>
       <h5 >info@yoursite.com</h5>
       </div>
       <div>
       <i class="bi bi-facebook"></i>
       <i class="bi bi-whatsapp"></i>
       <i class="bi bi-instagram"></i>
       </div>
       <div className='copyright text-light'>
       <h5 >Copyright 2024 Website.com. All Rights Reserved.</h5>
       </div>
   </div>
    </div>
)
}
export default Success;