import React, { useState } from "react";
import { Row, Form, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

function FormFile() {
  const { register, handleSubmit } = useForm();
  const [info, setInfo] = useState({});
  const onSubmission = (data) => {
    setInfo(data);
    console.log(info);
  };

  return (
    <section style={{  margin:'auto'}}>
      <Row style={{marginBottom: "100px",padding:'0px 30px', justifyContent:'center'}} >
        <Col md={6} lg={5} xs={12} >
          <h1 style={{ textAlign: "center", margin: "25px" }}>PreOrder now</h1>
          <Form onSubmit={handleSubmit(onSubmission)} style={{maxWidth:'650px', margin:'auto'}} >
            <Form.Row>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter First Name"
                  {...register("firstName", { required: true, pattern: /^[A-Za-z]+$/i })}
                  
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridSurname">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter surname"
                  {...register("surname", { required: true, pattern: /^[A-Za-z]+$/i })}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...register("email", { required: true})}
              />
            </Form.Group>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                placeholder="1234 Main St"
                {...register("address1", { required: true})}
              />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control
                placeholder="Apartment, studio, or floor"
                {...register("address2")}
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Post Code</Form.Label>
                <Form.Control {...register("postcode", { required: true})} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control {...register("city", { required: true, pattern: /^[A-Za-z]+$/i })} />
              </Form.Group>
            </Form.Row>
            <Form.Row style={{justifyContent:'center'}}>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </section>
  );
}

export default FormFile;
