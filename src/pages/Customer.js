import React from "react";
import { Link } from "react-router-dom";
import { Container,Row,Col } from "react-bootstrap";
 import './Customer.css'
function Customer()
{
    return(
      <div>
        <h1 className="detailHeading text-center p-3 ">Enter the Details!!</h1>
      <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputName">Name</label>
          <input type="name" class="form-control" id="inputName" placeholder="name"/>
        </div>
        <div class="form-group col-md-6">
          <label for="inputPhone">Mobile</label>
          <input type="mobile" class="form-control" id="inputPhone" placeholder="mobile"/>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Password</label>
          <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
        </div>
      </div>
      <div class="form-group">
        <label for="inputAddress">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="Street"/>
      </div>
      <div class="form-group">
        <label for="inputAddress2">Address 2</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment or floor"/>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputCity">City</label>
          <input type="text" class="form-control" id="inputCity"/>
        </div>
        <div class="form-group col-md-4">
          <label for="inputState">State</label>
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <label for="inputPin">Pin code</label>
          <input type="text" class="form-control" id="inputPin"/>
        </div>
      </div>
      <Link to='/Success'><button type="customerDetail" class="btn btn-primary">Submit</button></Link>
    </form>
    </div>
    )
}
export default Customer; 