import React, { Component } from "react";
import Link from "next/link";
import {
  Button,
  FormGroup,
  Label,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardFooter
} from "reactstrap";

import { Field, Formik } from "formik";
import Router from "next/router";

import Layout from "../components/Layout/Layout";
import BreadcrumPage from "../components/pages/BreadcrumPage";
import { LoginComponent } from "../generated/apolloComponents";
import { InputField } from "../components/field/InputField";

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
                <LoginComponent>
                  {login => (
                    <Formik
                      validateOnBlur={false}
                      validateOnChange={false}
                      initialValues={{
                        email: "test@mail.com",
                        password: "123456"
                      }}
                      onSubmit={async (data, { setErrors }) => {
                        const response = await login({
                          variables: data
                        });
                        console.log(response);
                        if (response && response.data && !response.data.login) {
                          setErrors({
                            email: "Email and password incorrect"
                          });
                          return;
                        }
                        Router.push("/");
                      }}
                    >
                      {({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                          <FormGroup>
                            <Label for="email">Email</Label>
                            <Field
                              type="email"
                              name="email"
                              id="email"
                              placeholder="user12@mail.com"
                              component={InputField}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="password">Password</Label>
                            <Field
                              type="password"
                              name="password"
                              id="password"
                              placeholder="************"
                              component={InputField}
                            />
                          </FormGroup>
                          <Button color="success" type="submit">
                            Ingresar
                          </Button>
                        </form>
                      )}
                    </Formik>
                  )}
                </LoginComponent>
              </CardBody>
              <CardFooter className="text-center">
                No tengo una cuenta?{" "}
                <Link href="/register" passHref>
                  <a>Registrarse</a>
                </Link>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Layout>
    );
  }
}
