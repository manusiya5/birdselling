import React from "react";
import "./FirstBirdDetails.css"
import { Container,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Home.css'

function ThirdBird(){
    return(
      <div>
      <Container className="allbirdContainer bg-light">
        <Row class="carousel-item justify-content-center align-item-center active">
          <Col>
          <div id="carousel" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner ">
  <div class="carousel-item  active" interval={50} >
           <img class="deatailimg d-block " src="https://i.shgcdn.com/80046cea-2a82-4ab6-879a-c1e3e089e9f4/-/format/auto/-/preview/3000x3000/-/quality/lighter/"  alt="Blue and gold macaw" />
       </div>
       <div class="carousel-item " interval={50}>
           <img class="deatailimg d-block "  src="https://inaturalist-open-data.s3.amazonaws.com/photos/6178436/large.jpg" alt="Blue and gold macaw" />
       </div>
       <div class="carousel-item " interval={50}>
           <img class="deatailimg d-block "  src="https://www.thealexandriazoo.com/images/animals/BlueAndGoldMacaw.jpg"  alt="Blue and Gold Macaw" />
       </div>
      <div class="carousel-caption">
    <h5 className="fst-italic">BlLUE AND GOLD MACAW</h5>
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
    <div className=" price flex pb-2 text-align-center fs-2">[1 pair]  BlLUE AND GOLD MACAW<br></br><br></br><strike>₹190000.00</strike>  ₹160000.00 Only 
    <Link to='/Bird3Cart'><button class="buy">Buy Me</button></Link>
    </div>

    <h3><a className="fs-5 ">Breed Overview:</a></h3>
    <ul>
      <li>COMMON NAMES: Blue and gold macaw, blue and yellow macaw</li><br></br>
      <li> SCIENTIFIC NAME: Ara ararauna</li><br></br>
      <li> ADULT SIZE: Approximately 85 to 90 cm</li> <br></br>
      <li>LIFE EXPECTANCY: 30 to 35 years</li></ul><br></br>
        <div className="p-3 ps-0">
        <h3><a className="fs-5">Habitat</a></h3>
          <ul>
            <li>In the wild, blue and gold macaws enjoy a wide range from Panama in Central America, extending into almost every country of northern South America. They have also been introduced in Puerto Rico.</li>
<li>Blue and golds typically live in the forests near rivers and swamps, though they can be found in a grassy savannah if it has tall trees.</li><br></br>
            </ul>
            <h3><a className="fs-5">Breeds</a></h3>
            <ul>
              <li> Blue-and-Gold macaws (Ara ararauna)</li><br></br>
            <li> Military macaw (Ara militaris)</li><br></br>
            <li> Wing clipped scarlet macaws (Ara macao)</li><br></br>
            <li>Golden-collared macaw (Primolius auricollis)</li><br></br>
            <li>Hyacinth macaw</li><br></br></ul>
            <h3><a className="fs-5">Identification</a></h3>
          <ul>
          <li>Blue and gold macaws get their common name from their two most prominent feather colors. They typically have a green forehead, fading into a teal blue that covers the nape, back, tail, and wings. The chest and underside of the wings and belly are a bright golden yellow. 
These birds have large black beaks and a black patch of feathers just underneath its beak. White patches of skin adorned with rings of tiny black feathers surround their eyes and cover much of the face.</li></ul><br></br>
<h3><a className="fs-5">Food</a></h3>
          <ul>
          <li class="food">Blue-and-gold macaws mainly eat seeds, nuts, and fruits. They use their strong beaks to break open nut shells and to crush seeds. In some cases, they consume clay found at riverbanks which allows them to digest the toxins from unripe seeds that they may have ingested.</li></ul>
          </div>
          <Link to='/AllBirdDetails'> <button className='backButton justify-content-end align-items-end bg-success' variant="success" size="lg"> Back </button></Link>
    </div>

      </Container>
      </div>
    );
}
export default ThirdBird;