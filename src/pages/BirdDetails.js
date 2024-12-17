import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const BirdDetails = () => {
  const location = useLocation();
  const bird = location.state?.bird;

  if (!bird) {
    // Show a fallback UI if no bird data is available
    return (
      <Container className="text-center mt-5">
        <h2>No bird details available!</h2>
        <Link to="/">
          <Button variant="primary">Go Back</Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <div id="carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              {bird.images.map((image, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <img src={image} className="d-block w-100" alt={bird.name} />
                </div>
              ))}
            </div>
            <a
              className="carousel-control-prev"
              href="#carousel"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carousel"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </Col>
        <Col md={6}>
          <h2>{bird.name}</h2>
          <p>
            <strike>₹{bird.originalPrice}</strike> <strong>₹{bird.price}</strong>
          </p>
          <h4>Overview</h4>
          <ul>
            {bird.overview.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <h4>Habitat</h4>
          <ul>
            {bird.habitat.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <h4>Breeds</h4>
          <ul>
            {bird.breeds.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <h4>Identification</h4>
          <p>{bird.identification}</p>
          <h4>Food</h4>
          <p>{bird.food}</p>
          <Link to="/">
            <Button variant="success">Back to All Birds</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default BirdDetails;
