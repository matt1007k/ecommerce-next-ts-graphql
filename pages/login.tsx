import React, { Component } from "react";
import Link from "next/link";
import {
  Button,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardFooter
} from "reactstrap";

import Layout from "../components/Layout/Layout";
import BreadcrumPage from "../components/pages/BreadcrumPage";

export default class login extends Component {
  render() {
    return (
      <Layout title="Login">
        <BreadcrumPage title="Sign Up" />
        <Row className="h-100 d-flex justify-content-center align-items-center">
          <Col md={6}>
            <Card className="mt-2">
              <CardTitle className="text-center pt-4">
                <h4>Iniciar sesion</h4>
              </CardTitle>
              <CardBody>
                <form action="">
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="user12@mail.com"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="************"
                    />
                  </FormGroup>
                  <Button color="success" type="submit">
                    Registrarse
                  </Button>
                </form>
                <CardFooter className="text-center">
                  No tengo una cuenta? <Link href="/register">Registrarse</Link>
                </CardFooter>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Layout>
    );
  }
}
