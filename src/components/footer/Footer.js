import React from 'react'
import './Footer.css'


function Footer() {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="left">
                    <a href="/"><h3>Travel</h3></a>
            </div>
            <div className="right">
                <ul>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Terms</li>
                    <li>Policy</li>
                    <li>Privacy</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer