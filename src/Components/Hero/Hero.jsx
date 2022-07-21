import React from 'react';
import "./Hero.css";

const Hero = ({title, text}) => {
  return (
    <>
      <div className="hero">
        <div className="hero_list">
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
