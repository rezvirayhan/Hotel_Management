import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passReff = useRef("");
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  if (user) {
    navigate(from, { replace: true });
  }
  const handleSubmite = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const pass = passReff.current.value;
    signInWithEmailAndPassword(email, pass);
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
        Are You New User? So Please{" "}
        <Link className="text-decoration-none" to="/register">
          Registration{" "}
        </Link>
        Then Login.
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
