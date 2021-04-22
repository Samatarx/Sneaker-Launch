import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import images from "../images";
import "../Styling/Heritage.css";

function Heritage() {
  return (
    <Container className="container-style">
      <Row>
        <Col className="heritage-image" xs={12} md={5} lg={5}>
          <img
            className="heritage-image-shoe"
            src={images[0].img}
            alt="Air Jordan 1 University Blue"
          />
        </Col>
        <Col className="heritage-text-col " xs={12} md={7} lg={7}>
          <h2>Air Jordan 1</h2>
          <h4>University Blue</h4>
          <h5>£139.99</h5>
          <LinkContainer to="/Preorder">
            <span className="heritage-span">Preorder Now</span>
          </LinkContainer>
        </Col>
      </Row>
      <Row className="heritage-row">
        <img
          className="heritage-image-shoe-alone"
          src={images[4].img}
          alt="Air Jordan 1 University Blue"
        />
      </Row>
      <Row className="reversed-row">
        <Col className="heritage-text-col" xs={12} md={7} lg={7}>
          <p className="heritage-text-para">
            More than 35 years after its debut, the Air Jordan 1 still stands as
            a timeless and versatile design built to match any aesthetic. This
            refreshed edition covers the silhouette in muted tones to create a
            clean make-up. A base of white is complemented by overlays of Hyper
            Royal, with hits of Light Smoke Grey further contributing to the
            understated palette.
          </p>
        </Col>
        <Col className="heritage-image" xs={12} md={5} lg={5}>
          <img
            src={images[3].img}
            alt="Air Jordan 1 University Blue"
            className="heritage-image-shoe"
          />
        </Col>
      </Row>
      <Row className="heritage-row">
        <img
          className="heritage-image-shoe-alone"
          src={images[5].img}
          alt="Air Jordan 1 University Blue"
        />
      </Row>
      <Row>
        <Col className="heritage-image" xs={12} md={5} lg={5}>
          <img
            src={images[2].img}
            alt="Air Jordan 1 University Blue"
            className="heritage-image-shoe"
          />
        </Col>
        <Col className="heritage-text-col" xs={12} md={7} lg={7}>
          <p className="heritage-text-para">
            Since his game-winning shot that brought championship glory to North
            Carolina, Michael Jordan has been at the forefront of basketball
            consciousness. He took to the court in 1985 wearing the original Air
            Jordan I, simultaneously breaking league rules and his opponents'
            will while capturing the imaginations of fans worldwide.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Heritage;
