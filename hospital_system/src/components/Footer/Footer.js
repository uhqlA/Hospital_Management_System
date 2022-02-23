import React from 'react';
import './FooterStyle.css';  

function Footer() {
  return (
    <div>
    
            <div className="container">
                <div className="row">
                {}
                <div className="col">
                    <h4>Featured Services</h4>
                    <ul class="list">
                        <li>Consultation</li>
                        <li>Pharmacy</li>
                        <li>Laboratory</li>
                        <li>Radiology</li>
                    </ul>
                </div>
                {}
                <div className="col">
                    <h4>Quick Links</h4>
                    <ul class="list">
                        <li>Careers</li>
                        <li>Tenders</li>
                        <li>FAQs</li>
                        <li>Staff Email</li>
                    </ul>
                </div>
                {}
                <div className="col">
                    <h4>Contact Us</h4>
                    <ul class="list">
                        <li>Facebook</li>
                        <li>LinkedIn</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </div>
                </div>
                <div class="copyright-row">
                    <p className="col-copyright  ">
                        {new Date().getFullYear()} | Akeo Hospital Management System | All rights reserved
                    </p>
                </div>
        </div>   
    </div>            
        
        
  )
}

export default Footer;