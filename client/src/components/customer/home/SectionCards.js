import React from "react";
import PropTypes from "prop-types";
import { Card, Container } from "react-bootstrap";

const SectionCards = ({ title, subtitle, items }) => (
  <div className="section">
    <div className="section--cards">
      <Container>
        <div className="section__text-box">
          <h1>{title}</h1>
          <h3>{subtitle}</h3>
        </div>

        <div className="row">
          {items.map(({ id, icon, desc }) => (
            <div key={id} className="col-md-6 col-sm-12 mb-2 p-0">
              <Card className="section__card">
                <div>
                  <Card.Img src={icon} className="section__image" />
                </div>
                <Card.Body>{desc}</Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </div>
  </div>
);

SectionCards.defaultProps = {
  title: "",
  subtitle: "",
  items: [],
};

SectionCards.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  items: PropTypes.instanceOf(Array),
};

export default SectionCards;
