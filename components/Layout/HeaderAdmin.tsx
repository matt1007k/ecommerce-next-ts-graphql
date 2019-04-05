import React, { PureComponent } from "react";
import Link from "next/link";
import { Navbar, Nav, NavItem, NavLink, Badge, Input } from "reactstrap";

import { MdSearch, MdStore, MdNotifications, MdPeople } from "react-icons/md";
import { MeComponent } from "../../generated/apolloComponents";

interface Props {}

interface State {
  isOpen: boolean;
}

class HeaderAdmin extends PureComponent<Props, State> {
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
        <Navbar color="light" light expand="xs" className="dash-header">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">
                <MdSearch size={25} />
              </NavLink>
            </NavItem>
            <NavItem>
              <Input placeholder="Search..." />
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link href="/admin/customers" passHref>
                <NavLink>
                  <MdPeople size={25} />
                </NavLink>
              </Link>
            </NavItem>

            <NavItem>
              <NavLink href="#">
                <h5 className="no-margin">
                  <MdNotifications size={25} /> <Badge color="info">0</Badge>
                </h5>
              </NavLink>
            </NavItem>
            <MeComponent>
              {({ data }) => (
                <NavItem>
                  {data && data.me ? (
                    <NavLink href="#">{data.me.name}</NavLink>
                  ) : (
                    "No user"
                  )}
                </NavItem>
              )}
            </MeComponent>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default HeaderAdmin;
