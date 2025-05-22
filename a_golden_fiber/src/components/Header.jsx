import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaWhatsapp, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import storyImg from '../assets/about1.avif';
import bgImage from '../assets/sub6.jpeg';

const Header = () => {


const images = [
  "/images/image1.avif",
  "/images/image2.avif",
  "/images/image5.avif",
  "/images/image6.avif",
];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: "♻️",
      title: "Biodegradable",
      description: "100% natural materials that return to the earth",
    },
    {
      icon: "🌿",
      title: "Low Carbon",
      description: "Minimized environmental impact",
    },
    {
      icon: "🧑‍🌾",
      title: "Fair Trade",
      description: "Supporting local artisans",
    },
    {
      icon: "🚫🧴",
      title: "Plastic-Free",
      description: "Zero plastic in products & packaging",
    },
  ];

const testimonials = [
  {
    name: "Sarah Johnson",
    title1: "Sustainability Advocate",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    quote:
      "The quality of these jute products is exceptional! I love that I can reduce my plastic use while supporting artisans. A Golden Fiber has become my go-to for eco-friendly gifts.",
  },
  {
    name: "Michael Chen",
    title1: "Business Owner",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    quote:
      "We partnered with A Golden Fiber for our store's packaging needs and couldn't be happier. Our customers love the sustainable approach, and the customization options are perfect.",
  },
  {
    name: "Emma Davis",
    title1: "Interior Designer",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    quote:
      "The jute planters and home decor items are not only eco-friendly but also beautifully made. They add such a warm, natural element to any space I design.",
  },
];

const products = [
  {
    category: "BAGS",
    title: "Eco-Friendly Jute Tote Bag",
    description:
      "Sturdy, reusable shopping bag made from 100% biodegradable jute fiber.",
    image:
      "/images/jute1.avif",
    label: "100% Biodegradable",
  },
  {
    category: "PACKAGING",
    title: "Jute Gift Packaging Set",
    description:
      "Custom gift wrapping made with natural jute materials, perfect for eco-conscious gifting.",
    image:
      "/images/jute3.avif",
    label: "Plastic-free",
  },
  {
    category: "BAGS",
    title: "Eco-Friendly Jute Tote Bag",
    description:
      "Sturdy, reusable shopping bag made from 100% biodegradable jute fiber.",
    image:
      "/images/jute2.avif",
    label: "Handcrafted",
  },
    {
    category: "HOME DECOR",
    title: "Decorative Jute Plant Holders",
    description:
      "Handcrafted jute plant pots that add a natural touch to your indoor garden.",
    image:
      "/images/jute4.avif",
    label: "Handcrafted",
  },
];


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
      

      <div className="header">
    <section
      className="hero-section6"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
    <div className="hero-content6">
       
        <h1>
          Sustainable Jute <br />
          Products for a <span className="green">Greener</span>{' '}
          <span className="yellow">Future</span>
        </h1>
        <p className="description1">
          Handcrafted eco-friendly jute products made by local artisans. <br />
          Each purchase supports sustainable practices and empowers communities.
        </p>
        <div className="hero-buttons6">
          <Link to = "/product">
          <button className="primary-btn">Explore Products →</button>
          </Link>
          <Link to = "/product">
          <button className="secondary-btn">Our Eco Journey</button>
          </Link>
        </div>
      </div>
      
    </section>
    </div>


<section className="our-story">
      <div className="image-container">
        <img src={storyImg} alt="Our Story" />
      </div>
      <div className="text-container">
        <p className="section-title">Our Story</p>
        <h2>
          From Jewelry to Sustainable <br />
          Jute Solutions
        </h2>
        <p className="paragraph">
          A Golden Fiber by Rayna began with a simple idea: to create beautiful products that honor our planet. Our journey started in jewelry design, but evolved when we discovered the incredible potential of jute—a natural, renewable fiber that’s both versatile and eco-friendly.
        </p>
        <p className="paragraph">
          Today, we collaborate with local artisans to create handcrafted jute products that replace plastic alternatives in everyday life, while supporting sustainable livelihoods in our community.
        </p>
        <Link to= "/about">
        <a href="#" className="learn-more">
          Learn more about our journey →
        </a>
        </Link>
      </div>
    </section>

        <div className="products-section">
      <p className="section-label">Our Products</p>
      <h2 className="section-title">Sustainable Jute Essentials</h2>
      <p className="section-description">
        Explore our range of eco-friendly jute products, handcrafted with care for both
        style and sustainability.
      </p>
      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-image-wrapper">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <span className="product-label">{product.label}</span>
            </div>
            <div className="product-info">
              <p className="product-category">{product.category}</p>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
             <Link to="/product"> <p className="product-link">View Details →</p> </Link>
            </div>
          </div>
        ))}
      </div>
       <Link to="/product">
          <button className="learn-btn1">View More Details</button>
        </Link>
    </div>
    

    <section className="sustainability-section">
      <div className="sustainability-left">
        <p className="section-subtitle">Our Commitment</p>
        <h2 className="section-title">Sustainability at Every Step</h2>
        <p className="section-description">
          We believe in creating products that don't just look good, but do good too.
          Every jute item we craft is designed to replace single-use plastic and provide
          a sustainable alternative that's beautiful, functional, and kind to our planet.
        </p>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="icon">{feature.icon}</div>
              <div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <a href="#" className="learn-more">
          Learn about our sustainability efforts →
        </a>
      </div>
      <div className="sustainability-right">
        <img src={bgImage} alt="Ocean background" />
      </div>
    </section>


<div className="testimonials-section">
      <p className="section-label">Testimonials</p>
      <h2 className="section-title">What Our Customers Say</h2>
      <p className="section-description">
        Don’t just take our word for it—hear from the people who have experienced the
        quality and impact of our jute products.
      </p>
      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-header">
              <img src={t.image} alt={t.name} className="avatar" />
              <div>
                <p className="name">{t.name}</p>
                <p className="title1">{t.title}</p>
              </div>
            </div>
            <p className="quote">“{t.quote}”</p>
          </div>
        ))}
      </div>
      <p className="read-more">Read more testimonials →</p>
    </div>

    <div className="sustainable-container">
      <h1 className="sustainable-heading">Ready to Make a Sustainable Choice?</h1>
      <p className="sustainable-subtext">
        Join us in reducing plastic waste and supporting eco-friendly practices.
        Explore our jute products or reach out for custom orders.
      </p>
      <div className="sustainable-buttons">
        <Link to="/product">
        <button className="browse-btn">Browse Products</button>
        </Link>
        <Link to="/contact">
        <button className="contact-btn">Contact Us</button>
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
            <li>Home</li>
            <li>About Us</li>
            <li>Our Products</li>
            <li>Sustainability</li>
            <li>Contact Us</li>
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
    </header>

    
  );
};

export default Header;
