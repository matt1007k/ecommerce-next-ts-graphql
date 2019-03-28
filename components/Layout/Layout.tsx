import * as React from "react";

import Head from "next/head";
import "../../styles/main.scss";
import HeaderClient from "./HeaderClient";

import { Container, Row, Col } from "reactstrap";

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
    <Container>{children}</Container>
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
