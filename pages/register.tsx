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

import Layout from "../components/Layout/Layout";
import BreadcrumPage from "../components/pages/BreadcrumPage";

import { Formik, Field } from "formik";
import { InputField } from "../components/field/InputField";
import { RegisterComponent } from "../generated/apolloComponents";
import Router from "next/router";

export default class register extends Component {
  render() {
    return (
      <Layout title="Crear una cuenta">
        <BreadcrumPage title="Sign Up" layout="client" />
        <Row className="h-100 d-flex justify-content-center align-items-center">
          <Col md={6}>
            <Card className="mt-2">
              <CardTitle className="text-center pt-4">
                <h4>Crear una cuenta</h4>
              </CardTitle>
              <CardBody>
                <RegisterComponent>
                  {register => (
                    <Formik
                      initialValues={{
                        firstName: "Test ",
                        lastName: "test ",
                        email: "test@mail.com",
                        password: "123456"
                      }}
                      onSubmit={async (data, { setErrors }) => {
                        try {
                          const result = await register({
                            variables: {
                              data
                            }
                          });
                          console.log(result);
                          Router.push("/check-email");
                        } catch (error) {
                          const errors: { [key: string]: string } = {};
                          error.graphQLErrors[0].validationErrors.forEach(
                            (validationErr: any) => {
                              Object.values(validationErr.constraints).forEach(
                                (message: any) => {
                                  errors[validationErr.property] = message;
                                }
                              );
                            }
                          );
                          setErrors(errors);
                        }
                      }}
                    >
                      {({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                          <FormGroup>
                            <Label for="firstname">FirstName</Label>
                            <Field
                              type="text"
                              name="firstName"
                              id="firstname"
                              placeholder="Matt"
                              component={InputField}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="lastname">LastName</Label>
                            <Field
                              type="text"
                              name="lastName"
                              id="lastname"
                              placeholder="Daemon"
                              component={InputField}
                            />
                          </FormGroup>
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
                            Registrarse
                          </Button>
                        </form>
                      )}
                    </Formik>
                  )}
                </RegisterComponent>
                <CardFooter className="text-center">
                  Ya tienes una cuenta?{" "}
                  <Link href="/login" passHref>
                    <a>Ingresar</a>
                  </Link>
                </CardFooter>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Layout>
    );
  }
}
