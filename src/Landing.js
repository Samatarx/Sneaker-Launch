import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import images from "./images";

console.log(images);

function Landing() {
  return (
    <Container  >
    <Row noGutters >
      <Col md={6} xs={12}>
        <Container  style={{display:'flex', height:'100%', justifyContent:'center',  flexDirection:'column',alignItems:'start', }}>
        <h1>Latest Drop of 2021</h1>
        <p>Exclusive edition</p>
        </Container>
      </Col>
      <Col md={6} xs={12} style={{display:'flex', justifyContent:'center', marginBottom:'75px'}}>
        {<img src={images[5].img} style={{width:'400px'}}  style={{transform:'rotate(0deg)'}} />}
      </Col>
    </Row>
    </Container>
  );
}

export default Landing;
