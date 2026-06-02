import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import "./Hero.css";

import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [hero1, hero2, hero3];

  /* Background Slider */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  /* Animations */

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.5,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 60,
      filter: "blur(10px)",
    },

    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",

      transition: {
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="hero" id="hero">
      {/* BACKGROUND */}

      <div className="hero-bg-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            className="hero-slide"
            style={{
              backgroundImage: `url(${heroImages[currentImage]})`,
            }}
            initial={{
              scale: 1.15,
              opacity: 0,
            }}
            animate={{
              scale: 1.05,
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.02,
            }}
            transition={{
              duration: 6,
              ease: "easeOut",
            }}
          />
        </AnimatePresence>

        <div className="hero-overlay" />
      </div>

      {/* CONTENT */}

      <div className="hero-content">
        {/* Luxury Glow */}

        <motion.div
          className="hero-glow"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="content-inner"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Subtitle */}

          <motion.span
            className="sub-title"
            variants={fadeUp}
          >
            LUXURY BRIDAL MAKEUP ARTIST
          </motion.span>

          {/* Heading */}

          <motion.h1
            className="main-heading"
            variants={fadeUp}
          >
            Timeless Bridal
            <br />

            <span className="italic-text">
              Beauty
            </span>{" "}
            Crafted With Elegance
          </motion.h1>

          {/* Description */}

          <motion.p
            className="hero-description"
            variants={fadeUp}
          >
            Creating flawless bridal transformations
            with luxury HD makeup, elegant styling,
            and a soft editorial touch for your
            unforgettable wedding moments.
          </motion.p>

          {/* Buttons */}

          <motion.div
            className="hero-btns"
            variants={fadeUp}
          >
            <motion.button
              whileHover={{
                y: -5,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="btn-primary"
            >
              Book Your Bridal Look
              <ArrowRight size={16} />
            </motion.button>

          <motion.button
  whileHover={{
    y: -3,
    opacity: 0.85,
  }}
  whileTap={{
    scale: 0.98,
  }}
  className="btn-secondary"
  onClick={() => {
    document
      .getElementById("portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
>
  <Sparkles size={14} />
  View Portfolio
</motion.button>
          </motion.div>

          {/* Stats */}

          <motion.div
            className="hero-stats"
            variants={fadeUp}
          >
            <div className="stat-box">
              <h3>500+</h3>
              <span>Happy Brides</span>
            </div>

            <div className="stat-box">
              <h3>4+</h3>
              <span>Years Experience</span>
            </div>

            <div className="stat-box">
              <h3>4.9★</h3>
              <span>Client Reviews</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}

      <div className="scroll-indicator">
        <motion.div
          className="mouse-line"
          animate={{
            y: [0, 20, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}