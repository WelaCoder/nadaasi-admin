import React from "react";
import { ContactCard } from "./contact-card";
// import Support from '../../assets/images/contact/Icons/support.svg';
import Suggestion from "../../../assets/images/contact/Icons/suggestion.svg";
// import Joinus from '../../assets/images/contact/Icons/join-us.svg';

export const ContactCardsList = () => {
  return (
    <>
      <ContactCard
        img="https://image.flaticon.com/icons/svg/2787/2787948.svg"
        heading="Personalized Help"
        text="Whether you need help in choosing a right dress for 
        special setting or you want to customize a dress - we can help. Contact us."
      />
      <ContactCard
        img={Suggestion}
        heading="Suggestions"
        text="We would really appreciate your feedback on what 
        we have or how it could be better."
      />
      <ContactCard
        img="https://image.flaticon.com/icons/svg/476/476700.svg"
        heading="Join us"
        text="If you have a dream to leave your mark on fashion industry, 
        contact us. We take every initiative seriously, 
        if your concepts meet our values, you will see 
        them a reality and that is a promise."
      />
    </>
  );
};
