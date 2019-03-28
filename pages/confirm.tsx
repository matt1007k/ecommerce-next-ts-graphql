import * as React from "react";
import { MyContext } from "../interfaces/MyContext";
import {
  ConfirmUserMutation,
  ConfirmUserMutationVariables,
  ConfirmUserDocument
} from "../generated/apolloComponents";
import redirect from "../lib/redirect";

export default class Confirn extends React.PureComponent {
  static async getInitialProps({
    query: { token },
    apolloClient,
    ...ctx
  }: MyContext) {
    if (!token) {
      return {};
    }
    await apolloClient.mutate<
      ConfirmUserMutation,
      ConfirmUserMutationVariables
    >({
      mutation: ConfirmUserDocument,
      variables: {
        token: token as string
      }
    });

    redirect(ctx, "/login");
    return {};
  }

  render() {
    return "Something went wrong";
  }
}
