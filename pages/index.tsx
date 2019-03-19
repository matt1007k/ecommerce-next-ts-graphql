import * as React from "react";
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import SliderHome from "../components/animations/SliderHome";

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Home">
      <SliderHome />
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
