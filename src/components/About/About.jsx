import "./About.css";
import { motion } from "framer-motion";

// Import your own image
import aboutImage from "../../assets/about1.jpg";

function About() {
  return (
    <section className="about-section" id="about">
      {/* IMAGE SIDE */}
      <motion.div
        className="about-image-wrapper"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* DECORATIVE SHAPES */}
        <div className="shape shape-top"></div>
        <div className="shape shape-bottom"></div>

        <div className="about-image">
          <img
            src={aboutImage}
            alt="Swaathy Artistry"
          />
        </div>
      </motion.div>

      {/* CONTENT SIDE */}
      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="about-tag">
          MEET THE ARTIST
        </span>

        <h2>Swaathy Artistry</h2>

        <p>
          I believe that every face tells a unique story,
          and my goal is to enhance your natural beauty
          rather than mask it. With specialized experience
          across bridal, editorial, and luxury beauty
          styling, I bring a refined, customized approach
          to every client.
        </p>

        <p>
          Whether it's your wedding day, engagement
          session, or intimate celebration, I ensure you
          step out feeling radiant, confident, and
          absolutely flawless.
        </p>

        {/* BUTTON */}
        <div className="about-buttons">
          <motion.button
            whileHover={{
              y: -4,
              scale: 1.03,
            }}
            className="read-more-btn"
          >
            Read More
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

export default About;