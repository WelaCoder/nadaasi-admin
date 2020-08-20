import React from "react";
import { Link } from "react-router-dom";

import FooterLogo from "../../../assets/images/nadaasi/Nadaasi-white.png";
import TelephoneLogo from "../../../assets/images/footer/telephone-white.svg";
import EnvelopeLogo from "../../../assets/images/footer/envelope-white.svg";
import VisaLogo from "../../../assets/images/footer/visa-pay-logo-white.svg";
import MasterCard from "../../../assets/images/footer/mastercard-white.svg";

const Footer = () => (
  <div className="footer">
    <div className="footer-company">
      <p>
        <a href="/" className="footer-logo">
          <img src={FooterLogo} width="200px" alt="logo" />
        </a>
      </p>
      <p>
        <img src={TelephoneLogo} width="25px" alt="Phone" />
        0469375029
      </p>
      <p>
        <a className="mailto" href="mailto:info@nadaasi.com">
          <img src={EnvelopeLogo} width="25px" alt="Mail" />
          info@nadaasi.com
        </a>
      </p>
      <p>
        Pay Later: <img src={VisaLogo} width="30px" alt="visa" />
        <img src={MasterCard} width="30px" alt="Master" />
      </p>
    </div>
    <div className="footer-info">
      <h2>Information</h2>
      <p>
        <a href="/">Secure Payment</a>
      </p>
      <p>
        <a href="/">Size Chart</a>
      </p>
      <p>
        <a href="/">Privacy Policy</a>
      </p>
      <p>
        <a href="/">Refund Policy</a>
      </p>
    </div>
    <div className="footer-personal w-100">
      <h2>Your Account</h2>

      <p>
        <Link to="/profile" className="card-link">
          Personal info
        </Link>
      </p>
      <p>
        <Link to="/profile" className="card-link">
          Merchandise Returns
        </Link>
      </p>
      <p>
        <Link to="/profile" className="card-link">
          Orders
        </Link>
      </p>
      <p>
        <Link to="/profile" className="card-link">
          Credit slips
        </Link>
      </p>
      <p>
        <Link to="/profile" className="card-link">
          Addresses
        </Link>
      </p>
    </div>
    <div className="footer-personal w-100">
      <h2>Bonus</h2>

      <p>
        <Link to="/profile" className="card-link">
          Invite & Earn
        </Link>
      </p>
      <p>
        <Link to="/profile" className="card-link">
          Acquire & Earn
        </Link>
      </p>
    </div>
  </div>
);

export default Footer;
