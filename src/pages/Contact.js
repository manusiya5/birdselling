// import React from "react";
// import './Success.css'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import './Home.css'
// import "bootstrap/dist/css/bootstrap.min.css";
// import './Contact.css'


// function Contact() {
//   return (
//     <div className='contactPage'>
//        <Navbar className='homenav' bg="dark" data-bs-theme="dark">
//         <Container className=' text-light p-3'>
//           <Nav.Link href="/" >Report</Nav.Link>
//           <Nav.Link href="/Contact"> Contact Us</Nav.Link>
//             <Nav.Link href="/" className=" text-light">Rating</Nav.Link>
//             <Nav.Link href="/" className=" text-light">Home</Nav.Link>
//         </Container>
//       </Navbar>
//       <h3 className="text-center text-secondary pt-5 pb-0">Contact Us</h3>
//        <div className="contactForm shadow-lg p-3 pt-5 mb-5 bg-body rounded">
//        Name: <br></br><input type="text" className='userName p-2 mb-4'  placeholder='Enter your Name'/><br></br>
//        Email:<br></br> <input type="mail" className='userMail p-2 mb-4' placeholder='Enter your Mail'/><br></br>
//        Message: <br></br><textarea  className='message p-2 mb-4' placeholder='Enter your Message'/><br></br>
//        <button  className='messageSubmit p-2 mb-4'>Submit</button>
//        </div>
//        <div className='footerbody bg-dark text-center '>
       
//        <div className='footerlink'>
//        <a href="/" className='text-light pr-5'>Privacy</a>
//        <a href="/Contact" className='text-light'>Terms and  Conditions</a>
//        </div>
//        <div className='footercontent text-light'>
//        <h5 >888 Griffiths Way, Mainland ML 12345</h5>
//        <h5 >(987) 654-3210</h5>
//        <h5 >info@yoursite.com</h5>
//        </div>
//        <div>
//        <i class="bi bi-facebook"></i>
//        <i class="bi bi-whatsapp"></i>
//        <i class="bi bi-instagram"></i>
//        </div>
//        <div className='copyright text-light'>
//        <h5 >Copyright 2024 Website.com. All Rights Reserved.</h5>
//        </div>
//    </div>
//     </div>
//   )
  
// }
// function SendMail(){
//   alert("Mail successfully sent"); 
// }
// export default Contact;


import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Container, Form, Button, Alert } from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(""); // Clear previous status

    // EmailJS service details
    const serviceId = "service_c60k1qn";
    const templateId = "template_o7v81aa";
    const publicKey = "nm1o_0-9ZcGk18-MC";

    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <Container className="mt-4">
      <h2>Contact Admin</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mt-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </Form.Group>

        <Form.Group controlId="formMessage" className="mt-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Enter your message"
            required
          />
        </Form.Group>

        <Button className="mt-3" variant="primary" type="submit">
          Send Message
        </Button>
      </Form>

      {/* Status Alerts */}
      {status === "success" && (
        <Alert className="mt-3" variant="success" >
          Your message has been sent successfully!
        </Alert>
      )}
      {status === "error" && (
        <Alert className="mt-3" variant="danger">
          Something went wrong. Please try again.
        </Alert>
      )}
    </Container>
  );
};

export default Contact;

