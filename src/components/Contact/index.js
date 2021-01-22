import React, { useState } from "react";
import "./contact.scss";
import { Form, Row, Col, Button } from 'react-bootstrap'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";


export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section className="contact-wrap">
      {/* <h3>contact</h3> */}

      <div className="wrap">
        <h2>Got a message?</h2>
        <Form name="contact" method="POST"
          data-netlify data-netlify-honeypot="bot-field" action="/success">
          <input type="hidden" name="form-name" value="contact" />
          <p hidden><lable>Don't fill this out unless you are a bot: <input name="bot-field" /></lable></p>
          <Form.Group as={Row}>
            <Form.Label>Name</Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                placeholder="name"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
                name="name"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Col sm={5}>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your Message</Form.Label>
            <Col xs="10">
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="enter your message here ..."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                name="message"
              />
            </Col>
          </Form.Group>

          <Button
            style={{ alignItems: "center" }}
            variant="primary"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Form>
      </div>
      <div className="icons-container">
        <div className="icons-wrap">
          <a
            className="link"
            href="https://www.linkedin.com/in/emnetassefadegafe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="linkedin" />
          </a>
          <a
            className="link"
            href="//github.com/Emnetdegafe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="github" />
          </a>
          <a
            className="link"
            href="mailto:emnetdegafe@gmail.com?subject=Mail from our site"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="email" />
          </a>
        </div>
      </div>
    </section>
  );
}
