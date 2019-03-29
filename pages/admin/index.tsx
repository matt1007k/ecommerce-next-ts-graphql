import React, { PureComponent } from "react";
import Layout from "../../components/Layout/Layout";
import { MeComponent } from "../../generated/apolloComponents";
import { NavLink, NavItem } from "reactstrap";
import Link from "next/link";

export class AdminPage extends PureComponent {
  render() {
    return (
      <Layout title="Dashboard page">
        <MeComponent>
          {({ data }) => (
            <div>
              {data && data.me ? `Hello ${data.me.firstName}` : "Loading..."}
              <NavItem>
                <Link href="/logout" passHref>
                  <NavLink>Logout</NavLink>
                </Link>
              </NavItem>
            </div>
          )}
        </MeComponent>
      </Layout>
    );
  }
}

export default AdminPage;
