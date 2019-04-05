import React, { PureComponent } from "react";
import { Row, Col, Button } from "reactstrap";
import { MdArrowForward } from "react-icons/md";

export default class BannerHome extends PureComponent {
  render() {
    return (
      <div className="cl-banner__home">
        <Row>
          <Col
            md={8}
            className="no-padding banner__main"
            style={{ backgroundImage: "url(./static/images/1-2.jpg)" }}
          >
            <div className="bm__actions">
              <Button color="info">
                Buy now <MdArrowForward />
              </Button>
            </div>
          </Col>
          <Col md={4} className="no-padding">
            <div className="bn-left d-flex flex-column">
              <div className="bm__sc">
                <img
                  src="./static/images/1-1.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="bm__sc">
                <img
                  src="./static/images/1-3.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="no-padding banner__sc">
            <img src="./static/images/2-1.jpg" className="img-fluid" alt="" />
          </Col>
          <Col md={4} className="no-padding banner__sc">
            <img src="./static/images/2-2.jpg" className="img-fluid" alt="" />
          </Col>
          <Col md={4} className="no-padding banner__sc">
            <img src="./static/images/2-3.jpg" className="img-fluid" alt="" />
          </Col>
        </Row>
      </div>
    );
  }
}
