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
    title: 'Laminated Jute Bag Multipurpose 4',
    category: 'Tote Bag',
    description: 'Reusable and biodegradable jute tote for everyday shopping.',
    badge: '100% Biodegradable',
    image: '/totebag1.webp'
  },
    {
    id: 2,
    title: 'Natural non laminated Jute flat bag with handles',
    category: 'Tote Bag',
    description: 'Reusable and biodegradable jute tote for everyday shopping.',
    badge: '100% Biodegradable',
    image: '/totebag2.webp'
  },
    {
    id: 3,
    title: 'Jute Wine Bag With Window',
    category: 'Tote Bag',
    description: 'Reusable and biodegradable jute tote for everyday shopping.',
    badge: '100% Biodegradable',
    image: '/totebag3.webp'
  },
    {
    id: 4,
    title: 'Laminated Jute Bag Multipurpose 1',
    category: 'Tote Bag',
    description: 'Reusable and biodegradable jute tote for everyday shopping.',
    badge: '100% Biodegradable',
    image: '/totebag4.webp'
  },
    {
    id: 5,
    title: 'Laminated Jute Bag Multipurpose 2',
    category: 'Tote Bag',
    description: 'Reusable and biodegradable jute tote for everyday shopping.',
    badge: '100% Biodegradable',
    image: '/totebag5.webp'
  },
    {
    id: 6,
    title: 'Laminated Jute Multipurpose Small Tote Bag',
    category: 'Tote Bag',
    description: 'Reusable and biodegradable jute tote for everyday shopping.',
    badge: '100% Biodegradable',
    image: '/totebag6.webp'
  },
  {
    id: 7,
    title: 'Stylish Jute Pouch',
    category: 'Pouches',
    description: 'Compact pouch perfect for organizing daily essentials.',
    badge: 'Handmade',
    image: '/pouches1.jpg'
  },
    {
    id: 8,
    title: 'Natural Color Yoga Print Jute pouch',
    category: 'Pouches',
    description: 'Compact pouch perfect for organizing daily essentials.',
    badge: 'Handmade',
    image: '/pouches2.jpg'
  },
    {
    id: 9,
    title: 'Multi color Jute pouch',
    category: 'Pouches',
    description: 'Compact pouch perfect for organizing daily essentials.',
    badge: 'Handmade',
    image: '/pouches3.jpg'
  },
    {
    id: 10,
    title: 'Two Color (Natural Brown/ Orange) Jute pouch',
    category: 'Pouches',
    description: 'Compact pouch perfect for organizing daily essentials.',
    badge: 'Handmade',
    image: '/pouches4.jpg'
  },
    {
    id: 11,
    title: 'Multi Color Jute Envelope',
    category: 'Pouches',
    description: 'Compact pouch perfect for organizing daily essentials.',
    badge: 'Handmade',
    image: '/pouches5.jpg'
  },
    {
    id: 12,
    title: 'Two color Multi shaded Jute pouch',
    category: 'Pouches',
    description: 'Compact pouch perfect for organizing daily essentials.',
    badge: 'Handmade',
    image: '/pouches6.jpg'
  },
{
    id: 13,
    title: 'Ivory Color Jute pouch with embroidery lace',
    category: 'Pouches',
    description: 'Compact pouch perfect for organizing daily essentials.',
    badge: 'Handmade',
    image: '/pouches7.jpg'
  },
  {
    id: 14,
    title: 'Eco Jute Binder',
    category: 'Binders',
    description: 'Perfect eco-alternative for office and school use.',
    badge: 'Recyclable',
    image: '/binders1.png'
  },
  {
    id: 15,
    title: 'Green Gifting Box',
    category: 'Green Gifting',
    description: 'Natural jute gift box perfect for conscious gifting.',
    badge: 'Plastic-Free',
    image: '/greengifting1.png'
  },
  {
    id: 16,
    title: 'Pink Color Organza Gift Hamper Bag',
    category: 'Gift Hamper',
    description: 'Luxury hamper made of jute with artisanal items.',
    badge: 'Curated',
    image: '/gifthamper1.jpeg'
  },
    {
    id: 17,
    title: 'Green Color Organza Gift Hamper Bag',
    category: 'Gift Hamper',
    description: 'Luxury hamper made of jute with artisanal items.',
    badge: 'Curated',
    image: '/gifthamper2.jpg'
  },
    {
    id: 18,
    title: 'White Color Organza Gift Hamper Bag',
    category: 'Gift Hamper',
    description: 'Luxury hamper made of jute with artisanal items.',
    badge: 'Curated',
    image: '/gifthamper3.jpg'
  },
    {
    id: 19,
    title: 'Natural Color Organza Gift Hamper Bag',
    category: 'Gift Hamper',
    description: 'Luxury hamper made of jute with artisanal items.',
    badge: 'Curated',
    image: '/gifthamper4.jpg'
  },
    {
    id: 20,
    title: 'Natural and Ivory Color Organza Gift Hamper Bag',
    category: 'Gift Hamper',
    description: 'Luxury hamper made of jute with artisanal items.',
    badge: 'Curated',
    image: '/gifthamper5.jpg'
  },
    {
    id: 21,
    title: 'Pink Color Organza Gift Hamper Bag',
    category: 'Gift Hamper',
    description: 'Luxury hamper made of jute with artisanal items.',
    badge: 'Curated',
    image: '/gifthamper6.png'
  },
    {
    id: 22,
    title: 'Gold Event bag',
    category: 'Gift Hamper',
    description: 'Luxury hamper made of jute with artisanal items.',
    badge: 'Curated',
    image: '/gifthamper7.png'
  },
  {
    id: 23,
    title: 'Flower Vase',
    category: 'Accessories',
    description: 'Handcrafted holder for your indoor plants.',
    badge: 'Handcrafted',
    image: '/accessories1.jpeg'
  },
    {
    id: 24,
    title: 'Pen holder',
    category: 'Accessories',
    description: 'Handcrafted holder for your indoor plants.',
    badge: 'Handcrafted',
    image: '/accessories2.jpeg'
  },
    {
    id: 25,
    title: 'Table mats and Tea coasters',
    category: 'Accessories',
    description: 'Handcrafted holder for your indoor plants.',
    badge: 'Handcrafted',
    image: '/accessories3.jpeg'
  },
    {
    id: 26,
    title: 'Natural Color Basket Jute Accessories',
    category: 'Accessories',
    description: 'Handcrafted holder for your indoor plants.',
    badge: 'Handcrafted',
    image: '/accessories4.jpeg'
  },
    {
    id: 27,
    title: 'Natural Color hanging Accessories',
    category: 'Accessories',
    description: 'Handcrafted holder for your indoor plants.',
    badge: 'Handcrafted',
    image: '/accessories5.jpeg'
  },
    {
    id: 28,
    title: 'Natural and Black Color Jute disposable Slipper',
    category: 'Accessories',
    description: 'Handcrafted holder for your indoor plants.',
    badge: 'Handcrafted',
    image: '/accessories6.jpeg'
  },
  {
    id: 29,
    title: 'Multi Color Bottle bag',
    category: 'Bottle Bags',
    description: 'Reusable bag to carry your bottles in eco-style.',
    badge: 'Reusable',
    image: '/bottlebag1.jpg'
  },
    {
    id: 30,
    title: 'Pink Color Jute Bottle bag, Multipurpose bag, Pouch (Set of 3)',
    category: 'Bottle Bags',
    description: 'Reusable bag to carry your bottles in eco-style.',
    badge: 'Reusable',
    image: '/bottlebag2.jpeg'
  },
    {
    id: 31,
    title: 'Printed Purple Color Jute Bottle bag, Multipurpose bag, Pouch (Set of 3)',
    category: 'Bottle Bags',
    description: 'Reusable bag to carry your bottles in eco-style.',
    badge: 'Reusable',
    image: '/bottlebag3.jpeg'
  },
    {
    id: 32,
    title: 'Jute Wine Bag With Window',
    category: 'Bottle Bags',
    description: 'Reusable bag to carry your bottles in eco-style.',
    badge: 'Reusable',
    image: '/bottlebag4.png'
  },
  {
    id: 33,
    title: 'Ivory Color Corporate bag',
    category: 'Corporate Bags',
    description: 'Custom branded jute bag perfect for corporate gifting.',
    badge: 'Customizable',
    image: '/corporatebag1.png'
  },
    {
    id: 34,
    title: 'Ivory Color Corporate bag',
    category: 'Corporate Bags',
    description: 'Custom branded jute bag perfect for corporate gifting.',
    badge: 'Customizable',
    image: '/corporatebag2.jpg'
  },
    {
    id: 35,
    title: 'Ivory Color Corporate bag',
    category: 'Corporate Bags',
    description: 'Custom branded jute bag perfect for corporate gifting.',
    badge: 'Customizable',
    image: '/corporatebag3.jpeg'
  },
    {
    id: 36,
    title: 'Ivory Color Corporate bag',
    category: 'Corporate Bags',
    description: 'Custom branded jute bag perfect for corporate gifting.',
    badge: 'Customizable',
    image: '/corporatebag4.png'
  },
    {
    id: 37,
    title: 'Natural Color Corporate bag',
    category: 'Corporate Bags',
    description: 'Custom branded jute bag perfect for corporate gifting.',
    badge: 'Customizable',
    image: '/corporatebag5.jpeg'
  },
    {
    id: 38,
    title: 'Ivory and Black color with Organza Corporate Jute bag',
    category: 'Corporate Bags',
    description: 'Custom branded jute bag perfect for corporate gifting.',
    badge: 'Customizable',
    image: '/corporatebag6.jpeg'
  },
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
       <p>  © 2025 A Golden Fiber by Rayna. All rights reserved.</p>
      <p> Designed and Developed by DW Innovation</p>
      </div>
    </footer>
    </div>
  );
};

export default Product;
