import React, { Component } from "react";
import LayoutAdmin from "../../components/Layout/LayoutAdmin";
import BreadcrumPage from "../../components/pages/BreadcrumPage";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  Button
} from "reactstrap";
import { MdEdit, MdClear } from "react-icons/md";

export class orders extends Component {
  render() {
    return (
      <LayoutAdmin title="Orders">
        <BreadcrumPage title="orders" layout="admin" />
        <Row>
          <Col md={12}>
            <Card>
              <CardHeader>
                <h6 className="text-uppercase">List Orders</h6>
              </CardHeader>
              <CardBody>
                <Table hover responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Description</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>nombre</td>
                      <td>Descricion</td>
                      <td>description</td>
                      <td>
                        <Button outline color="info" size="sm">
                          <MdEdit size={18} />
                        </Button>{" "}
                        <Button color="danger" size="sm">
                          <MdClear size={18} />
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </LayoutAdmin>
    );
  }
}

export default orders;
