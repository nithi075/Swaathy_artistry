import "./featured.css";

// makeup gallery images
import img1 from "../../assets/featured/img1.jpg";
import img2 from "../../assets/featured/img2.jpg";
import img3 from "../../assets/featured/img3.jpg";
import img4 from "../../assets/featured/img4.jpg";
import img5 from "../../assets/featured/img5.jpg";
import img6 from "../../assets/featured/img6.jpg";
import img7 from "../../assets/featured/img7.jpg";
import img8 from "../../assets/featured/img8.jpg";

// makeup reel / promo video

export default function Featured() {

  const galleryImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8
  ];

  const handleInstagramRedirect = () => {
    window.open(
      "https://www.instagram.com/swaathy_artistry__/",
      "_blank"
    );
  };

  return (

    <section className="featured">

      <span className="tag">
        OUR SIGNATURE LOOKS
      </span>

      <h2>
        FEATURED BRIDAL
      </h2>

      {/* VIDEO SECTION */}

    

      {/* COLLAGE */}

      <div className="featuredGrid">

        {galleryImages.slice(0,3).map((img,index)=>(

          <img
            key={index}
            src={img}
            alt=""
          />

        ))}

        <div className="quote-box">

          BEAUTY
          <br/>

          THAT GLOWS
          <br/>

          FOREVER

        </div>

        {galleryImages.slice(3).map((img,index)=>(

          <img
            key={index}
            src={img}
            alt=""
          />

        ))}

      </div>

      {/* BUTTON */}

      <button 
        className="featured-btn"
        onClick={handleInstagramRedirect}
      >

        View More Looks ↗

      </button>

    </section>
  );
}