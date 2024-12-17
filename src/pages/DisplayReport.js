import React from 'react'
import './Report.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
function DisplayReport() {
  return (
    <div className='report'>
        <h2 className='reportTitle p-3 text-center'>Report!</h2>
        <div className='dates d-flex '>
        <h2 > Starting Date : <b className='text-success'>28.12.2023</b></h2>
        <h2 className='ps-5'> Ending Date : <b className='text-success'>28.01.2023</b></h2>
        </div>
        <div className='detail'>
        <ul>
       <h3><li >This month mostly sold bird is <b className='text-success'>Yellow Fincher Bird</b></li></h3> 
       <h3><li>Mostly bought region is <b className='text-success'>TamilNadu</b></li></h3> 
        </ul>
        <ul>
        <h1 className='pt-4 pb-2 '><u>Sales Performence</u></h1>
        <h3><li>New customer registration: <b className='text-success'>109</b></li></h3>
        <h3><li>Customer rentention rate: <b className='text-success'>98.2%</b></li></h3>
        </ul>
        <ul>
        <h1 className='pt-4 pb-2 '><u>Customer Feedback</u></h1>
        <h3><li>Reviews rating:<b className='text-success'> 4.5</b></li></h3>
        <h3><li>Customer appriciate the<b className='text-success'> timely delivery of their orders</b></li></h3>
        </ul>
        <h1 className='thank'>Thank you!</h1>
        <Link to='/Contact'><Button className='contactbtn'>Contact Us</Button></Link>
        </div>
    </div> 
  )
}

export default DisplayReport; 