import React from "react";

const SectionNewsletter = () => (
  <div className="section">
    <div className="section--newsletter">
      <div className="section__text-box">
        <h3 className="section__text">Sign up for our newsletter and get</h3>
        <h4 className="section__text--big">20%</h4>
        <h3 className="section__text">discount on evening dresses</h3>
        <div className="section__subscription-box">
          <input
            type="email"
            className="section__input"
            placeholder="Your Email Address"
          />
          <button type="button" className="button button--dark section__button">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default SectionNewsletter;
