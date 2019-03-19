import * as React from "react";
import Link from "next/link";
import Layout from "../components/Layout/Layout";

const AboutPage: React.FunctionComponent = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
      <img src="/static/images/right-arrow.svg" />
    </p>
  </Layout>
);

export default AboutPage;
