import React from "react";
import "./../scss/components/hero.scss";
import Image from "./../image.png";

const Hero = () => {
  return (
    <section>
      <div className="contain-part">
        <div className="text-part">
          <p>Building digital</p>
          <p> products,brands</p>
          <p>& Experience</p>
        </div>
        <div className="DigitalAgencyText">
          <p>Digital Agency is your online team mangement tool that</p>
          <p>Easy and prompt </p>
          <section>
            <div className="Button">Contact Us</div>
          </section>
        </div>
        <img src={Image} alt="hero" className="photo-part" />
      </div>
    </section>
  );
};

export default Hero;
