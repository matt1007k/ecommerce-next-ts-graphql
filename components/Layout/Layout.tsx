import * as React from "react";

import Head from "next/head";
import "../../styles/main.scss";
import HeaderClient from "./HeaderClient";

import { Container, Row, Col } from "reactstrap";
import AsideClient from "./AsideClient";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title"
}) => (
  <div>
    <Head>
      <title>{title} | Store</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <HeaderClient />
    <Container>
      <Row>
        <Col md={2}>
          <AsideClient />
        </Col>
        <Col md={10}>{children}</Col>
      </Row>
    </Container>
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
      <div
        style={{
          color: "red",
          backgroundImage: "url(/static/images/right-arrow.svg)",
          height: "60px"
        }}
      />
    </footer>
  </div>
);

export default Layout;
