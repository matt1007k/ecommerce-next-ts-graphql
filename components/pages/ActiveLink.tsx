import { withRouter } from "next/router";
import Link from "next/link";
import React, { Children } from "react";
interface PropsC {
  href: string;
  activeClassName: string;
}
interface Props {
  router: any;
  children: any;
}
const ActiveLink: React.FC<Props & PropsC> = ({
  router,
  children,
  ...props
}) => {
  const child = Children.only(children);

  let className = child.props.className || "";
  if (router.pathname === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};

export default withRouter(ActiveLink);
