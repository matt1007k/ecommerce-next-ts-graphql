import * as React from "react";

import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import Link from "next/link";

interface Props {
  title: string;
}

const BreadcrumPage: React.FC<Props> = ({ title }) => {
  return (
    <Breadcrumb tag="nav" listTag="div">
      <Link href="/" passHref>
        <BreadcrumbItem tag="a">Home</BreadcrumbItem>
      </Link>
      <BreadcrumbItem active tag="span">
        {title}
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default BreadcrumPage;
