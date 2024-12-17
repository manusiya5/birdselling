import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";

const birdData = [
  {
    id: "bird1",
    name: "Fischer Love Bird",
    images: [
      "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/308065631/1800",
      "https://falcones.co.uk/wp-content/uploads/2017/06/Pigeon-.jpg",
      "https://fromhousetohomeblog.files.wordpress.com/2011/07/pigeons.jpg",
    ],
    price: 750,
    originalPrice: 1000,
    overview: [
      "COMMON NAMES: Rock pigeon, rock dove, domestic pigeon, common pigeon",
      "SCIENTIFIC NAME: Columbidae",
      "ADULT SIZE: 11-14 inches",
      "LIFE EXPECTANCY: Commonly live up to 15 years and sometimes longer",
    ],
    habitat: [
      "Pigeons are commonly found around barnyards, parks, and city buildings.",
      "In natural environments, pigeons usually occupy sea cliffs or caves.",
    ],
    breeds: [
      "Collared dove or ring-necked dove",
      "Wood pigeon",
      "Stock dove",
      "Turtle dove",
    ],
    identification:
      "Plump bird with short legs and a small head. Plumage is variable; some birds are dark gray with green-purple iridescence on the neck. Tail usually shows a dark band at the tip.",
    food:
      "The main component of the pigeon food habits is seeds, but they also consume fruit, insects, and other worms.",
  },
  // Add more bird objects here
];

const BirdExplanation = () => {
  return (
    <Row>
      {birdData.map((bird) => (
        <Col md={4} key={bird.id}>
          <Card className="m-3">
            <Card.Img
              variant="top"
              src={bird.images[0]}
              alt={bird.name}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>{bird.name}</Card.Title>
              <Card.Text>
                Price: <strong>₹{bird.price}</strong>
              </Card.Text>
              <Link
 
    to={{
      pathname: "/BirdDetails",
      state: { bird },
    }}
  >
    <Button variant="primary">Buy Now</Button>
  </Link>
  

            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default BirdExplanation;
