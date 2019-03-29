import React from "react";
import { MyContext } from "../interfaces/MyContext";
import { LogoutDocument } from "../generated/apolloComponents";
import redirect from "../lib/redirect";

const Logout = () => {
  return null;
};

Logout.getInitialProps = async ({ apolloClient, ...ctx }: MyContext) => {
  await apolloClient.mutate({ mutation: LogoutDocument });
  await apolloClient.resetStore();
  redirect(ctx, "/login");
  return {};
};

export default Logout;
