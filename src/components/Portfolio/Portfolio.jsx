import "./Portfolio.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const portfolioData = {
  images: [
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200",
  ],

  reels: [
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200",
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?q=80&w=1200",
    "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200",
    "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1200",
  ],

  beforeAfter: [
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200",
    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200",
    "https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&w=1200",
    "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1200",
  ],
};

function Portfolio() {
  const [activeTab, setActiveTab] = useState("images");

  return (
    <section className="portfolio-section" id="portfolio">
      {/* TITLE */}
      <motion.h2
        className="portfolio-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Portfolio
      </motion.h2>

      {/* DESCRIPTION */}
      <motion.p
        className="portfolio-description"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Discover the magic of transformation with
        <span> makeup artist Richa Bhatia.</span>
        Browse her portfolio of stunning bridal,
        party, and event makeup looks crafted with
        precision, creativity, and passion.
      </motion.p>

      {/* TABS */}
      <div className="portfolio-tabs">
        <button
          className={activeTab === "images" ? "active-tab" : ""}
          onClick={() => setActiveTab("images")}
        >
          Images
        </button>

        <button
          className={activeTab === "reels" ? "active-tab" : ""}
          onClick={() => setActiveTab("reels")}
        >
          Reels
        </button>

        <button
          className={activeTab === "beforeAfter" ? "active-tab" : ""}
          onClick={() => setActiveTab("beforeAfter")}
        >
          Before-After
        </button>
      </div>

      {/* GRID */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="portfolio-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {portfolioData[activeTab].map((image, index) => (
            <motion.div
              className="portfolio-card"
              key={index}
              whileHover={{
                y: -8,
              }}
            >
              <img src={image} alt="" />

              <div className="portfolio-overlay">
                <span>Luxury Beauty</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default Portfolio;