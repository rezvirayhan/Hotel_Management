import { signOut } from "firebase/auth";
import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/ourFood">Our Food</Nav.Link>
              <Nav.Link href="/home#mentors">Mentors</Nav.Link>
              <div class="dropdown">
                <button
                  class="btn btn-danger dropdown-toggle ml-3"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Our-Hotel
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Nav.Link
                    className="text-dark font-weight-bold"
                    as={Link}
                    to="/customerReview"
                  >
                    Client-Review
                  </Nav.Link>
                </div>
              </div>
            </Nav>
            <Nav>
              {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
              {user ? (
                <Button variant="primary" onClick={handleSignOut}>
                  Sign Out
                </Button>
              ) : (
                <Nav.Link as={Link} to="login">
                  <Button variant="danger">Login</Button>{" "}
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
