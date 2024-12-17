import React from "react";
import "./FirstBirdDetails.css"
import { Link } from "react-router-dom";
import { Container,Row,Col } from "react-bootstrap";
function FifthBird(){
    return(
      <Container className="allbirdContainer bg-light">
        <Row class="carousel-item justify-content-center align-item-center active">
          <Col>
          <div id="carousel" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner ">
  <div class="carousel-item  active" interval={5} >
           <img class="deatailimg d-block "  src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/308065631/1800"  alt="Yellow Fischer Love Bird" />
       </div>
       <div class="carousel-item " interval={5}>
           <img class="deatailimg d-block "  src="https://falcones.co.uk/wp-content/uploads/2017/06/Pigeon-.jpg" alt="Yellow Fischer Love Bird" />
       </div>
       <div class="carousel-item " interval={5}>
           <img class="deatailimg d-block "  src="https://fromhousetohomeblog.files.wordpress.com/2011/07/pigeons.jpg" alt="Yellow Fischer Love Bird" />
       </div>
      <div class="carousel-caption">
    <h5 className="fst-italic">PIGEON</h5>
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
    <div className="p-5 ">
      <div className=" price flex price pb-2 text-align-center fs-2">[1 pair]  PIGEON<br></br><br></br><strike>₹1000.00</strike>  ₹750.00 Only
    <Link to='/Bird5Cart'><button class="buy">Buy Me</button></Link>
    </div>
    <h3><a className="fs-5 ">Breed Overview:</a></h3>
    <ul>
      <li>COMMON NAMES: Rock pigeon, rock dove, domestic pigeon, common pigeon</li><br></br>
      <li> SCIENTIFIC NAME: Columbidae</li><br></br>
      <li> ADULT SIZE: 11-14 inches</li> <br></br>
      <li>LIFE EXPECTANCY: commonly live up to 15 years and sometimes longer</li></ul><br></br>
        <div className="p-3 ps-0">
        <h3><a className="fs-5">Habitat</a></h3>
          <ul>
            <li>   Pigeons are commonly found around barnyards, parks, and city buildings. In natural environments, pigeons usually occupy sea cliffs or caves.</li><br></br>
            </ul>
            <h3><a className="fs-5">Breeds</a></h3>
            <ul>
              <li>UK - collared dove or ring-necked dove (Streptopelia decaocto)</li><br></br>
            <li>wood pigeon (Columba palumbus)</li><br></br>
            <li> stock dove (Columba oenas) </li><br></br>
            <li> turtle dove (Streptopelia turtur)</li><br></br></ul>
          <h3><a className="fs-5">Identification</a></h3>
          <ul>
          <li>  Plump bird with short legs and small head. Plumage is variable; some birds are dark gray with green-purple iridescence on the neck. Tail usually shows a dark band at the tip. Occasional variants are pale or rusty colored; often found in flocks with pigeons in standard gray plumage.</li></ul><br></br>
<h3><a className="fs-5">Food</a></h3>
          <ul>
          <li class="food">The main component of the pigeon food habits is seeds, and it also varies greatly between the species. Many types of ground feeding (granivorous species) consume fruit, insects and other worms. The Atoll Fruit Dove, one species, has adapted to the capture of insects and small reptiles.</li></ul>
          </div>
          <Link to='/AllBirdDetails'> <button className='backButton justify-content-end align-items-end bg-success' variant="success" size="lg"> Back </button></Link>
    </div>

      </Container>
    );
}
export default FifthBird;