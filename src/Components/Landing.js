import React from "react";
import { Col, Row, Container, Carousel, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import images from "../images";
// import "./Styling/Landing.css";
import "../Styling/Landing.css";

function Landing() {
  return (
    <Container>
      <Row noGutters style={{ marginBottom: "100px", height: "80vh" }}>
        <Col md={6} xs={12} lg={7} className="text-section">
          <h1 className="heading">Latest Drop of 2021</h1>
          <h2 className="sub-heading">Air Jordan 1 University Blue</h2>
          <p>Exclusive edition</p>
        </Col>
        <Col md={6} xs={12} lg={5} className="image-section">
          <Carousel controls={false} indicators={false}>
            {images.map((image, idx) => {
              return (
                <Carousel.Item interval={3000} key={idx}>
                  <img
                    src={image.img}
                    alt="Air Jordan 1 University Blue"
                    className="shoe-image"
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <LinkContainer
            style={{
              color: "#fff",
              backgroundColor: "#96C0DF",
              borderRadius: "5px",
              padding: "3px 5px",
              fontSize: "20px",
              letterSpacing: "2px",
            }}
            to="/Preorder"
          >
            <Nav.Link id='nav-link'>Preorder Now</Nav.Link>
          </LinkContainer>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;
