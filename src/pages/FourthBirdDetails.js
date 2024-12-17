import React from "react";
import "./FirstBirdDetails.css"
import { Container,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
function FourthBird(){
    return(
      <Container className="allbirdContainer bg-light">
        <Row class="carousel-item justify-content-center align-item-center active">
          <Col>
          <div id="carousel" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner ">
  <div class="carousel-item  active" interval={5} >
           <img class="deatailimg d-block "  src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/123646541/1800"  alt="Yellow Fischer Love Bird" />
       </div>
       <div class="carousel-item " interval={5}>
           <img class="deatailimg d-block "  src="https://rukminim2.flixcart.com/image/850/1000/kjuby4w0/poster/8/i/g/medium-44501-birds-poster-zebra-finch-bird-wall-poster-poster-original-imafzbj6kdqkjam8.jpeg?q=90" alt="Yellow Fischer Love Bird" />
       </div>
       <div class="carousel-item " interval={5}>
           <img class="deatailimg d-block "  src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/123646521/1800" alt="Yellow Fischer Love Bird" />
       </div>
      <div class="carousel-caption">
    <h5 className="fst-italic">ZEBRA FINCH BIRD</h5>
  </div>
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
     </Col>
    </Row>
    <div className="p-5">
    <div className=" price flex pb-2 text-align-center fs-2">[1 pair]  ZEBRA FINCH BIRD<br></br><br></br><strike>₹1800.00</strike>  ₹1650.00 Only
    <Link to='/Bird4Cart'><button class="buy">Buy Me</button></Link>
    </div>
    <h3><a className="fs-5 ">Breed Overview:</a></h3>
    <ul>
      <li>COMMON NAMES: Australian zebra finch,Sunda zebra finch</li><br></br>
      <li> SCIENTIFIC NAME: Taeniopygia guttata,Taeniopygia castanotis</li><br></br>
      <li> ADULT SIZE: 10 cm to 12 cm</li> <br></br>
      <li>LIFE EXPECTANCY: normally live for 5 to 9 years but may live as long as 12 years</li></ul><br></br>
        <div className="p-3 ps-0">
        <h3><a className="fs-5">Habitat</a></h3>
          <ul>
            <li>Zebra Finches are most commonly found in the drier areas of Australia, living year round in social flocks of up to 100 or more birds. They can be found in a variety of habitats, mainly dry wooded grasslands, bordering watercourses.</li><br></br>
            </ul>
            <h3><a className="fs-5">Breeds</a></h3>
            <ul>
              <li>Hawfinch (Coccothraustes coccothraustes)</li><br></br>
            <li>Cassin's finch (Haemorhous cassinii)</li><br></br>
            <li> Pallas' rosefinch (Carpodacus roseus)</li><br></br>
            <li> European goldfinch (Carduelis carduelis)</li><br></br>
            <li>Elegant euphonia (Chlorophonia elegantissima)</li><br></br>
            <li>Hooded siskin (Spinus magellanicus)</li><br></br></ul>
          <h3><a className="fs-5">Identification</a></h3>
          <ul>
          <li>Zebra Finches are mainly grey, with characteristic black 'tear drop' eye stripes and 'zebra like' black and white barring on the rump and upper tail. The throat and upper breast are pale grey, with fine black barring, and there is a broad black band on upper chest. The sides of the belly are chestnut with many white spots. The remainder of the belly and the undertail are white. The male is distinguished from the female by its orange chestnut cheek patches, a character that gave the species the alternative name of Chestnut-eared Finch. Both sexes have red eyes and bill. The legs and feet are orange yellow. Young are similar in plumage to the female, except that the clear black and white markings of the head are absent. The eyes are grey-brown and the bill is black.</li></ul><br></br>
<h3><a className="fs-5">Food</a></h3>
          <ul>
          <li class="food">Zebra Finches feed in large flocks on fallen or ripening grass seeds. Insects may be taken at any time of the year, but are particularly favoured when feeding young. Feeding takes place on the ground, and, unlike some other grassfinches, birds never pull seed heads down with their feet.</li></ul>
          </div>
          <Link to='/AllBirdDetails'> <button className='backButton justify-content-end align-items-end bg-success' variant="success" size="lg"> Back </button></Link>
    </div>

      </Container>
    );
}
export default FourthBird;