

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

import "./Hero.css";

import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";

export default function Hero() {

  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [
    hero1,
    hero2,
    hero3
  ];

  /* =========================================
     PREMIUM CINEMATIC SLIDER
  ========================================= */

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage((prev) =>
        prev === heroImages.length - 1
          ? 0
          : prev + 1
      );

    }, 6500);

    return () => clearInterval(interval);

  }, [heroImages.length]);

  /* =========================================
     STAGGER ANIMATION
  ========================================= */

  const container = {

    hidden: {},

    show: {

      transition: {

        staggerChildren: 0.18,
        delayChildren: 0.3

      }

    }

  };

  const fadeUp = {

    hidden: {

      opacity: 0,
      y: 40

    },

    show: {

      opacity: 1,
      y: 0,

      transition: {

        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]

      }

    }

  };

  const titleReveal = {

    hidden: {

      opacity: 0,
      y: 120

    },

    show: {

      opacity: 1,
      y: 0,

      transition: {

        duration: 1.5,
        ease: [0.16, 1, 0.3, 1]

      }

    }

  };

  return (

    <section className="hero" id="hero">

      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="hero-bg-container">

        <AnimatePresence mode="wait">

          <motion.div

            key={currentImage}

            className="hero-slide"

            style={{
              backgroundImage:
              `url(${heroImages[currentImage]})`
            }}

            initial={{
              scale: 1.08,
              opacity: 0
            }}

            animate={{
              scale: 1,
              opacity: 1
            }}

            exit={{
              opacity: 0
            }}

            transition={{
              duration: 2,
              ease: [0.16, 1, 0.3, 1]
            }}

          />

        </AnimatePresence>

        <div className="hero-overlay"></div>

      </div>

      {/* =========================================
          CONTENT
      ========================================= */}

      <div className="hero-content">

        <motion.div

          className="content-inner"

          variants={container}

          initial="hidden"

          animate="show"

        >

          {/* SUB TITLE */}

          <motion.span

            className="sub-title"

            variants={fadeUp}

          >

            HANDCRAFTING TIMELESS LEGACIES

          </motion.span>

          {/* MAIN TITLE */}

          <h1 className="main-heading">

            <motion.div
              className="title-line"
              variants={titleReveal}
            >

              Capturing Your

            </motion.div>

            <motion.div
              className="title-line"
              variants={titleReveal}
            >

              <span className="italic-text">
                Moments
              </span>

              {" "}With Emotion & Light

            </motion.div>

          </h1>

          {/* DESCRIPTION */}

          <motion.p

            className="hero-description"

            variants={fadeUp}

          >

            Luxury wedding photography &
            cinematic films documenting
            emotions, traditions, and timeless love stories.

          </motion.p>

          {/* BUTTONS */}

          <motion.div

            className="hero-btns"

            variants={fadeUp}

          >

            {/* PRIMARY */}

            <motion.button

              whileHover={{
                y: -3
              }}

              whileTap={{
                scale: 0.97
              }}

              className="btn-primary"

            >

              Explore Portfolio

              <ArrowRight size={15} />

            </motion.button>

            {/* SECONDARY */}

            <motion.button

              whileHover={{
                opacity: 0.7
              }}

              className="btn-secondary"

              onClick={() =>
                window.open(
                  "https://wa.me/918136823986"
                )
              }

            >

              Book Consultation

            </motion.button>

          </motion.div>

        </motion.div>

      </div>

      {/* =========================================
          SCROLL INDICATOR
      ========================================= */}

      <div className="scroll-indicator">

        <motion.div

          className="mouse-line"

          animate={{
            y:[0,14,0]
          }}

          transition={{
            duration:2,
            repeat:Infinity,
            ease:"easeInOut"
          }}

        />

      </div>

    </section>

  );

}

