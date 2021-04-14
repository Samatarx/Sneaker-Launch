import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import images from "./images";

console.log(images);

function Landing() {
  return (
    <Row noGutters >
      <Col md={6} xs={12}>
        <Container  style={{display:'flex', justifyContent:'center'}}>
        {<img src={images[5].img} style={{width:'400px'}} />}
        </Container>
      </Col>
      <Col md={6} xs={12} style={{display:'flex', justifyContent:'center', marginBottom:'75px'}}>
        {<img src={images[5].img} style={{width:'400px'}}  />}
      </Col>
    </Row>
  );
}

export default Landing;
