import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import ItemTwo from "../../../assets/images/about/Group-105.png";
import { Link } from "react-router-dom";

const Carousel = ({ items, duration, title, subtitle, button }) => {
  const timeoutRef = useRef(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      if (currentIndex >= items.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, duration);

    return () => {
      clearInterval(timeoutRef.current);
    };
  });

  const currentItem = items[currentIndex];

  return (
    <div className="carousel">
      <div className="carousel__container">
        <img
          src={currentItem}
          alt="Nadaasi Commerce"
          className="carousel__image"
        />
        <div className="carousel__text-box">
          <h1 className="carousel__title text-uppercase">{title}</h1>
          <h5 className="carousel__subtitle text-uppercase">{subtitle}</h5>
          <div>
            {button && (
              <Link to="/shop" className="home-btn">
                {button}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Carousel.defaultProps = {
  items: [ItemTwo],
  duration: 4000,
  title: '"We Design It Simple',
  subtitle: 'You Make It Awesome"',
};

Carousel.propTypes = {
  duration: PropTypes.number,
  items: PropTypes.instanceOf(Array),
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Carousel;
