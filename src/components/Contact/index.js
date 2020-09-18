import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import "./contact.scss";
export default function Contact() {
  return (
    <div className='contact-wrap'>
      <h3>contact</h3>
      <div className="wrap">
      <h1>Got a message?</h1>
        <Form>
          <Form.Group as={Row}>
            <Form.Label>Name</Form.Label>
            <Col sm={5}>
              <Form.Control type="text" placeholder="name" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Col sm={5}>
              <Form.Control type="email" placeholder="Enter email" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your Message</Form.Label>
            <Col xs="10">
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="enter your message here ..."
              />
            </Col>
          </Form.Group>

          <Button style={{alignItems:'center'}}variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
