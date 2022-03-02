import React from "react";
import "../Footer/Footer.css";



function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Featured Services</h4>
            <ul>
              <li>
                <a href="/">Consultation</a>
              </li>
              <li>
                <a href="/">Pharmacy</a>
              </li>
              <li>
                <a href="/">Laboratory</a>
              </li>
              <li>
                <a href="/">Radiology</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Tenders</a>
              </li>
              <li>
                <a href="/">FAQs</a>
              </li>
              <li>
                <a href="/">Staff Email</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Go To</h4>
            <ul>
              <li>
                <a href="/">Doctors Portal</a>
              </li>
              <li>
                <a href="/">Staff Portal</a>
              </li>
              <li>
                <a href="/">Admin Portal</a>
              </li>
              <li>
                <a href="/">More Services</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <a href="/">Facebook</a>
              </li>
              <li>
                <a href="/">LinkedIn</a>
              </li>
              <li>
                <a href="/">Instagram</a>
              </li>
              <li>
                <a href="/">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright-row">
        <p className="col-copyright  ">
          {new Date().getFullYear()} | Akeo Hospital Management System | All
          rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;