import React from "react";
// import "./FirstBirdDetails.css"
import Success from "./Success";
import { Container,Row,Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
function FirstBird(){
    return(
      <Container className="allbirdContainer bg-light">
        <Row class="carousel-item justify-content-center align-item-center active">
          <Col>
          <div id="carousel" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="deatailimg d-block w-100" src="https://i0.wp.com/www.birdbaron.com/wp-content/uploads/2019/10/how-many-types-of-lovebird-are-there_.jpg?fit=1200%2C800&ssl=1" alt="Yellow Fischer Love Bird" />
    </div>
    <div class="carousel-item">
      <img class="deatailimg d-block w-100" src="https://a-z-animals.com/media/2022/06/Lovebird-in-cage.jpg" alt="Yellow Fischer Love Bird" />
    </div>
    <div class="carousel-item">
      <img class="deatailimg d-block w-100" src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL055YXNhLWxvdmViaXJkLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODI4fX19" alt="Yellow Fischer Love Bird" />
    </div>
    <div class="carousel-caption">
        <h5 className="fst-italic">YELLOW FISCHER LOVE BIRD</h5>
      </div>
  </div>

  <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

     </Col>
    </Row>
    <div className="p-5">
    <div className=" price flex pb-2 text-align-center fs-2">[1 pair]  YELLOW FISCHER LOVE BIRD<br></br><br></br><strike>₹3,500.00</strike>  ₹2900.00 Only
    <Link to='/Order'><button class="buy">Buy Now</button></Link>
    </div>
    <h3><a className="birdHeading fs-5">Breed Overview:</a></h3>
    <ul>
      <li>COMMON NAMES: Fischer's lovebird, black-masked lovebird, yellow-collared lovebird, peach-faced lovebird, pocket parrot</li><br></br>
      <li> SCIENTIFIC NAME: Agapornis fischeri, Agapornis personata, Agapornis roseicollis</li><br></br>
        <li> ADULT SIZE: 5 to 6 inches</li><br></br>
        <li>LIFE EXPECTANCY: 10 to 15 years, potentially more with great care</li><br></br></ul>
        <div className="p-3 ps-0">
        <h3><a className="birdHeading fs-5">Habitat</a></h3>
          <ul>
            <li>Fischer's Lovebird is native to a specific region in East Africa, primarily found in
Tanzania.</li><br></br>
            <li>Its natural habitat includes savannas, woodlands, and scrublands.</li><br></br>
            </ul>
            <h3><a className="birdHeading fs-5">Breeds</a></h3>
            <ul>
              <li>Abyssinian or black-winged lovebird (Agapornis taranta)</li><br></br>
            <li> Black-cheeked lovebird  (Agapornis nigrigenis)</li><br></br>
            <li>Madagascar or grey-headed lovebird (Agapornis cana)</li><br></br>
            <li>Nyasa or Lillian's lovebird (Agapornis lilianae)</li><br></br>
            <li>Red-faced or red-headed lovebird (Agapornis pullaria)</li><br></br>
            <li>Swindern's or black-collared lovebird (Agapornis Swindernia)</li><br></br>
            <li>In the wild, the Fischer's, Nyasa, and black-cheeked lovebird populations are a cause for concern. Though they are not yet on the endangered species list, their numbers are so low that each falls into one of the "threatened" or "vulnerable" categories.</li><br></br></ul>
          <h3><a className="birdHeading fs-5">Identification</a></h3>
          <ul>
          <li>Fischer’s lovebirds get their name from the German explorer Gustave
Fischer. Another name for them is the “eye-ring” lovebird because they have
white rings around their eyes. This characteristic is not found among other
lovebird species. Their characteristic color pattern is a green body, red forehead,
and orange face and throat. They can also come in color mutations of lutino, sea
green, pied, and yellow. Fischer’s lovebirds have a reputation for being more
aggressive to other species than other lovebirds.</li></ul>
<h3><a className="birdHeading fs-5">Food</a></h3>
          <ul>
          <li class="food">After sunflower seeds and cracked peanuts, cracked corn is the most inexpensive food source favored by many birds.</li></ul>
          </div>
          <Link to='/AllBirdDetails'> <button className='backButton justify-content-end align-items-end bg-success' variant="success" size="lg"> Back </button></Link>

    </div>
  </Container>
    );
}
export default FirstBird;