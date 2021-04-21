import React from "react";
import { Col, Row } from "react-bootstrap";
import "../../Styling/Success.css";

const Success = (decreaseCount, count) => {
  return (
    <section>
      <Row>
        <Col>
          <svg
            class="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              class="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              class="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
          <div style={{ textAlign: "center" }}>
            <h3>Thank you</h3>
            <h5>We will be in touch to let you if you have been success</h5>
            <h5>please Check your email after midnght</h5>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Success;
