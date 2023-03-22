import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Acerca.css";

function ScrollAnimation() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <h1>Acerca de nosotros</h1>
      <div className="animation" data-aos="fade-up"></div>
      <div className="animation" data-aos="fade-down"></div>
      <div className="animation" data-aos="fade-rigth"></div>
      <div className="animation" data-aos="fade-left"></div>
      <div className="animation" data-aos="flip-up"></div>
      <div className="animation" data-aos="flip-down"></div>
      <div className="animation" data-aos="flip-rigth"></div>
      <div className="animation" data-aos="fade-left"></div>
      <div className="animation" data-aos="zoom-in"></div>
      <div className="animation" data-aos="zoom-out"></div>
    </div>
  );
}

export default ScrollAnimation;
