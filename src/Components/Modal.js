import React from "react";
import { Modal, Button } from "react-bootstrap";
import "../Styling/Modal.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header  closeButton >
        <Modal.Title  id="contained-modal-title-vcenter">
          <h4>Sign up to our weekly Newsletter</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='modal-body'>
        <label>Email:</label>
        <input type="email" required className='modal-input' />
        <Button variant="dark" onClick={props.onHide} className='modal-button'>Submit</Button>
      </Modal.Body>
      <Modal.Footer className='modal-footer'>
         <p> All rights reserved to NIKE, I do not own any of the images or reference to this project, no user data is kept for this project</p>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
