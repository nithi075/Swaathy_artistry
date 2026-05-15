import "./Packages.css";

import { motion } from "framer-motion";

const packagesData = [
  {
    title: "Basic",
    subtitle: "ONE PHOTOGRAPHER",
    price: "₹49,999",
    features: [
      "1 Photographer",
      "4 Hours of Photo Coverage",
      "250 Edited Images",
      "Photo Print Release"
    ]
  },
  {
    title: "Plus",
    subtitle: "TWO PHOTOGRAPHERS + VIDEOGRAPHY",
    price: "₹89,999",
    features: [
      "2 Photographers",
      "1 Cinematographer",
      "6 Hours of Photo & Video Coverage",
      "500 Edited Images",
      "Photo Print Release",
      "1 Teaser Video",
      "Full Event Video"
    ]
  },
  {
    title: "Premium",
    subtitle: "PHOTO + VIDEO + DRONE COVERAGE",
    price: "₹1,29,999",
    features: [
      "2 Photographers",
      "2 Cinematographers",
      "8 Hours of Photo & Video Coverage",
      "900 Edited Images",
      "Photo Print Release",
      "1 Teaser Video",
      "Full Event Video"
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
          Event <span>Packages</span>
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

                /event

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

              Book Experience ↗

            </button>

          </motion.div>

        ))}

      </div>

    </section>
  );
}