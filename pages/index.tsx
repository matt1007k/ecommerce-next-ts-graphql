import * as React from "react";
import Link from "next/link";
import Layout from "../components/Layout/Layout";
// import SliderHome from "../components/animations/SliderHome";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Home">
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Mutation
          mutation={gql`
            mutation {
              login(email: "test@test.com", password: "qqq") {
                id
                firstName
                lastName
                email
                name
              }
            }
          `}
        >
          {mutate => (
            <button
              onClick={async () => {
                const response = await mutate();
                console.log(response);
              }}
            >
              call login mutation
            </button>
          )}
        </Mutation>
      </p>
    </Layout>
  );
};

export default IndexPage;
