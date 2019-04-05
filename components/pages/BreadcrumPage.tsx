import * as React from "react";

import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import Link from "next/link";

interface Props {
  title: string;
  layout: string;
}

const BreadcrumPage: React.FC<Props> = ({ title, layout }) => {
  return (
    <Breadcrumb tag="nav" listTag="div">
      {layout === "client" ? (
        <Link href="/" passHref>
          <BreadcrumbItem tag="a">Home</BreadcrumbItem>
        </Link>
      ) : (
        <Link href="/admin" passHref>
          <BreadcrumbItem tag="a">Home</BreadcrumbItem>
        </Link>
      )}

      <BreadcrumbItem active tag="span">
        {title}
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default BreadcrumPage;
