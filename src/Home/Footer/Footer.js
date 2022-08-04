import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import facebook from "../../images/Ficon/facebook.png";
import instagram from "../../images/Ficon/instagram.png";
import linkedin from "../../images/Ficon/linkedin.png";
import twitter from "../../images/Ficon/twitter.png";
import world from "../../images/Ficon/world-wide-web.png";
import youtube from "../../images/Ficon/youtube.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-dark text-white">
      <div className="mt-5">
        <div className="p-5">
          <Container>
            <Row>
              <Col>
                <h5>Phone Support</h5>
                <small>24 HOURS A DAY</small>
                <h6>+ 01 345 647 745</h6>
                <h6>+ 07 778 936 982</h6>
              </Col>
              <Col>
                <div>
                  <div d-flex justify-content-between>
                    <h5>Connect With Us</h5>
                    <small>SOCIAL MEDIA CHANNELS</small>
                  </div>
                  <div className="mr-3 mt-3 ">
                    <img
                      className="mr-2"
                      style={{ width: "10%" }}
                      src={world}
                      alt=""
                    />
                    <img
                      className="mr-2"
                      style={{ width: "10%" }}
                      src={facebook}
                      alt=""
                    />
                    <img
                      className="mr-2"
                      style={{ width: "10%" }}
                      src={instagram}
                      alt=""
                    />
                    <img
                      className="mr-2"
                      style={{ width: "10%" }}
                      src={linkedin}
                      alt=""
                    />
                    <img
                      className="mr-2"
                      style={{ width: "10%" }}
                      src={youtube}
                      alt=""
                    />
                    <img
                      className="mr-2"
                      style={{ width: "10%" }}
                      src={twitter}
                      alt=""
                    />
                  </div>
                </div>
              </Col>
              <Col>
                <h5>Newsletter</h5>
                <small>SIGN UP FOR SPECIAL OFFERS</small>
                <Form className="mt-3">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control type="email" placeholder="Your Email" />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div id="dev_footer" className="p-3">
        <center>
          © Developed By
          <a href="https://www.linkedin.com/in/devrezvirayhan/">
             <b>Rezvi Rayhan</b>
          </a>
        </center>
      </div>
    </div>
  );
};

export default Footer;
