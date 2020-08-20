import React from "react";
import { ContactCardsList } from "./contact-card-list";
import { ContactForm } from "./contact-form";
import { ContactInfo } from "./contact-info";
import { ContactBanner } from "./contact-banner";
import { Container } from "react-bootstrap";

const ContactPage = () => (
  <div className="bg-white">
    <ContactBanner heading="Contact Us" subheading="Working Service 24/7" />
    <Container>
      <div className="col-md-9 mx-auto mt-10 mb-2">
        <div className="row contact-row">
          <div className="col-md-6 shadow-contact mb-3-sm">
            <ContactInfo />
          </div>
          <div className=" ml-2 contact px-0 col">
            <ContactForm />
          </div>
        </div>
        <ContactCardsList />
      </div>
    </Container>
  </div>
);

export default ContactPage;
