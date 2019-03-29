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
import { InputField } from "../components/field/InputField";
import { ForgotPasswordComponent } from "../generated/apolloComponents";

export default class forgotPassword extends Component {
  render() {
    return (
      <Layout title="Forgot password">
        <BreadcrumPage title="Sign Up" />
        <Row className="h-100 d-flex justify-content-center align-items-center">
          <Col md={6}>
            <Card className="mt-2">
              <CardTitle className="text-center pt-4">
                <h4>¿Contraseña olvidada?</h4>
              </CardTitle>
              <CardBody>
                <ForgotPasswordComponent>
                  {forgotPassword => (
                    <Formik
                      initialValues={{
                        email: "test@mail.com"
                      }}
                      onSubmit={async data => {
                        const response = await forgotPassword({
                          variables: data
                        });
                        console.log(response);
                        Router.push("/change-password");
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
                          <Button color="success" type="submit">
                            Siguiente
                          </Button>
                        </form>
                      )}
                    </Formik>
                  )}
                </ForgotPasswordComponent>
              </CardBody>
              <CardFooter className="text-center">
                <Link href="/login" passHref>
                  <a>Volver al inicio de sesión</a>
                </Link>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Layout>
    );
  }
}
