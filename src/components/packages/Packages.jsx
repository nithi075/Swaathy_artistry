import "./Packages.css";

import { motion } from "framer-motion";

const packagesData = [
  {
    title: "Bridal Glow",
    subtitle: "CLASSIC BRIDAL MAKEUP",
    price: "₹14,999",
    features: [
      "HD Bridal Makeup",
      "Hair Styling",
      "Saree Draping",
      "Basic Accessories Setting",
      "Long Lasting Finish",
      "Touch-Up Kit"
    ]
  },

  {
    title: "Luxury Bride",
    subtitle: "HD + AIRBRUSH MAKEUP",
    price: "₹29,999",
    features: [
      "Airbrush Bridal Makeup",
      "Premium Hair Styling",
      "Saree / Lehenga Draping",
      "Lens Assistance",
      "Premium Accessories Setting",
      "Long Lasting Waterproof Finish",
      "Mini Touch-Up Session"
    ]
  },

  {
    title: "Celebrity Signature",
    subtitle: "BRIDAL + RECEPTION LOOK",
    price: "₹49,999",
    features: [
      "2 Complete Bridal Looks",
      "HD + Airbrush Makeup",
      "Luxury Hair Styling",
      "Reception Glam Look",
      "Premium Draping",
      "Skin Prep & Glow Finish",
      "Full Day Touch-Up Support"
    ]
  }
];

export default function Packages() {

  return (

    <section
      className="packages"
      id="packages"
    >

      {/* HEADER */}

      <motion.div
        className="packages-header"

        initial={{
          opacity:0,
          y:40
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:1
        }}

        viewport={{
          once:true
        }}
      >

        <p>PRICING</p>

        <h2>
          Bridal <span>Packages</span>
        </h2>

      </motion.div>

      {/* CARDS */}

      <div className="packages-container">

        {packagesData.map((item,index)=>(

          <motion.div

            key={index}

            className={`package-card ${
              item.badge
              ? "featured"
              : ""
            }`}

            initial={{
              opacity:0,
              y:80
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            transition={{
              duration:1,
              delay:index * 0.2
            }}

            viewport={{
              once:true
            }}

            whileHover={{
              y:-14,
              scale:1.02
            }}

          >

            {/* badge */}

            {item.badge && (

              <div className="badge">

                {item.badge}

              </div>

            )}

            {/* title */}

            <h3>{item.title}</h3>

            <p className="subtitle">

              {item.subtitle}

            </p>

            {/* price */}

            <div className="price-box">

              <h1>{item.price}</h1>

              <span className="event-text">

                /bridal

              </span>

            </div>

            {/* features */}

            <div className="features">

              {item.features.map(
                (feature,i)=>(

                  <p key={i}>

                    ✦ {feature}

                  </p>

                )
              )}

            </div>

            {/* button */}

            <button className="package-btn">

              Book Bridal Session ↗

            </button>

          </motion.div>

        ))}

      </div>

    </section>
  );
}