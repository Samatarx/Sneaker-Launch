import React, { useState } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import images from "./images";
import './Styling/Landing.css'

console.log(images);

function Landing() {
  return (
    <Container>
      {/* <div className="rect1"></div>
      <div className="rect2"></div> */}
      <Row noGutters>
        <Col md={6} xs={12}>
          <Container
            style={{
              display: "flex",
              height: "100%",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "start", textTransform:'uppercase'
            }}
          >
            <h1>Latest Drop of 2021</h1>
            <p>Exclusive edition</p>
            <h2>Air Jordan 1 University Blue</h2>
          </Container>
        </Col>
        <Col
          md={6}
          xs={12}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "75px",
            height: "100%",
          }}
        >
          {<img src={images[5].img} style={{ width: "300px" }} />}
          <LinkContainer style={{ color: "#fff" }} to="/Preorder">
            <Button>Preorder Now</Button>
          </LinkContainer>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;
