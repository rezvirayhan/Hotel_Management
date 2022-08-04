import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
  const emailRef = useRef("");
  const passReff = useRef("");

  const handleSubmite = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const pass = passReff.current.value;

    console.log(email, pass);
  };

  return (
    <div className="container w-50 mx-auto">
      <h1 className="text-primary mt-2 mb-2">Please Login: </h1>
      <Form onSubmit={handleSubmite}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passReff} type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <p className="mt-2">
        Are You New User? So Please <Link className="text-decoration-none" to="/register">Registration </Link>Then Login.
      </p>
    </div>
  );
};

export default Login;
