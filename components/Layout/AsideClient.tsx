import React, { PureComponent } from "react";
import Link from "next/link";
import { Nav, NavItem, NavLink } from "reactstrap";

import { MdMoreHoriz } from "react-icons/md";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io";

class AsideClient extends PureComponent {
  render() {
    return (
      <div className="cl-aside">
        <Nav vertical className="">
          <NavItem>
            <Link href="/men" passHref>
              <NavLink>Men</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/women" passHref>
              <NavLink>Women</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/kids" passHref>
              <NavLink>Kids</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/sale" passHref>
              <NavLink>Sale</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <MdMoreHoriz size={28} />
            </NavLink>
          </NavItem>
        </Nav>
        {/* social */}
        <Nav vertical>
          <NavItem>
            <NavLink href="#">
              <IoLogoFacebook size={28} />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <IoLogoInstagram size={28} />
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default AsideClient;
