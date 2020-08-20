import React from "react";

import TestimonyImage from "../../../assets/images/home/alex-shaw-9OAecPfYSTA-unsplash.jpg";
import { ShopCarousel } from "../utils/shop-carousel";
import { Ratings } from "../utils/details";

const SectionTestimonial = () => (
  <div className="section">
    <div className="section--testimonial">
      <ShopCarousel itemsOnDesktop={1} itemsonMobile={1}>
        <div className="section__testimony">
          <div className="section__image-box">
            <img
              src={TestimonyImage}
              alt="Testimonial"
              className="section__image"
            />
          </div>
          <div className="section__text-box">
            <div className="section__content">
              <p className="section__title d-flex justify-content-between">
                It&lsquo;s so elegant and stunning
                <Ratings rating={5} />
              </p>
              <p className="section__quote">
                This dress was wonderful! The fit was perfect, the shape was
                fabulous, and corset back was a gorgeous touch. I will say the
                bottom was a tad long, but nothing a tiny hem couldn&lsquo;t
                fix! I recommend this 100%.
              </p>
              <p className="section__name">by Angela de Silva</p>
            </div>
          </div>
        </div>
      </ShopCarousel>
    </div>
  </div>
);

export default SectionTestimonial;
