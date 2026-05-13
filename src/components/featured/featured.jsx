import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import './featured.css';

import img1 from "../../assets/featured/img1.jpg"; 
import img2 from "../../assets/featured/img2.jpg";
import img3 from "../../assets/featured/img3.jpg";
import img4 from "../../assets/featured/img4.jpg";
import img5 from "../../assets/featured/img5.jpg";

const Featured = () => {
  const items = [
    { id: 1, title: "Romantic Parisian Wedding Event", subtitle: "March 21st, 2024", class: "item-1", img: img1 },
    { id: 2, title: "Sofia & James's Portrait", subtitle: "Lake Como", class: "item-2", img: img2 },
    { id: 3, title: "Alex & Anna's Engagement Event", subtitle: "Lake Tahoe", class: "item-3", img: img3 },
    { id: 4, title: "John & Kate's Wedding Event", subtitle: "Sonoma Valley", class: "item-4", img: img4 },
    { id: 5, title: "Romantic Parisian Wedding Event", subtitle: "March 21st, 2024", class: "item-5", img: img5 }
  ];

  // Parent Container Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Each child will animate after 0.2s
      }
    }
  };

  // Individual Card Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="featured-section">
      <motion.div 
        className="portfolio-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span className="tagline">Portfolio</span>
        <h2>Our Recent Works</h2>
      </motion.div>

      <div className="bento-container">
        <motion.div 
          className="bento-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {items.map((item) => (
            <motion.div 
              key={item.id} 
              className={`bento-item ${item.class}`}
              variants={cardVariants}
              whileHover={{ scale: 0.98 }} // Subtle shrink on hover for premium feel
            >
              <div className="img-wrapper">
                <motion.img 
                  src={item.img} 
                  alt={item.title} 
                  whileHover={{ scale: 1.1 }} // Image zooms inside the wrapper
                  transition={{ duration: 0.6 }}
                />
              </div>
              
              <div className="overlay">
                <div className="text-content">
                  <motion.h4
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {item.title}
                  </motion.h4>
                  <p>{item.subtitle}</p>
                </div>
                <div className="arrow-btn">
                   <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Featured;