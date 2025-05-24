import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaWhatsapp, FaTwitter, FaYoutube } from 'react-icons/fa';
import herosImage from "../assets/contactimg.avif";

const Contact = () => {


  return (
    <header>
      <div className="top-bar">
        <div className="contact-info">
          <span>+91 98220 91610 / +968 91116 172</span>
          <span>goldenfiberbyrayna@gmail.com</span>
        </div>
        <div className="social-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaInstagram />
          <FaWhatsapp />
        </div>
      </div>

      <div className="main-nav">
        <div className="logo">
          <img src="/goldenfiberlogo.png" alt="goldenfiberlogo" />
        </div>
        <nav className="nav-links">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/product">PRODUCT</Link>
          <Link to="/sustainability">SUSTAINABILITY</Link>
          <Link to="/testimonials">TESTIMONIALS</Link>
          <Link to="/contact">CONTACT</Link>

        </nav>
        <Link to="/contact">
          <button className="enquire-btn">ENQUIRE NOW</button>
        </Link>
      </div>


      <section
        className="hero-section1"
        style={{ backgroundImage: `url(${herosImage})` }}
      >
        <div className="hero-content">
          <h1><span>CONTACT US</span></h1>

          <p className="contact1">We'd love to hear from you! Whether you have a question about our products, pricing, or need a custom quote —
            our team is here to help.</p>
          <p className="contact2">
            Reach out to us using the form below or call us directly. We usually respond within 24 hours.
          </p>
        </div>
      </section>

      <div className="contact-info-container">
        <div className="info-card">
          <div className="icon">📍</div>
          <h4>India Office </h4>
          <p>Vision International 9, Siddhivinayak Group,
            Golibar Maidan Chowk, MG Rd extn., Camp, Pune 411001,
            Maharashtra, India</p>
        </div>

        <div className="info-card">
          <div className="icon">🏭</div>
          <h4>Oman Office</h4>
          <p>2326, PC 112, Muscat, Sultanate of Oman</p>
        </div>

        <div className="info-card">
          <div className="icon">📞</div>
          <h4>Call Us</h4>
          <p>+91 9822091610<br />
            90% Call Response Rate</p>
        </div>

        <div className="info-card">
          <div className="icon">✉️</div>
          <h4>Email</h4>
          <p>goldenfiberbyrayna@gmail.com<br />
          </p>
        </div>
      </div>


      <div className="contact-wrapper">
        <div className="overlay"></div>
        <div className="contact-container">
          <div className="form-section">
            <h2>Send Us a Message</h2>
            <form className="contact-form">
              <div className="row">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email Address" />
              </div>
              <div className="row">
                <input type="text" placeholder="Address" />
                <input type="text" placeholder="Mobile Number" />
              </div>
              <div className="row">
                <input type="text" placeholder="Subject" />
              </div>
              <textarea placeholder="Message"></textarea>
              <button className="sendmsg-btn">SEND MESSAGE </button>
            </form>
          </div>


        </div>
      </div>

      <div className='contacth1p'>
        <h1>Visit Our Studio</h1>
        <p>Drop by our workshop to see our products in person and meet the team.</p>
        <div className="contact-container1">
          <div className="map-container1">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=18.534833,74.131444&z=15&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>



      <footer className="footer">
        <div className="footer-container">

          <div className="footer-col">
            <h3>A Golden Fiber by Rayna</h3>
            <p>
              Sustainable jute products handcrafted with care for the environment and your lifestyle.
            </p>
            <div className="social-icons50">
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
              <FaTwitter />
              <FaYoutube />
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <Link to="/"><li>Home</li></Link>
              <Link to="/about"><li>About Us</li></Link>
              <Link to="/product"><li>Our Products</li></Link>
              <Link to="/sustainability"><li>Sustainability</li></Link>
              <Link to="/contact"><li>Contact Us</li></Link>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li>FAQs</li>
              <li>Shipping Policy</li>
              <li>Return Policy</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <p>📞 +91 98220 91610</p>
            <p>✉️ goldenfiberbyrayna@gmail.com</p>
            <button className="whatsapp-btn">💬 Chat on WhatsApp</button>
          </div>

        </div>
        <div className="footer-bottom">
          <p>  © 2025 A Golden Fiber by Rayna. All rights reserved.</p>
          <p> Designed and Developed by DW Innovation</p>
        </div>
      </footer>
    </header>


  );
};

export default Contact;
