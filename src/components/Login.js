import React, { useRef, useState } from "react";
import { Button, Card, Form, Alert, Container } from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";
import { auth } from "../Firebase";



const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      emailRef.current.value === "admin@gmail.com" 
    
    ) {
      await auth
      .signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      .then(() => {
        history.push("/");
      })

      
    } else {
     await auth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          history.push("/");
        })
        .catch((error) => {
          setError(error);
        });
    }
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>

            {error ? (
              <Alert variant="danger"> {JSON.stringify(error)} </Alert>
            ) : (
              " "
            )}

            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  ref={emailRef}
                  type="email"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
              </Form.Group>

              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  ref={passwordRef}
                  type="password"
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                />
              </Form.Group>

              <Button disabled={loading} className="w-100" type="submit">
                {" "}
                Log In
              </Button>
            </Form>
          </Card.Body>
        </Card>

        <div className="w-100 text-center mt-2">
          Don't have an account?
          <Link to="/signup"> SignUp!</Link>
        </div>
      </div>
    </Container>
  );
};

export default LogIn;
