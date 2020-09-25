import React from "react";
import "./contact.scss";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   setName("");
  //   setEmail("");
  //   setMessage("");
  // }

  return (
    <div className="contact-wrap">
      {/* <h3>contact</h3> */}
      <div className="icons-container">
        <h5>Let's connect</h5>
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
      {/* <div className="wrap">
        <h1>Got a message?</h1>
        <Form>
          <Form.Group as={Row}>
            <Form.Label>Name</Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                placeholder="name"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
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
      </div> */}
    </div>
  );
}
