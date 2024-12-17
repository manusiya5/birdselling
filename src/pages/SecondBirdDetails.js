import React from "react";
import "./FirstBirdDetails.css"
import { Container,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
function SecondBird(){
    return(
      <Container className="allbirdContainer bg-light ">
        <Row class="carousel-item justify-content-center align-item-center active">
          <Col>
          <div id="carousel" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner ">
  <div class="carousel-item  active" interval={5} >
           <img class="deatailimg d-block "  src="https://qph.cf2.quoracdn.net/main-qimg-896a30881b647e94e145e418599159f2-lq"  alt="Yellow Fischer Love Bird" />
       </div>
       <div class="carousel-item " interval={5}>
           <img class="deatailimg d-block "  src="https://www.thesprucepets.com/thmb/mM9ajuBgNAAs-2QvuEn8KnIMn9E=/5200x0/filters:no_upscale():strip_icc()/two-white-cockatooes-643467100-db35b6ee10af4e579f7b77683d0b7fda.jpg" alt="Yellow Fischer Love Bird" />
       </div>
       <div class="carousel-item " interval={5}>
           <img class="deatailimg d-block "  src="https://s3.animalia.bio/animals/photos/full/1.25x1/sulphur-crested-cockatoo-perfect-profile.webp" alt="Yellow Fischer Love Bird" />
       </div>
      <div class="carousel-caption">
    <h5 className="fst-italic">SULPHUR - CRESTED COCKATOO</h5>
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
    <div className=" price flex pb-2 text-align-center fs-2">[1 pair]  SULPHUR - CRESTED COCKATOO<br></br><br></br><strike>₹180000.00</strike>  ₹175000.00 Only
    <Link to='/Bird2cart'><button class="buy">Buy Me</button></Link>
    </div>
    <h3><a className="fs-5 ">Breed Overview:</a></h3>
    <ul>
      <li>COMMON NAMES: Cacatua galerita</li><br></br>
      <li> SCIENTIFIC NAME: Cacatua galerita</li><br></br>
      <li> ADULT SIZE: 17.5 to 51.5 inches</li> <br></br>
      <li>LIFE EXPECTANCY: 20 to 40 years , potentially more with great care</li></ul><br></br>
        <div className="p-3 ps-0">
        <h3><a className="fs-5">Habitat</a></h3>
          <ul>
            <li>Cockatoos are members of the Cacatuidae family, which contains 21 different species.
Australia, Australasia, Indonesia, the Solomon Islands, and New Guinea are the native
ranges of the various cockatoo species.</li><br></br>
            </ul>
            <h3><a className="fs-5">Breeds</a></h3>
            <ul>
              <li>Triton cockatoo ( triton)</li><br></br>
            <li> Eleonora cockatoo  ( eleonora)</li><br></br>
            <li> Mathews cockatoo (fitzroyi)</li><br></br>
            <li>Greater sulphur-crested cockatoo (galerita)</li><br></br></ul>
          <h3><a className="fs-5">Identification</a></h3>
          <ul>
          <li>The Sulphur-crested Cockatoo is a large white parrot. It has a dark grey-black
bill, a distinctive sulphur-yellow crest and a yellow wash on the underside of
the wings. Sexes are similar, although the female can be separated at close
range by its red-brown eye (darker brown in the male). This is a noisy and
conspicuous cockatoo, both at rest and in flight. Young Sulphur-crested
Cockatoos resemble the adults.</li></ul><br></br>
<h3><a className="fs-5">Food</a></h3>
          <ul>
          <li class="food">The Sulphur-crested Cockatoo's normal diet consists of berries, seeds, nuts and roots. It also takes handouts from humans. Feeding normally takes place in small to large groups, with one or more members of the group watching for danger from a nearby perch. When not feeding, birds will bite off smaller branches and leaves from trees. These items are not eaten, however. The activity may help to keep the bill trimmed and from growing too large.</li></ul>
          </div>
          <Link to='/AllBirdDetails'> <button className='backButton justify-content-end align-items-end bg-success' variant="success" size="lg"> Back </button></Link>
    </div>

      </Container>
    );
}
export default SecondBird;