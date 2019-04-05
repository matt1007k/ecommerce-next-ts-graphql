import React, { PureComponent } from "react";
import { MeComponent } from "../../generated/apolloComponents";
import Link from "next/link";
import LayoutAdmin from "../../components/Layout/LayoutAdmin";

export class AdminPage extends PureComponent {
  render() {
    return (
      <LayoutAdmin title="Dashboard page">
        <MeComponent>
          {({ data }) => (
            <div>
              <p>
                {data && data.me ? `Hello ${data.me.firstName}` : "Loading..."}
              </p>
              <div>
                <Link href="/logout" passHref>
                  <a>Logout</a>
                </Link>
              </div>
            </div>
          )}
        </MeComponent>
      </LayoutAdmin>
    );
  }
}

export default AdminPage;
