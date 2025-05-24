import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaWhatsapp, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import storyImg from '../assets/about1.avif';
import bgImage from '../assets/sub6.jpeg';
import bagImage from "../assets/sub4.avif";
import { BsPatchCheckFill } from "react-icons/bs";

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
        "Custom wrapping made with natural jute materials perfect for gifting.",
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

  const categories = [
    { name: 'Tote Bag', img: './image/bag1.png' },
    { name: 'Pouches', img: './image/bag2.png' },
    { name: 'Binders', img: './image/bag3.png' },
    { name: 'Green Gifting', img: './image/bag4.png' },
    { name: 'Gift Hamper', img: './image/bag5.png' },
    { name: 'Accessories', img: './image/bag6.png' },
    { name: 'Bottle Bags', img: './image/bag7.png' },
    { name: 'Corporate Bags', img: './image/bag8.png' }
  ];

  const companyimage = [
    '/jutebag1.jpeg',
    '/jutebag2.jpeg',
    '/jutebag3.jpeg',
    '/jutebag4.jpeg',
  ];

  const timelineSteps = [
    { year: "", title: "Cultivation 🌱", desc: "Jute seeds are sown during early summer in warm, humid climates. The plants grow rapidly, reaching over 10 feet tall within 4-5 months." },
    { year: "", title: "Harvesting 🌾", desc: "When mature, plants are cut close to the ground. The stalks are bundled and left in the field for a few days to dry slightly." },
    { year: "", title: "Retting 💧", desc: "Bundles are submerged in slow-moving water for 2-3 weeks. Microbial action breaks down the plant's soft tissues, separating the long jute fibers." },
    { year: "", title: "Stripping 👐", desc: "Farmers strip the softened stalks by hand to extract the fibers. The fibers are then washed and hung in the sun to dry for several days." },
    { year: "", title: "Processing 🧺", desc: "The dried fibers are sent to jute mills where they're sorted by quality, softened, carded, spun into threads, and woven into various products." },
    { year: "", title: "Product Manufacturing 🌍", desc: "The woven jute fabric is used to make eco-friendly items like tote bags, gift bags, pouches, binders, and decorative items - often handcrafted by artisans." },
    { year: "", title: "Sustainable Impact ♻️", desc: "Jute is 100% biodegradable, absorbs CO₂ faster than most trees, and requires minimal pesticides during cultivation." },
  ];

  const posts = [
    {
      id: 1,
      username: "goldenfiberbyrayna",
      image: "./images/jutebag1.jpeg",
      likes: "",
      comments: "",
      caption: "🙌Celebrate International Yoga Day with our jute yoga bags collection, available in diverse sizes and shapes. Choose sustainable fashion and contribute to a better future"
    },
    {
      id: 2,
      username: "goldenfiberbyrayna",
      image: "/images/jutebag2.jpeg",
      likes: "",
      comments: "",
      caption: "Introducing our red jute bags edition,available in all sizes and customizable too! Ditch plastic and choose sustainability with these eco-friendly, stylish bags. 🙌🎉🌞"
    },
    {
      id: 3,
      username: "goldenfiberbyrayna",
      image: "/images/jutebag3.jpeg",
      likes: "",
      comments: "",
      caption: "😎 Embrace sustainable fashion with our flashy green edition of jute bags, adorned with our gorgeous brand logo. Perfect for every occasion, these bags are the epitome of classy elegance",
    },
    {
      id: 4,
      username: "goldenfiberbyrayna",
      image: "/images/jutebag4.jpeg",
      likes: "",
      comments: "",
      caption: "Introducing our Heart Edition Jute Bags with adorable heart designs, perfect gifts for your loved ones. Available in various sizes and shapes like small bags and pouches. Choose sustainable products and make an eco-conscious move for a better future.",
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
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/product">PRODUCT</Link>
          <Link to="/sustainability">SUSTAINABILITY</Link>
          <Link to="/testimonials">TESTIMONIALS</Link>
          <Link to="/contact">CONTACT</Link>

        </nav>
        <Link to="/contact">
          <button className="enquire-btn20">ENQUIRE NOW</button>
        </Link>
      </div>


      <div className="header">
        <section
          className="hero-section6"
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        >
          <div className="hero-content6">

           <h1>
    <div >Sustainable Jute</div>
    <div>Products for a</div>
    <div>
      <span className="green">Greener </span>
      <span className="yellow">Future</span>
    </div>
  </h1>
            <p className="description1">
              Handcrafted eco-friendly jute products made by local artisans. <br />
              Each purchase supports sustainable practices and empowers communities.
            </p>
            <div className="hero-buttons6">
              <Link to="/product">
                <button className="primary-btn">Explore Products →</button>
              </Link>
              <Link to="/about">
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
          <p className="section-title20">Our Story</p>
          <h2>
            From Jewellery to Sustainable <br />
            Jute Solutions
          </h2>
          <p className="paragraph">
            A Golden Fiber by Rayna began with a simple idea: to create beautiful products that honor our planet. Our journey started in jewellery design, but evolved when we discovered the incredible potential of jute—a natural, renewable fiber that’s both versatile and eco-friendly.
          </p>
          <p className="paragraph">
            Today, we collaborate with local artisans to create handcrafted jute products that replace plastic alternatives in everyday life, while supporting sustainable livelihoods in our community.
          </p>
          <Link to="/about">
            <a href="#" className="learn-more">
              Learn more about our journey →
            </a>
          </Link>
        </div>
      </section>

<section className="categories-section">
      <h2 className="categories-title">Categories</h2>
      <div className="scroll-wrapper">
        <div className="categories-scroll">
          {[...categories, ...categories].map((item, index) => (
            <div className="category-item" key={index}>
              <div className="category-image">
                <img src={item.img} alt={item.name} />
                <div className="category-name">{item.name}</div>
              </div>
            </div>
          ))}
        </div>
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


      <section className="sustainability-container">
        <div className="sustainability-content">
          <p className="sustainability-subtitle">Our Commitment</p>
          <h2 className="sustainability-heading">Sustainability at Every Step</h2>
          <p className="sustainability-description">
            We believe in creating products that don't just look good, but do good too.
            Every jute item we craft is designed to replace single-use plastic and provide
            a sustainable alternative that's beautiful, functional, and kind to our planet.
          </p>

          <div className="sustainability-feature-grid">
            {features.map((feature, index) => (
              <div className="sustainability-feature-card" key={index}>
                <div className="sustainability-feature-icon">{feature.icon}</div>
                <div className="sustainability-feature-text">
                  <h4 className="sustainability-feature-title">{feature.title}</h4>
                  <p className="sustainability-feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
           <Link to="/sustainability">
          <div className="sustainability-link">
            Learn about our sustainability efforts →
          </div>
          </Link>
        </div>

        <div className="sustainability-image-container">
          <img src={bgImage} alt="Ocean background" className="sustainability-image" />
        </div>
      </section>

      <div className="timeline-container">
        <h2 className="timeline-heading">How Jute is Made: From Plant to Product</h2>
        <p className="timeline-subheading">
          Jute is an eco-friendly natural fiber known as the "A Golden Fiber" due to its color and value. Here's the journey it takes from plant to finished product.
        </p>
        <div className="timeline">
          {timelineSteps.map((step, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
              <div className="timeline-content">
                <div className="circle">{step.year}</div>
                <h3>{step.icon}</h3>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>



      <section className="impact-stats-section-new">
        <div className="impact-content-new">
          <h2 className="impact-heading-new">Our Impact So Far</h2>
          <p className="impact-subheading-new">
            Every jute product makes a difference. Here's the positive impact we've made together.
          </p>

          <div className="impact-stats-container-new">
            <div className="impact-box-new">
              <h3>10k+</h3>
              <p>Plastic Bags Replaced</p>
            </div>
            <div className="impact-box-new">
              <h3>15+</h3>
              <p>Local Artisans Employed</p>
            </div>
            <div className="impact-box-new">
              <h3>500kg</h3>
              <p>CO₂ Emissions Saved</p>
            </div>
            <div className="impact-box-new">
              <h3>25+</h3>
              <p>Eco-Business Partners</p>
            </div>
          </div>
        </div>
      </section>


      <div>
        <h1 className="socialh1"> Social Feed</h1>
        <div className="card-grid">
          {posts.map((post) => (
            <div key={post.id} className="card">
              <div className="card-header">
                <div className="user-info">
                  <img src="/images/profile.png" alt="avatar" className="avatar" />
                  <span className="username">{post.username}</span>
                </div>
                <a
                  href={`https://www.instagram.com/goldenfiberbyrayna?igsh=MXJva3Jzb3k3bzludw==${post.username}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="follow-btn">Follow</button>
                </a>
              </div>
              <img src={post.image} alt="post" className="card-img" />
              <div className="card-body">
                <div className="reactions">
                  <span>🤍 {post.likes}</span>
                  <span>💬 {post.comments}</span>
                </div>
                <p className="caption">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


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
       <Link to="/testimonials"> <p className="read-more">Read more testimonials →</p></Link>
      </div>

      <div className="sustainable-wrapper">
        <div className="sustainable-left">
          <h1 className="sustainable-heading">Ready to Make a Sustainable Choice?</h1>
          <p className="sustainable-subtext20">
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

        <div className="sustainable-right">
          <img src={bagImage} alt="Sustainable Product" className="sustainable-image" />
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
    </header>


  );
};

export default Header;
