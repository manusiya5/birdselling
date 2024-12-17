import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Modal, Button, Form } from "react-bootstrap";

const BirdDetailsApp = () => {
  // Bird data
  const [birds, setBirds] = useState([
    {
      id: 1,
      name: "Pigeon",
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
        "LIFE EXPECTANCY: commonly live up to 15 years and sometimes longer",
      ],
      habitat: [
        "Pigeons are commonly found around barnyards, parks, and city buildings.",
        "In natural environments, pigeons usually occupy sea cliffs or caves.",
      ],
      breeds: [
        "UK - collared dove or ring-necked dove (Streptopelia decaocto)",
        "wood pigeon (Columba palumbus)",
        "stock dove (Columba oenas)",
        "turtle dove (Streptopelia turtur)",
      ],
      identification:
        "Plump bird with short legs and small head. Plumage is variable; some birds are dark gray with green-purple iridescence on the neck. Tail usually shows a dark band at the tip.",
      food: "The main component of the pigeon food habits is seeds. Many types of ground-feeding species consume fruit, insects, and other worms.",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newBird, setNewBird] = useState({
    name: "",
    images: "",
    price: "",
    originalPrice: "",
    overview: "",
    habitat: "",
    breeds: "",
    identification: "",
    food: "",
  });

  // Handle opening and closing of modal
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Handle form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBird({ ...newBird, [name]: value });
  };

  // Handle submission of new bird details
  const handleAddBird = () => {
    const { name, images, price, originalPrice, overview, habitat, breeds, identification, food } = newBird;

    if (name && images && price && originalPrice) {
      const birdImages = images.split(",").map((img) => img.trim()); // Convert images string to an array
      const birdOverview = overview.split(";").map((o) => o.trim());
      const birdHabitat = habitat.split(";").map((h) => h.trim());
      const birdBreeds = breeds.split(";").map((b) => b.trim());

      const newBirdEntry = {
        id: Date.now(),
        name,
        images: birdImages,
        price: parseFloat(price),
        originalPrice: parseFloat(originalPrice),
        overview: birdOverview,
        habitat: birdHabitat,
        breeds: birdBreeds,
        identification,
        food,
      };

      setBirds([...birds, newBirdEntry]);
      setNewBird({
        name: "",
        images: "",
        price: "",
        originalPrice: "",
        overview: "",
        habitat: "",
        breeds: "",
        identification: "",
        food: "",
      });
      handleCloseModal();
    } else {
      alert("Please fill in all required fields!");
    }
  };

  return (
    <Container>
      {/* Admin Panel to Add Birds */}
      <div className="text-center mb-4">
        <Button variant="success" onClick={handleShowModal}>
          Add Bird Details
        </Button>
      </div>

      {/* Bird Cards */}
      <Row>
        {birds.map((bird) => (
          <Col lg={4} md={6} key={bird.id}>
            <Card className="m-4">
              <div id={`carousel-${bird.id}`} className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  {bird.images.map((image, index) => (
                    <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                      <img src={image} className="d-block w-100" alt={bird.name} />
                    </div>
                  ))}
                </div>
                <a className="carousel-control-prev" href={`#carousel-${bird.id}`} role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href={`#carousel-${bird.id}`} role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              <Card.Body>
                <h5>{bird.name}</h5>
                <p>
                  <strike>₹{bird.originalPrice}</strike> ₹{bird.price}
                </p>
                <Link to="/buy">
                  <Button variant="primary">Buy Now</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for Adding Bird Details */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Bird Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Bird Name</Form.Label>
              <Form.Control type="text" name="name" value={newBird.name} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Images (comma-separated URLs)</Form.Label>
              <Form.Control type="text" name="images" value={newBird.images} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" name="price" value={newBird.price} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Original Price</Form.Label>
              <Form.Control type="number" name="originalPrice" value={newBird.originalPrice} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Overview (semicolon-separated)</Form.Label>
              <Form.Control type="text" name="overview" value={newBird.overview} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Habitat (semicolon-separated)</Form.Label>
              <Form.Control type="text" name="habitat" value={newBird.habitat} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Breeds (semicolon-separated)</Form.Label>
              <Form.Control type="text" name="breeds" value={newBird.breeds} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Identification</Form.Label>
              <Form.Control type="text" name="identification" value={newBird.identification} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Food</Form.Label>
              <Form.Control type="text" name="food" value={newBird.food} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="success" onClick={handleAddBird}>
            Add Bird
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default BirdDetailsApp;
