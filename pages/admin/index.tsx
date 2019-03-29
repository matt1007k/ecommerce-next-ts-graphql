import React, { PureComponent } from "react";
import Layout from "../../components/Layout/Layout";
import { MeComponent } from "../../generated/apolloComponents";

export class AdminPage extends PureComponent {
  render() {
    return (
      <Layout title="Dashboard page">
        <MeComponent>
          {({ data }) => (
            <div>
              {data && data.me ? `Hello ${data.me.firstName}` : "...Loading"}
            </div>
          )}
        </MeComponent>
      </Layout>
    );
  }
}

export default AdminPage;
