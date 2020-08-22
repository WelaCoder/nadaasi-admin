import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const ShopCarousel = ({ children, itemsOnDesktop, itemsonMobile }) => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={2000}
      centerMode={false}
      className=''
      dotListClass=''
      draggable
      focusOnSelect={false}
      infinite
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: itemsOnDesktop,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: itemsonMobile,
          partialVisibilityGutter: 0,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
      }}
      showDots={false}
      sliderClass=''
      slidesToSlide={1}
      swipeable
    >
      {children}
    </Carousel>
  );
};
