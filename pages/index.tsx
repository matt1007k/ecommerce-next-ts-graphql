import React from "react";
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import BannerHome from "../components/BannerHome";
// import SliderHome from "../components/animations/SliderHome";

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Home">
      <div className="page">
        <BannerHome />
      </div>
    </Layout>
  );
};

export default IndexPage;
