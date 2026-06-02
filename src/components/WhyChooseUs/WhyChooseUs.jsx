import "./WhyChooseUs.css";

import {
  FaGem,
  FaHeart,
  FaMagic,
  FaStar,
  FaBrush,
  FaSmile,
} from "react-icons/fa";

import { motion } from "framer-motion";

const features = [
  {
    icon: <FaGem />,
    title: "Luxury Products",
    desc: "We use only premium international beauty brands for a flawless luxury finish.",
  },

  {
    icon: <FaHeart />,
    title: "Personalized Looks",
    desc: "Every bridal look is customized to match your outfit, features, and personality.",
  },

  {
    icon: <FaMagic />,
    title: "Flawless Finish",
    desc: "Long-lasting HD makeup designed to stay perfect throughout your celebration.",
  },

  {
    icon: <FaStar />,
    title: "Premium Experience",
    desc: "From consultation to final touch-up, every step feels elegant and luxurious.",
  },

  {
    icon: <FaBrush />,
    title: "Expert Techniques",
    desc: "Professional artistry techniques crafted with years of bridal beauty experience.",
  },

  {
    icon: <FaSmile />,
    title: "Client Satisfaction",
    desc: "Hundreds of happy brides trust us for creating unforgettable wedding looks.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-section">
      {/* TOP CONTENT */}
      <motion.div
        className="why-top"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="why-tag">
          WHY CHOOSE US
        </span>

        <h2>
          Luxury Makeup Experience
          <br />
          Crafted Just For You
        </h2>

        <p>
          We combine elegance, artistry, and premium beauty
          techniques to create stunning bridal transformations
          that make every bride feel confident and unforgettable.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="features-grid">
        {features.map((feature, index) => (
          <motion.div
            className="feature-card"
            key={index}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
            whileHover={{
              y: -10,
            }}
          >
            {/* ICON */}
            <div className="feature-icon">
              {feature.icon}
            </div>

            {/* TITLE */}
            <h3>{feature.title}</h3>

            {/* DESCRIPTION */}
            <p>{feature.desc}</p>

            {/* GLOW */}
            <div className="card-glow"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;