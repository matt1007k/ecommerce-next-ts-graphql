import * as React from "react";

import Head from "next/head";
import "../../styles/main.scss";
import HeaderAdmin from "./HeaderAdmin";

import { Container } from "reactstrap";
import SidebarAdmin from "./SidebarAdmin";

type Props = {
  title?: string;
};

const LayoutAdmin: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title"
}) => (
  <div>
    <Head>
      <title>{title} | Store Admin</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="dash-main">
      <div>
        <SidebarAdmin />
      </div>
      <div className="dash-pages">
        <HeaderAdmin />
        <Container>{children}</Container>
        <footer>
          <hr />
          <span>I'm here to stay (Footer admin)</span>
        </footer>
      </div>
    </div>
  </div>
);

export default LayoutAdmin;
