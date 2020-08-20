import React from "react";
import PropTypes from "prop-types";

const Banner = ({ height, image, subtitle, textLeft, textRight, title }) => (
  <>
    <div
      style={{
        height,
      }}
      className={`banner ${textLeft ? "banner--text-left" : ""} ${
        textRight ? "banner--text-right" : ""
      }`}
    >
      <img src={image} alt="Banner" className="banner__image" />
      <div className="banner__text-box">
        {title && <h2 className="banner__title">{title}</h2>}
        {subtitle && <p className="banner__subtitle">{subtitle}</p>}
      </div>
    </div>
  </>
);

Banner.defaultProps = {
  height: "40vh",
  subtitle: "",
  textLeft: false,
  textRight: false,
  title: "",
};

Banner.propTypes = {
  height: PropTypes.string,
  image: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  textLeft: PropTypes.bool,
  textRight: PropTypes.bool,
  title: PropTypes.string,
};

export default Banner;
