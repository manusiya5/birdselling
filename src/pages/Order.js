import React from "react";
import './Order.css'
import { Container,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
function Order(){

  const d=new Date();

    return(
        <div className="order">          
            <div className="orderDate ">
            <h2 className="orderedInformation text-dark text-center">Ordered Details:</h2><hr></hr>
                <h5 className=" pt-3 ">Order Date: {d.getDate()}/{d.getMonth()+1}/{d.getFullYear()}</h5>
                <h5>Bird Name:Yellow Fischer Love Bird</h5>
                <h5>Price:  ₹2900.00 Only</h5>
                <h4 className="text-success">Delivery Date: {d.getDate()+3}/{d.getMonth()+1}/{d.getFullYear()}</h4>
            </div>
         <h2 className="cash pt-5 ">Cash on Delivery Only...</h2>
         <div className="OrderButton">
        <Link to='/Customer'> <button className="orderButton">Place Order</button></Link>
         </div>
        </div>
    )
}
export default Order;