import React from "react";
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
import { ChangePasswordComponent } from "../generated/apolloComponents";
import { NextContext } from "next";

const changePassword = ({ token }: { token: string }) => {
  return (
    <Layout title="Change password">
      <BreadcrumPage title="Sign Up" />
      <Row className="h-100 d-flex justify-content-center align-items-center">
        <Col md={6}>
          <Card className="mt-2">
            <CardTitle className="text-center pt-4">
              <h4>Cambiar contraseña</h4>
            </CardTitle>
            <CardBody>
              <ChangePasswordComponent>
                {changePassword => (
                  <Formik
                    initialValues={{
                      password: ""
                    }}
                    onSubmit={async data => {
                      const response = await changePassword({
                        variables: {
                          data: {
                            token,
                            password: data.password
                          }
                        }
                      });
                      console.log(response);
                      Router.push("/");
                    }}
                  >
                    {({ handleSubmit }) => (
                      <form onSubmit={handleSubmit}>
                        <FormGroup>
                          <Label for="password">New password</Label>
                          <Field
                            type="password"
                            name="password"
                            id="password"
                            placeholder="************"
                            component={InputField}
                          />
                        </FormGroup>
                        <Button color="success" type="submit">
                          Cambiar
                        </Button>
                      </form>
                    )}
                  </Formik>
                )}
              </ChangePasswordComponent>
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
};

changePassword.getInitialProps = ({
  query: { token }
}: NextContext<{ token: string }>) => {
  return { token };
};

export default changePassword;
