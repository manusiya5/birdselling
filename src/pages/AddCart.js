import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col, Modal } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon

const CardListWithCart = () => {
  const cardData = [
    {
      id: "FirstBird",
      Name: "Fischer Love Bird",
      videoSrc: "https://cdn.pixabay.com/vimeo/333604625/parrot-23223.mp4?width=640&hash=ee68dd78342ad14601344b9de794ad4c3c793c43",
      path: "/FirstBirdDetails",
    },
    {
      id: "SecondBird",
      Name: "Sulpher - Crested Cockatatoo",
      videoSrc: "https://player.vimeo.com/external/561637688.sd.mp4?s=4dcb3efb9d5e62666af343f1efcedfb5fe849be1&profile_id=164&oauth2_token_id=57447761",
      path: "/SecondBirdDetails",
    },
  ];

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (bird) => {
    if (!cart.some((item) => item.id === bird.id)) {
      setCart([...cart, bird]);
    } else {
      alert("This bird is already in the cart!");
    }
  };

  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  return (
    <div>
      {/* Cart Icon */}
      <div className="d-flex justify-content-between align-items-center">
        <Button variant="outline-primary" onClick={handleShowCart}>
          <FaShoppingCart size={20} /> Cart ({cart.length})
        </Button>
      </div>

      {/* Bird Cards */}
      <div id="bird">
        <Row>
          {cardData.map((card) => (
            <Col lg={4} md={6} key={card.id}>
              <Card className="m-4">
                <video className="pt-2" variant="top"
                  src={card.videoSrc}
                  type="video/mp4"
                  autoPlay
                  muted
                  loop
                />
                <Card.Body>
                  <Card.Text>
                    <h5 className="text-center">{card.Name}</h5>
                  </Card.Text>
                  <Button
                    variant="success"
                    onClick={() => addToCart(card)}
                    className="m-2"
                  >
                    Add to Cart
                  </Button>
                  <Link to={card.path}>
                    <Button className="allDetail" variant="primary">
                      Details
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Cart Modal */}
      <Modal show={showCart} onHide={handleCloseCart}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((bird) => (
              <div key={bird.id} className="d-flex justify-content-between">
                <span>{bird.Name}</span>
                <Link to={bird.path}>
                  <Button variant="info" size="sm">
                    View Details
                  </Button>
                </Link>
              </div>
            ))
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCart}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CardListWithCart;
