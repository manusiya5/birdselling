import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Home.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row,Col } from 'react-bootstrap';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function AdminNav() {
  const cardData = [
    {
      id: "FirstBird",
     Name:"Fischer Love Bird",
     videoSrc:"https://media.istockphoto.com/id/997531522/photo/fischers-lovebirds-on-branch.jpg?s=612x612&w=0&k=20&c=KoBHFffK4D5BwQjeRsWD635wbxj7dKXMRlUyFgqVE6Y=",
       path:"/FirstBirdDetails"
    },
    {
      id: "SecondBird",
      Name:"Sulpher - Crested Cockatatoo",
      videoSrc:"https://i.pinimg.com/736x/fa/2f/2f/fa2f2f41705902239dc41aea5ac71042.jpg",
      path:"/SecondBirdDetails"
    },
    {
      id: "ThirdBird",
     Name:"Blue And Gold Macaw",
     videoSrc:"https://c1.wallpaperflare.com/preview/58/653/211/zoo-parrots-exotic-colorful.jpg",
     path:"/ThirdBirdDetails"
    },
    {
      id: "FourthBird",
      Name:"Zebra Finch Bird",
      videoSrc:"https://media.istockphoto.com/id/530563124/photo/zebra-finch.jpg?s=612x612&w=0&k=20&c=HyIIZYQkOj7JU21cL74_tbDZHmXdZsJyztLC6vugbo8=",
      path:"/FourthBirdDetails"
    },
    {
      id: "FifthBird",
      Name:"Pigeon",
      videoSrc:"https://blog.nature.org/wp-content/uploads/2022/08/2997756625_de45c60cd1_o-2.jpg",
      path:"/FifthBirdDetails"
    },
  ];
  return (
    <div>
    <div className='adminNavbar'>
    <Nav className='  bg-dark p-5 fs-1' justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
      <Link to="/AllBirdDetails" className='text-light'>All Birds</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/AddBirds" className='text-light'>Edit Bird Details</Link>
      </Nav.Item>
    
    </Nav>
    </div>
   

    <div id="homebird">
    <h1 className='text-center text-secondary pb-5 fst-roman'>AVAILABLE BIRDS</h1>
       <Row  className='m-0'>
      {cardData.map((card,i) => (
         <Col lg={4} md={6}   > 
           <Card className='m-3'>
             <img className="homeimg2 pt-2 "variant="top" src={card.videoSrc} type="video/mp4" alt={card.Name}/>
             <Card.Body>
               <Card.Text>
                 <h5 className='text-center'>{card.Name}</h5>
               </Card.Text>
             </Card.Body>
           </Card>
         </Col>
      ))}
       </Row>
      <Link to='/'> <Button className='homeButton ' variant="success" > Home </Button></Link>
    </div>
 
    </div>
  );
}

export default AdminNav;