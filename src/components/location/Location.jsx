import "./Location.css";

import { motion } from "framer-motion";

export default function Location() {

  return (

    <section className="location">

      {/* =====================================
          HEADER
      ===================================== */}

      <motion.span

        className="location-tag"

        initial={{
          opacity:0,
          y:20,
          letterSpacing:"14px"
        }}

        whileInView={{
          opacity:1,
          y:0,
          letterSpacing:"6px"
        }}

        transition={{
          duration:1
        }}

        viewport={{
          once:true
        }}

      >

        VISIT OUR STUDIO

      </motion.span>

      {/* =====================================
          TITLE
      ===================================== */}

      <motion.h2

        initial={{
          opacity:0,
          y:50
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:1.2,
          ease:[0.16,1,0.3,1]
        }}

        viewport={{
          once:true
        }}

      >

        LOCATION

      </motion.h2>

      {/* =====================================
          TEXT
      ===================================== */}

      <motion.p

        className="location-text"

        initial={{
          opacity:0,
          y:40
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:1,
          delay:.2
        }}

        viewport={{
          once:true
        }}

      >

        Frame Makers Studio
        <br />

        Kerala
        <br />

        India

      </motion.p>

      {/* =====================================
          MAP
      ===================================== */}

      <motion.div

        className="map-container"

        initial={{
          opacity:0,
          scale:.92,
          y:80
        }}

        whileInView={{
          opacity:1,
          scale:1,
          y:0
        }}

        transition={{
          duration:1.4,
          ease:[0.16,1,0.3,1]
        }}

        viewport={{
          once:true
        }}

        whileHover={{
          y:-10
        }}

      >

        <motion.iframe

          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2021104.0356380036!2d74.67843815624998!3d8.355455200000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05ab2238edb9ad%3A0xb347142640c763f3!2sFrame%20makers%20Studio!5e0!3m2!1sen!2sin!4v1778850524294!5m2!1sen!2sin"

          width="100%"

          height="100%"

          style={{
            border:0
          }}

          allowFullScreen

          loading="lazy"

          referrerPolicy="no-referrer-when-downgrade"

          title="Frame Makers Studio Location"

          initial={{
            scale:1.08
          }}

          whileInView={{
            scale:1
          }}

          transition={{
            duration:1.6
          }}

        />

      </motion.div>

    </section>

  );
}