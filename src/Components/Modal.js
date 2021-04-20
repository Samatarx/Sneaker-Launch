import React from "react";
import { Modal, Button } from "react-bootstrap";

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
      <Modal.Body style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
        <input type="email" required style={{width:'200px'}} />
        <Button onClick={props.onHide}  style={{margin:'0px 5px', padding:'3px 10px'}}>Submit</Button>
      </Modal.Body>
      <Modal.Footer style={{justifyContent:'center', textAlign:'center'}} >
         <h5> All rights reserved to NIKE, I do not own any of the images or reference to this project</h5>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
