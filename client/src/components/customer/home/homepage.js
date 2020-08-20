import React from "react";

import Carousel from "./Carousel";
import SectionCards from "./SectionCards";
import SectionNewsletter from "./SectionNewsletter";
import SectionSocial from "./SectionSocial";
import SectionTestimonial from "./SectionTestimonial";
// import SectionTextile from '../components/SectionTextile';

import CottonIcon from "../../../assets/images/home/icons/cotton.svg";
import PaintBrushIcon from "../../../assets/images/home/icons/paint-brush.svg";
import TShirtIcon from "../../../assets/images/home/icons/t-shirt.svg";
// import ShipIcon from '../../../assets/images/home/icons/ship.svg';
// import MoneyIcon from '../../../assets/images/home/icons/money-back.svg';
// import HoursIcon from '../../../assets/images/home/icons/24-hours.svg';

import ItemOne from "../../../assets/images/home/n1.jpg";
import ItemTwo from "../../../assets/images/home/n2.jpg";
import ItemThree from "../../../assets/images/home/n3.jpg";

const sectionQualityData = {
  title: "We Provide",
  subtitle: "better qualities",
  items: [
    { id: 0, icon: TShirtIcon, desc: "Customization" },
    { id: 1, icon: PaintBrushIcon, desc: "Natural Fabric" },
  ],
};

// const sectionServicesData = {
//   title: 'Our Services',
//   subtitle: 'better qualities',
//   items: [
//     { id: 0, icon: ShipIcon, desc: 'Free Shipping Worldwide' },
//     { id: 1, icon: MoneyIcon, desc: 'Money Back Guarantee' },
//     { id: 2, icon: HoursIcon, desc: '24/7 Customer Support' },
//   ],
// };

const items = [ItemOne, ItemTwo, ItemThree];

const HomePage = () => (
  <div>
    <Carousel
      items={items}
      title="Give freedom to create,"
      subtitle="choose and consume fashion in a way that inspires and empowers."
      button="Shop Now"
    />
    {/* <SectionTextile /> */}
    <SectionCards
      items={sectionQualityData.items}
      title={sectionQualityData.title}
      subtitle={sectionQualityData.subtitle}
    />
    <SectionNewsletter />
    {/* <SectionCards
      items={sectionServicesData.items}
      title={sectionServicesData.title}
      subtitle={sectionServicesData.subtitle}
    /> */}
    <SectionSocial />
    <SectionTestimonial />
  </div>
);

export default HomePage;
