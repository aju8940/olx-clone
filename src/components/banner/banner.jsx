/* eslint-disable no-unused-vars */
import React from 'react'
import './banner.css'
import Arrow from '../../assets/arrow'

function Banner() {
  return (
    <div className='container2 col-md-12'>
      <div className='nav-bar col-md-12 d-flex'>
        <div className='category d-flex'>
            <span>ALL CATEGORIES</span>
            <Arrow/>
        </div>
        <div className='list'>
            <span>Cars</span>
        </div>
        <div className='list'>
            <span>Motorcycles</span>
        </div>
        <div className='list'>
            <span>Mobile Phones</span>
        </div>
        <div className='list'>
            <span>For Sales: Houses and Apartments</span>
        </div>
        <div className='list'>
            <span>Scooters</span>
        </div>
        <div className='list'>
            <span>Commercials and other Vehicles</span>
        </div>
        <div className='list'>
            <span>For Rent: Houses and Apartments</span>
        </div>
      </div>
      <div className='banner-img'>
            
      </div>
    </div>
  )
}

export default Banner
