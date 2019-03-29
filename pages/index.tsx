import React, { useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout/Layout";
// import SliderHome from "../components/animations/SliderHome";

const IndexPage: React.FunctionComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <Layout title="Home">
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/admin">
          <a>Admin</a>
        </Link>
        <div>
          <p>{count}</p>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </p>
    </Layout>
  );
};

export default IndexPage;
