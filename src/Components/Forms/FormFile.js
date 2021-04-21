import React, { useState } from "react";
import { Row, Form, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

function FormFile({count,increaseCount}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [info, setInfo] = useState({});
  const onSubmission = (data) => {
    setInfo(data);
    increaseCount()
    console.log(data);
    console.log(info);

  };

  return (
    <section style={{ margin: "auto" }}>
      <Row
        style={{
          marginBottom: "100px",
          padding: "0px 30px",
          justifyContent: "center",
        }}
      >
        <Col md={6} lg={5} xs={12}>
          <h1 style={{ textAlign: "center", margin: "25px" }}>PreOrder now</h1>
          <Form
            onSubmit={handleSubmit(onSubmission)}
            style={{ maxWidth: "650px", margin: "auto" }}
          >
            <Form.Row>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Tommy"
                  {...register("firstName", {
                    required: true,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridSurname">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Egan"
                  {...register("surname", {
                    required: true,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="tommy@egan.com"
                {...register("email", {
                  required: true,
                  pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
            </Form.Group>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                placeholder="10 Downing Street"
                {...register("address1", { required: true })}
              />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="flat 2" {...register("address2")} />
            </Form.Group>

            <Form.Group controlId="formGridCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control
                placeholder="United Kingdom"
                {...register("country", { required: true })}
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Post Code</Form.Label>
                <Form.Control
                  placeholder="ec1 2xt"
                  {...register("postcode", { required: true })}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  placeholder="London"
                  {...register("city", { required: true })}
                />
              </Form.Group>
            </Form.Row>
            <ul>
              {errors.firstName ? <li>Please input a valid first name</li> : ""}
              {errors.surname ? <li>Please input a valid surname</li> : ""}
              {errors.email ? <li>Please input a valid email</li> : ""}
            </ul>
            <Form.Row style={{ justifyContent: "center" }}>
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
