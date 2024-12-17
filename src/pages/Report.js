import React from 'react'
import './Report.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
function Report() {
  return (
    <div className='report'>
        <h2 className='reportTitle p-5 text-center'>Report me!</h2>
       
          <div className='reportdates d-flex'>
        <h3 className='p-3'>Start Date: <input  type="text"></input></h3>
        <h3 className='p-3'>End Date:<input  type="text"></input></h3>
        </div>
     <Link to='/DisplayReport'><Button  className="ReportButton fs-5" variant="success">Click me!!</Button></Link>
      </div>
   
  )
}

export default Report;
