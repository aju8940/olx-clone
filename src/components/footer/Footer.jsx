/* eslint-disable no-unused-vars */
import React from 'react'
import './Footer.css'
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <div className='main-footer '>
      <div className='footer row'>
        <div className='col-md-12 d-flex '>
            <div className=' left-section col-md-9'>
                <div className='inner-div d-flex'>
                    <div className='mini-section col-md-3'>
                        <h6>POPULAR LOCATIONS</h6>
                        <p>Kolkata</p>
                        <p>Pune</p>
                        <p>Mumbai</p>
                        <p>Banglore</p>
                    </div>
                    <div className='mini-section col-md-3'>
                        <h6>TRENDING LOCATIONS</h6>
                        <p>Coorg</p>
                        <p>Nashik</p>
                        <p>Hyderabad</p>
                        <p>Dandeli</p>
                    </div>
                    <div className='mini-section col-md-3'>
                        <h6>ABOUT US</h6>
                        <p>About</p>
                        <p>Career</p>
                        <p>Contact</p>
                        <p>Olx people</p>
                    </div>
                    <div className='mini-section col-md-3'>
                        <h6>OLX</h6>
                        <p>Help</p>
                        <p>Sitemap</p>
                        <p>Blog</p>
                        <p>Policy</p>
                    </div>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='full-content'>
                    <div className='top-content'>
                    <h6>FOLLOW US</h6>
                    <SocialIcon url='https://twitter.com/jaketrent' style={{ height: '30px', width: '30px',margin:'5px' }} />
                    <SocialIcon url='https://www.facebook.com/jaketrent/' style={{ height: '30px', width: '30px',margin:'5px' }} />
                    <SocialIcon url='https://www.instagram.com/jaketrent/' style={{ height: '30px', width: '30px' ,margin:'5px'}} />
                    </div>
                    <div className='bottom-content d-flex'>
                    <img className='btm-icon' src="https://statics.olx.in/external/base/img/appstore_2x.webp" alt="" />
                    <img className='btm-icon' src="https://statics.olx.in/external/base/img/playstore_2x.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className='full-width'>
        <div className='copy-right container d-flex'>
            <div>
                <p>Other Countries</p>
                <p>Indonesia - Pakistan - South Africa</p>
            </div>
            <div>
                <p>All rights Reseved</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
