import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import images from "./images";

console.log(images);

function Landing() {
  const { id, img } = images;
  return (
    <Row noGutters>
      <Col lg={true}>Landing</Col>
      <Col lg={true}>
        {<img src={images[5].img} />}
      </Col>
    </Row>
  );
}

export default Landing;
