import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Testimonials.css";
import client1 from "../../assets/test1.jpg"; 
import client2 from "../../assets/test2.jpg";
import client3 from "../../assets/test3.jpg";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const reviews = [
    {
      img: client1,
      title: "MODERN WAREHOUSE WEDDING",
      author: "BY ANANTHU TABLA & ARYA AJAY",
      text: "Our wedding memories were captured so beautifully. Every image feels timeless and emotional."
    },
    {
      img: client2,
      title: "VINTAGE GARDEN CEREMONY",
      author: "BY ROHIT & MANASVI",
      text: "Truly a wonderful experience. The team was so comfortable to work with and the results are art."
    },
    {
      img: client3,
      title: "CLASSIC ROYAL RECEPTION",
      author: "BY PRANAV & ANAGHA",
      text: "The aesthetic sense and the way they play with natural light is just incredible. Highly recommended."
    }
  ];

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextStep();
    }, 4000);
    return () => clearInterval(timer);
  }, [index]);

  const nextStep = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1 === reviews.length ? 0 : prev + 1));
  };

  // Animation variants for smooth sliding
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section className="testimonials" id="testimonials">
      <motion.div 
        className="testimonials-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p>TESTIMONIALS</p>
        <h2>Client <span>Stories</span></h2>
      </motion.div>

      <div className="slider-container">
        <div className="slider-content">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.6 },
              }}
              className="journal-card featured-slide"
            >
              <div className="journal-img-box">
                <img src={reviews[index].img} alt={reviews[index].title} />
                <div className="floating-title-box">
                  <h3 className="card-title">{reviews[index].title}</h3>
                  <span className="card-author">{reviews[index].author}</span>
                </div>
              </div>
              <div className="card-body">
                <p className="card-text">"{reviews[index].text}"</p>
                <div className="card-footer">
                  <div className="dots">
                    {reviews.map((_, i) => (
                      <span key={i} className={`dot ${i === index ? "active" : ""}`} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}