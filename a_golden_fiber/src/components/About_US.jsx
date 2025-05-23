import React from "react";
import './AboutUs.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaWhatsapp, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About_US = () => {
  const values = [
    {
      icon: '/icons/sustainability.png',
      title: 'Sustainability',
      description:
        'We prioritize environmental responsibility in every decision we make, from material sourcing to production methods.',
    },
    {
      icon: '/icons/craftsmanship.png',
      title: 'Craftsmanship',
      description:
        'We honor traditional techniques while embracing innovation to create products that are both beautiful and functional.',
    },
    {
      icon: '/icons/community.png',
      title: 'Community Impact',
      description:
        'We create meaningful opportunities for artisans and educate consumers about the importance of sustainable choices.',
    },
  ];
  return (
    <div>
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
          <Link to="/Sustainability">SUSTAINABILITY</Link>
          <Link to="/testimonials">TESTIMONIALS</Link>
          <Link to="/contact">CONTACT</Link>

        </nav>
        <Link to="/contact">
          <button className="enquire-btn">ENQUIRE NOW</button>
        </Link>
      </div>


      <section className="about-section">
        <div className="content">
          <p className="subtitle">Our Story</p>
          <h2 className="title">From Passion to Purpose</h2>
          <p className="description">
            Discover how A Golden Fiber transformed from a jewelry business into a
            champion for sustainable jute alternatives.
          </p>
        </div>
      </section>


      <section className="journey-section">
        <div className="journey-container">
          <div className="text-content">
            <h2>The Journey Behind A Golden Fiber</h2>
            <p>
              A Golden Fiber began with a simple realization: the jewelry industry, like many others, contributed significantly to plastic waste through its packaging and presentation materials.
            </p>
            <p>
              What started as a search for better packaging for our own jewelry line soon evolved into a dedicated mission to provide eco-friendly alternatives across industries. We discovered jute—a remarkable natural fiber that's renewable, biodegradable, and incredibly versatile.
            </p>
            <p>
              Today, our team works closely with skilled artisans to transform this golden fiber into beautiful, functional products that help individuals and businesses reduce their environmental footprint without sacrificing quality or aesthetics.
            </p>
          </div>
          <div className="image-content">
            <img src="/images/teammetting.avif" alt="Team meeting" />
          </div>
        </div>
      </section>


      <section className="mission-section">
        <h2 className="mission-title">Our Mission & Values</h2>
        <p className="mission-subtitle">
          At the heart of everything we do is our commitment to creating a more sustainable future.
        </p>
        <div className="card-container">
          {values.map((item, index) => (
            <div className="value-card" key={index}>
              <div className="icon-circle">
                <img src={item.icon} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="founder-section">
        <div className="founder-card">
          <div className="founder-image">
            <img src="/images/founderimage.jpeg" alt="Founder" />
          </div>
          <div className="founder-text">
            <p className="founder-label">Founder's Message</p>
            <h2 className="founder-name">Runal</h2>
            <p className="founder-quote">
              <em>
                "I believe that beautiful things shouldn't come at the expense of our planet. Every jute product we create
                represents my commitment to merging aesthetics with ethics. By choosing natural materials and traditional
                craftsmanship, we’re not just making products—we’re making a difference."
              </em>
            </p>
            <p className="founder-description">
              With a background in design and a passion for sustainability, Rayna leads our team in creating thoughtful jute
              solutions that honor both nature and tradition.
            </p>
          </div>
        </div>
      </section>


      <div className="sustainable-container">
        <h1 className="sustainable-heading">Join Our Sustainable Journey</h1>
        <p className="sustainable-subtext">
          Discover our handcrafted jute products or connect with us about custom solutions for your home or business.
        </p>
        <div className="sustainable-buttons30">
          <Link to="/product">
            <button className="browse-btn">Explore Products</button>
          </Link>
          <Link to="/contact">
            <button className="contact-btn">Get in Touch</button>
          </Link>
        </div>
      </div>



      <footer className="footer">
        <div className="footer-container">

          <div className="footer-col">
            <h3>A Golden Fiber by Rayna</h3>
            <p>
              Sustainable jute products handcrafted with care for the environment and your lifestyle.
            </p>
            <div className="social-icons">
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
    </div>
  )
}

export default About_US;