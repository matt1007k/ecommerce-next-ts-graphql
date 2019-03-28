import React, { PureComponent } from "react";
import Link from "next/link";
import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Badge,
  Button
} from "reactstrap";

import { MdSearch, MdShoppingBasket } from "react-icons/md";

interface Props {}

interface State {
  isOpen: boolean;
}

class HeaderClient extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="primary" dark expand="xs" className="cl-navbar">
          <Container>
            <Link href="/" passHref>
              <NavbarBrand>Store</NavbarBrand>
            </Link>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link href="/sales" passHref>
                  <NavLink>Sales</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/about" passHref>
                  <NavLink>About</NavLink>
                </Link>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">
                  <MdSearch size={25} />
                </NavLink>
              </NavItem>
              <NavItem>
                <Link href="/login" passHref>
                  <NavLink>Login</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/register" passHref>
                  <NavLink>Register</NavLink>
                </Link>
              </NavItem>

              <NavItem>
                <Link href="/cart" passHref>
                  <NavLink href="#">
                    <h5 className="no-margin">
                      <MdShoppingBasket size={25} className="text-white" />{" "}
                      <Badge color="info">0</Badge>
                    </h5>
                  </NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default HeaderClient;
