import React from "react";
import { Col, Row } from "react-bootstrap";
import images from './images'

console.log(images)

function Landing() {
  return (
    <Row>
      <Col>Landing</Col>
      <Col>{images.map((id,image)=>{
        return (<img scr={image} key={id} />)
      })}</Col>
    </Row>
  );
}

export default Landing;
