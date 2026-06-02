import "./Testimonials.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
} from "react-icons/fa";

// Import your own client images
import bride1 from "../../assets/featured/img1.jpg";
import bride2 from "../../assets/featured/img5.jpg";
import bride3 from "../../assets/featured/img3.jpg";
import bride4 from "../../assets/featured/img4.jpg";

const reviews = [
  {
    name: "Priya",
    image: bride1,
    text: "My bridal makeup was absolutely flawless. Thank you for making my special day unforgettable.",
  },

  {
    name: "Nivetha",
    image: bride2,
    text: "Very professional service and beautiful makeup. I received so many compliments throughout the event.",
  },

  {
    name: "Keerthana",
    image: bride3,
    text: "The makeup stayed perfect from morning till night. I felt confident and beautiful on my wedding day.",
  },

  {
    name: "Harini",
    image: bride4,
    text: "Amazing experience from trial makeup to the final bridal look. Every detail was handled with care.",
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === reviews.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      className="testimonials-section"
      id="testimonials"
    >
      <motion.h2
        className="testimonial-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Hear From Our Clients
      </motion.h2>

      <div className="testimonial-wrapper">
        {/* Left Arrow */}
        <button
          className="arrow left-arrow"
          onClick={prevSlide}
        >
          <FaChevronLeft />
        </button>

        {/* Testimonial Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="testimonial-card"
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            {/* Client Image */}
            <div className="client-image">
              <img
                src={reviews[current].image}
                alt={reviews[current].name}
              />
            </div>

            {/* Client Name */}
            <h3>{reviews[current].name}</h3>

            {/* Stars */}
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            {/* Quote Symbol */}
            <div className="quote">“</div>

            {/* Review Text */}
            <p>{reviews[current].text}</p>
          </motion.div>
        </AnimatePresence>

        {/* Right Arrow */}
        <button
          className="arrow right-arrow"
          onClick={nextSlide}
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="dots">
        {reviews.map((_, index) => (
          <span
            key={index}
            className={
              current === index
                ? "dot active-dot"
                : "dot"
            }
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;