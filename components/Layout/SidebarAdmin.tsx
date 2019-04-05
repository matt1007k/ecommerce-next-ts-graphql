import React, { PureComponent } from "react";
import Link from "next/link";
import { Nav, NavItem, NavLink } from "reactstrap";

import {
  MdPeople,
  MdSettings,
  MdPowerSettingsNew,
  MdStore,
  MdMonetizationOn,
  MdShowChart,
  MdShoppingBasket,
  MdDashboard
} from "react-icons/md";

class SidebarAdmin extends PureComponent {
  render() {
    return (
      <div className="dash-sidebar">
        <Nav vertical>
          <div className="sd-header">
            <Link href="/admin" passHref>
              <a>Store Admin</a>
            </Link>
          </div>
          <NavItem>
            <Link href="/admin" passHref>
              <NavLink>
                <span className="icon">
                  <MdDashboard size={25} />
                </span>
                Dashboard
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/admin/orders" passHref>
              <NavLink>
                <span className="icon">
                  <MdPeople size={25} />
                </span>
                Orders
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/admin/products" passHref>
              <NavLink>
                <span className="icon">
                  <MdShoppingBasket size={25} />
                </span>
                Products
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/admin/customers" passHref>
              <NavLink>
                <span className="icon">
                  <MdPeople size={25} />
                </span>
                Customers
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/admin/analytics" passHref>
              <NavLink>
                <span className="icon">
                  <MdShowChart size={25} />
                </span>
                Analytics
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/admin/discounts" passHref>
              <NavLink>
                <span className="icon">
                  <MdMonetizationOn size={25} />
                </span>
                Discounts
              </NavLink>
            </Link>
          </NavItem>
        </Nav>
        {/* bottom */}
        <Nav vertical>
          <NavItem>
            <Link href="/admin/online-store" passHref>
              <NavLink>
                <span className="icon">
                  <MdStore size={25} />
                </span>
                Online Store
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/admin/settings" passHref>
              <NavLink>
                <span className="icon">
                  <MdSettings size={25} />
                </span>
                Settings
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/logout" passHref>
              <NavLink>
                <span className="icon">
                  <MdPowerSettingsNew size={25} />
                </span>
                Log Out
              </NavLink>
            </Link>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default SidebarAdmin;
