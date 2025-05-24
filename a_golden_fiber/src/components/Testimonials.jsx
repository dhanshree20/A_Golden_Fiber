import React from 'react';
import './Testimonials.css';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaWhatsapp, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useRef , useEffect} from 'react';

const Testimonials = () => {

  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'Sustainability Advocate',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      message: 'The quality of these jute products is exceptional! I love that I can reduce my plastic use while supporting artisans. A Golden Fiber has become my go-to for eco-friendly gifts.',
    },
    {
      name: 'Michael Chen',
      title: 'Business Owner',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      message: "We partnered with A Golden Fiber for our store's packaging needs and couldn't be happier. Our customers love the sustainable approach, and the customization options are perfect.",
    },
    {
      name: 'Emma Davis',
      title: 'Interior Designer',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      message: 'The jute planters and home decor items are not only eco-friendly but also beautifully made. They add such a warm, natural element to any space I design.',
    },
    {
      name: 'Robert Thompson',
      title: 'Event Planner',
      image: 'https://randomuser.me/api/portraits/men/23.jpg',
      message: "We used A Golden Fiber's custom jute gift bags for a corporate event, and they were a huge hit! Sustainable, beautiful, and perfectly aligned with our company’s green values.",
    },
    {
      name: 'Priya Sharma',
      title: 'Eco Boutique Owner',
      image: 'https://randomuser.me/api/portraits/women/12.jpg',
      message: "I've been carrying jute products from A Golden Fiber in my store for over a year now, and they consistently sell out. The quality and craftsmanship are unmatched.",
    },
    {
      name: 'David Wilson',
      title: 'Sustainable Living Blogger',
      image: 'https://randomuser.me/api/portraits/men/54.jpg',
      message: 'After reviewing dozens of eco-friendly brands, A Golden Fiber stands out for their authentic commitment to sustainability. Their jute totes have replaced all my plastic bags.',
    },
  ];
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const scrollAmount = 1;

    const interval = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollAmount;

        // Reset to start when scrolled to end
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
    }, 20); // Adjust speed here

    return () => clearInterval(interval);
  }, []);
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
          <Link to="/sustainability">SUSTAINABILITY</Link>
          <Link to="/testimonials">TESTIMONIALS</Link>
          <Link to="/contact">CONTACT</Link>

        </nav>
        <Link to="/contact">
          <button className="enquire-btn">ENQUIRE NOW</button>
        </Link>
      </div>

          <section className="testimonial-section">
      <h2 className="testimonial-title">What Our Customers Say</h2>
      <p className="testimonial-subtitle">
        Read reviews from individuals and businesses who've experienced the quality and sustainability of our jute products.
      </p>

      <div className="testimonial-carousel-wrapper">
        <div className="testimonial-carousel" ref={scrollRef}>
          {[...testimonials, ...testimonials].map((t, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-header">
                <img src={t.image} alt={t.name} className="testimonial-img" />
                <div>
                  <h3 className="testimonial-name">{t.name}</h3>
                  <p className="testimonial-role">{t.title}</p>
                </div>
              </div>
              <p className="testimonial-msg">“{t.message}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>

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
  <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About Us</Link></li>
  <li><Link to="/product">Our Products</Link></li>
  <li><Link to="/sustainability">Sustainability</Link></li>
  <li><Link to="/contact">Contact Us</Link></li>
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
  );
};

export default Testimonials;
