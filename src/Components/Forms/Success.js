import React from "react";
import { Col, Row } from "react-bootstrap";
import "../../Styling/Success.css";

const Success = () => {
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
          <div className="success-text">
            <h2>Thank you</h2>
            <p className="success-para">
              We will be in touch to let you know if you have been successful
            </p>
            <p className="success-para">
              please Check your email after midnght
            </p>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Success;
