import React, { useRef, useState } from "react";
import { Button, Card, Form, Alert, Container } from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";
import { auth } from "../Firebase";

import { useAdminAuth } from "./contexts/AdminAuthContext";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { adminlogin } = useAdminAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      auth.signInWithEmailAndPassword(email, password).then(() => {
        setEmail("");
        setPassword("");
        setError("");
        history.push("/");
      });
    } catch (error) {
      setError(error);
    }
    setLoading(false);
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
