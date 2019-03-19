import React, { PureComponent } from "react";
import Link from "next/link";
import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Badge
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
        <Navbar color="white" light expand="xs" className="cl-navbar">
          <Container>
            <Link href="/" passHref>
              <NavbarBrand>Store</NavbarBrand>
            </Link>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link href="/about" passHref>
                  <NavLink>Account</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <MdSearch size={25} />
                </NavLink>
              </NavItem>
              <NavItem className="bg-primary text-white">
                <NavLink href="#">
                  <MdShoppingBasket size={25} className="text-white" />
                  <span className="text-white cart-count">12</span>
                </NavLink>
              </NavItem>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default HeaderClient;
