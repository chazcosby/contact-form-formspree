import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useForm } from '@formspree/react';


function Contact() {

  

  const [state, handleSubmit] = useForm("mknypvja");
  if (state.succeeded) {
      return (
        <div className="thankYou">
          <Container fluid>
            <Row className="thankYou">
              <p>Thanks for being awesome!</p>
              <p>
                I have received your message and will be in touch by email as
                soon as possible.
              </p>
            </Row>
          </Container>
        </div>
      );}

  return (
    <div className="contactBG">
      <Container className="contact" id="contact" fluid>
        <Row>
          <Col>
            <center>
              <h3>Contact</h3>
            </center>
          </Col>
        </Row>
        <Row>
          <Col>
            <form
              class="form-control"
              action="https://formspree.io/f/mknypvja"
              method="POST"
              onSubmit={handleSubmit}
            >
              <h4>Name *</h4>
              <li>
                <input required="true" name="name" id="name_id" type="text" />
              </li>
              <h4>Email *</h4>
              <li>
                <input
                  required="true"
                  name="email"
                  id="email_id"
                  type="email"
                />
              </li>
              <h4>Message *</h4>
              <li>
                <textarea
                  required="true"
                  name="message"
                  id="message_id"
                ></textarea>
              </li>
              <input
                required="true"
                className="submit"
                type="submit"
                value="Send Message"
                id="submit_id"
              />
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
