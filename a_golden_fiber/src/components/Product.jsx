import React from 'react';
import './Product.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaWhatsapp, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Product = () => {

const categories = [
  'Tote Bag',
  'Pouches',
  'Binders',
  'Green Gifting',
  'Gift Hamper',
  'Accessories',
  'Bottle Bags',
  'Corporate Bags'
];

const products = [
  {
    id: 1,
    title: 'Eco-Friendly Jute Tote Bag',
    category: 'Tote Bag',
    description: 'Reusable and biodegradable jute tote for everyday shopping.',
    badge: '100% Biodegradable',
    image: '/tote-bag.jpg'
  },
  {
    id: 2,
    title: 'Stylish Jute Pouch',
    category: 'Pouches',
    description: 'Compact pouch perfect for organizing daily essentials.',
    badge: 'Handmade',
    image: '/pouch.jpg'
  },
  {
    id: 3,
    title: 'Eco Jute Binder',
    category: 'Binders',
    description: 'Perfect eco-alternative for office and school use.',
    badge: 'Recyclable',
    image: '/binder.jpg'
  },
  {
    id: 4,
    title: 'Green Gifting Box',
    category: 'Green Gifting',
    description: 'Natural jute gift box perfect for conscious gifting.',
    badge: 'Plastic-Free',
    image: '/green-gift.jpg'
  },
  {
    id: 5,
    title: 'Premium Gift Hamper',
    category: 'Gift Hamper',
    description: 'Luxury hamper made of jute with artisanal items.',
    badge: 'Curated',
    image: '/gift-hamper.jpg'
  },
  {
    id: 6,
    title: 'Jute Plant Holder',
    category: 'Accessories',
    description: 'Handcrafted holder for your indoor plants.',
    badge: 'Handcrafted',
    image: '/plant-holder.jpg'
  },
  {
    id: 7,
    title: 'Jute Bottle Bag',
    category: 'Bottle Bags',
    description: 'Reusable bag to carry your bottles in eco-style.',
    badge: 'Reusable',
    image: '/bottle-bag.jpg'
  },
  {
    id: 8,
    title: 'Corporate Jute Kit',
    category: 'Corporate Bags',
    description: 'Custom branded jute bag perfect for corporate gifting.',
    badge: 'Customizable',
    image: '/corporate-bag.jpg'
  }
];


  const [activeCategory, setActiveCategory] = useState('Tote Bag');

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

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
          <Link to = "/">HOME</Link>
          <Link to = "/about">ABOUT</Link>
          <Link to = "/product">PRODUCT</Link>
          <Link to = "/sustainability">SUSTAINABILITY</Link>
          <Link to = "/testimonials">TESTIMONIALS</Link>
          <Link to = "/contact">CONTACT</Link>

        </nav>
        <Link to= "/contact">
        <button className="enquire-btn">ENQUIRE NOW</button>
        </Link>
      </div>
    <div className="jute-header">
      <h1>Our Jute Products</h1>
      <p>Explore our range of sustainable alternatives to everyday items.</p>
    </div>


    <div className="gallery-container">
      <div className="filter-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="image-wrapper">
                <img src={product.image} alt={product.title} />
                <span className="badge">{product.badge}</span>
              </div>
              <div className="card-content">
                <small>{product.category.toUpperCase()}</small>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <a href="#">View Details</a>
              </div>
            </div>
          ))
        ) : (
          <p>No products available in this category.</p>
        )}
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
        © 2025 A Golden Fiber by Rayna. All rights reserved.
      </div>
    </footer>
    </div>
  );
};

export default Product;
