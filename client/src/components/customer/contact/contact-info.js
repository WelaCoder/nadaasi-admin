import React from "react";
import Home from "../../../assets/images/contact/Icons/home.svg";
import Telephone from "../../../assets/images/contact/Icons/telephone.svg";
import Envelope from "../../../assets/images/contact/Icons/envelope.svg";
export const ContactInfo = () => {
  return (
    <>
      <div className="company-location">
        <div className="d-flex flex-column px-contact-4">
          <p className="font-Futura-light mt-3 ml-4">Company Information</p>
          <div className="contact-section d-flex">
            <div className="image ml-4">
              <img src={Home} width="40px" alt="home" />
            </div>
            <div className="info font-Futura-light ml-4">
              <p>
                Suksitie 3, 820
                <br />
                84100 Ylivieska
                <br />
                Finland
                <br />
                Nadaasi
                <br />
                Registered Name / ID: <br />
                SUR-MEK AY / 2806255-3 <br />
              </p>
            </div>
          </div>

          <div className="d-flex">
            <div className="image ml-4">
              <img src={Telephone} width="40px" alt="home" />
            </div>
            <div className="info font-Futura-light ml-4">
              <p>
                Call us: <br />
                046 9375 029
              </p>
            </div>
          </div>
          <div className="d-flex ">
            <div className="image ml-4">
              <img src={Envelope} width="40px" alt="home" />
            </div>
            <div className="info font-Futura-light ml-4 d-flex">
              <p className="mt-2">info@nadaasi.fi</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
