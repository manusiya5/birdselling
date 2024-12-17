import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Button, Card, Form, Modal, Row, Col } from "react-bootstrap";

const AddBirds = () => {
  const [birds, setBirds] = useState([
    {
      id: "1",
      Name: "Fischer Love Bird",
      videoSrc: "https://cdn.pixabay.com/vimeo/333604625/parrot-23223.mp4?width=640&hash=ee68dd78342ad14601344b9de794ad4c3c793c43",
      path: "/FirstBirdDetails",
    },
    {
      id: "2",
      Name: "Sulpher - Crested Cockatoo",
      videoSrc: "https://player.vimeo.com/external/561637688.sd.mp4?s=4dcb3efb9d5e62666af343f1efcedfb5fe849be1&profile_id=164&oauth2_token_id=57447761",
      path: "/SecondBirdDetails",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newBird, setNewBird] = useState({
    id: "",
    Name: "",
    videoSrc: "",
    path: "",
  });

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBird({ ...newBird, [name]: value });
  };

  const handleAddBird = () => {
    if (newBird.Name && newBird.videoSrc && newBird.path) {
      setBirds([...birds, { ...newBird, id: Date.now().toString() }]);
      setNewBird({ id: "", Name: "", videoSrc: "", path: "" });
      handleCloseModal();
    } else {
      alert("Please fill in all the fields!");
    }
  };

  const handleDeleteBird = (birdId) => {
    const filteredBirds = birds.filter((bird) => bird.id !== birdId);
    setBirds(filteredBirds);
  };

  return (
    <div>
      {/* Button to Open Add Bird Modal */}
      <div className="text-center mb-4">
        <Button variant="success" onClick={handleShowModal}>
          Add Bird Details
        </Button>
      </div>

      {/* Display Bird Cards */}
      <Row>
        {birds.map((bird) => (
          <Col lg={4} md={6} key={bird.id}>
            <Card className="m-4">
              <video
                className="pt-2"
                variant="top"
                src={bird.videoSrc}
                type="video/mp4"
                autoPlay
                muted
                loop
              />
              <Card.Body>
                <Card.Text>
                  <h5 className="text-center">{bird.Name}</h5>
                </Card.Text>
                <Link to={bird.path}>
                  <Button className="m-2" variant="primary">
                    Edit 
                  </Button>
                </Link>
                <Button
                  className="m-2"
                  variant="danger"
                  onClick={() => handleDeleteBird(bird.id)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Add Bird Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Bird </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Bird Name</Form.Label>
              <Form.Control
                type="text"
                name="Name"
                value={newBird.Name}
                onChange={handleChange}
                placeholder="Enter bird name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Video Link</Form.Label>
              <Form.Control
                type="text"
                name="videoSrc"
                value={newBird.videoSrc}
                onChange={handleChange}
                placeholder="Enter video link"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Details Link</Form.Label>
              <Form.Control
                type="text"
                name="path"
                value={newBird.path}
                onChange={handleChange}
                placeholder="Enter details link"
              />
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
    </div>
  );
};

export default AddBirds;
