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

export default class register extends Component {
  render() {
    return (
      <Layout title="Crear una cuenta">
        <BreadcrumPage title="Sign Up" />
        <Row className="h-100 d-flex justify-content-center align-items-center">
          <Col md={6}>
            <Card className="mt-2">
              <CardTitle className="text-center pt-4">
                <h4>Crear una cuenta</h4>
              </CardTitle>
              <CardBody>
                <form action="">
                  <FormGroup>
                    <Label for="firstname">FirstName</Label>
                    <Input
                      type="text"
                      name="firstname"
                      id="firstname"
                      placeholder="Matt"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="lastname">LastName</Label>
                    <Input
                      type="text"
                      name="lastname"
                      id="lastname"
                      placeholder="Daemon"
                    />
                  </FormGroup>
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
                  Ya tienes una cuenta? <Link href="/login">Ingresar</Link>
                </CardFooter>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Layout>
    );
  }
}
