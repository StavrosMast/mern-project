// src/components/Hero.js
import React from "react";
import "./HeroSection.css"; // Import the CSS file for the Hero component

function splitTextIntoSpans(target) {
  let elements = document.querySelectorAll(target);
  elements.forEach((element) => {
    element.classList.add("split-text");
    let text = element.innerText;
    let splitText = text
      .split(" ")
      .map(function (word) {
        let char = word
          .split("")
          .map((char) => {
            return `<span class="split-char">${char}</span>`;
          })
          .join("");
        return `<div class="split-word">${char}&nbsp</div>`;
      })
      .join("");

    element.innerHTML = splitText;
  });
}

splitTextIntoSpans(".bubble-text");
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="text-center">
          <div className="bubble-text text">
            Welcome to My Dark Themed Website
          </div>
          <p className="hero-subtitle">
            A modern dark-themed website built with React and CSS
          </p>
          <a href="#" className="hero-button">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
