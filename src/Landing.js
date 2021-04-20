import React, { useState } from "react";
import { Col, Row, Container, Carousel, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import images from "./images";
import "./Styling/Landing.css";

console.log(images);

function Landing() {
  return (
    <Container>
      <Row noGutters style={{ marginBottom: "100px", height: "80vh" }}>
        <Col
          md={6}
          xs={12}
          style={{
            display: "flex",
            height: "100%",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "start",
            textTransform: "uppercase",
          }}
        >
          <h1 style={{ fontSize: "120px", letterSpacing: "-5px" }}>
            Latest Drop of 2021
          </h1>

          <h2>Air Jordan 1 University Blue</h2>
          <p>Exclusive edition, preorder today</p>
        </Col>
        <Col
          md={6}
          xs={12}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "0px",
            height: "100%",
          }}
        >
          <div className="rect1"></div>
          <div className="rect2"></div>

          <Carousel controls={false} indicators={false}>
            {images.map((image, idx) => {
              return (
                <Carousel.Item
                  interval={3000}
                  key={idx}
                  style={{ height: "500px" }}
                >
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
            }}
            to="/Preorder"
          >
            <Nav.Link>Preorder Now</Nav.Link>
          </LinkContainer>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;
