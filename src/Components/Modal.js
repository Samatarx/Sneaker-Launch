import React from "react";
import { Modal, Button } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sign up to our weekly Newsletter
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input type="email" required/>
        <Button onClick={props.onHide}>Submit</Button>
      </Modal.Body>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
