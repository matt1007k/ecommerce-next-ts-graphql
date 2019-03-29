type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Category = {
  id: Scalars["Float"];
  name: Scalars["String"];
  description: Scalars["String"];
};

export type CategoryInput = {
  name: Scalars["String"];
  description: Scalars["String"];
};

export type ChangePasswordInput = {
  password: Scalars["String"];
  token: Scalars["String"];
};

export type Mutation = {
  changePassword?: Maybe<User>;
  confirmUser: Scalars["Boolean"];
  forgotPassword: Scalars["Boolean"];
  login?: Maybe<User>;
  logout: Scalars["Boolean"];
  register: User;
  createCategory: Category;
};

export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};

export type MutationConfirmUserArgs = {
  token: Scalars["String"];
};

export type MutationForgotPasswordArgs = {
  email: Scalars["String"];
};

export type MutationLoginArgs = {
  password: Scalars["String"];
  email: Scalars["String"];
};

export type MutationRegisterArgs = {
  data: RegisterInput;
};

export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};

export type Query = {
  me?: Maybe<User>;
  hello: Scalars["String"];
};

export type RegisterInput = {
  password: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  email: Scalars["String"];
};

export type User = {
  id: Scalars["Float"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  email: Scalars["String"];
  name: Scalars["String"];
};
export type ChangePasswordMutationVariables = {
  data: ChangePasswordInput;
};

export type ChangePasswordMutation = { __typename?: "Mutation" } & {
  changePassword: Maybe<
    { __typename?: "User" } & Pick<
      User,
      "id" | "firstName" | "lastName" | "email" | "name"
    >
  >;
};

export type ConfirmUserMutationVariables = {
  token: Scalars["String"];
};

export type ConfirmUserMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "confirmUser"
>;

export type ForgotPasswordMutationVariables = {
  email: Scalars["String"];
};

export type ForgotPasswordMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "forgotPassword"
>;

export type LoginMutationVariables = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type LoginMutation = { __typename?: "Mutation" } & {
  login: Maybe<
    { __typename?: "User" } & Pick<
      User,
      "id" | "firstName" | "lastName" | "email" | "name"
    >
  >;
};

export type LogoutMutationVariables = {};

export type LogoutMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "logout"
>;

export type RegisterMutationVariables = {
  data: RegisterInput;
};

export type RegisterMutation = { __typename?: "Mutation" } & {
  register: { __typename?: "User" } & Pick<
    User,
    "id" | "firstName" | "lastName" | "email" | "name"
  >;
};

export type MeQueryVariables = {};

export type MeQuery = { __typename?: "Query" } & {
  me: Maybe<
    { __typename?: "User" } & Pick<
      User,
      "id" | "firstName" | "lastName" | "email" | "name"
    >
  >;
};

import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";

export const ChangePasswordDocument = gql`
  mutation ChangePassword($data: ChangePasswordInput!) {
    changePassword(data: $data) {
      id
      firstName
      lastName
      email
      name
    }
  }
`;

export class ChangePasswordComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      ChangePasswordMutation,
      ChangePasswordMutationVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        ChangePasswordMutation,
        ChangePasswordMutationVariables
      >
        mutation={ChangePasswordDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type ChangePasswordProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<
    ChangePasswordMutation,
    ChangePasswordMutationVariables
  >
> &
  TChildProps;
export type ChangePasswordMutationFn = ReactApollo.MutationFn<
  ChangePasswordMutation,
  ChangePasswordMutationVariables
>;
export function withChangePassword<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ChangePasswordMutation,
        ChangePasswordMutationVariables,
        ChangePasswordProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withMutation<
    TProps,
    ChangePasswordMutation,
    ChangePasswordMutationVariables,
    ChangePasswordProps<TChildProps>
  >(ChangePasswordDocument, operationOptions);
}
export const ConfirmUserDocument = gql`
  mutation ConfirmUser($token: String!) {
    confirmUser(token: $token)
  }
`;

export class ConfirmUserComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<ConfirmUserMutation, ConfirmUserMutationVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<ConfirmUserMutation, ConfirmUserMutationVariables>
        mutation={ConfirmUserDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type ConfirmUserProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<ConfirmUserMutation, ConfirmUserMutationVariables>
> &
  TChildProps;
export type ConfirmUserMutationFn = ReactApollo.MutationFn<
  ConfirmUserMutation,
  ConfirmUserMutationVariables
>;
export function withConfirmUser<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ConfirmUserMutation,
        ConfirmUserMutationVariables,
        ConfirmUserProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withMutation<
    TProps,
    ConfirmUserMutation,
    ConfirmUserMutationVariables,
    ConfirmUserProps<TChildProps>
  >(ConfirmUserDocument, operationOptions);
}
export const ForgotPasswordDocument = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;

export class ForgotPasswordComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      ForgotPasswordMutation,
      ForgotPasswordMutationVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        ForgotPasswordMutation,
        ForgotPasswordMutationVariables
      >
        mutation={ForgotPasswordDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type ForgotPasswordProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >
> &
  TChildProps;
export type ForgotPasswordMutationFn = ReactApollo.MutationFn<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;
export function withForgotPassword<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ForgotPasswordMutation,
        ForgotPasswordMutationVariables,
        ForgotPasswordProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withMutation<
    TProps,
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables,
    ForgotPasswordProps<TChildProps>
  >(ForgotPasswordDocument, operationOptions);
}
export const LoginDocument = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      firstName
      lastName
      email
      name
    }
  }
`;

export class LoginComponent extends React.Component<
  Partial<ReactApollo.MutationProps<LoginMutation, LoginMutationVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<LoginMutation, LoginMutationVariables>
        mutation={LoginDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type LoginProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<LoginMutation, LoginMutationVariables>
> &
  TChildProps;
export type LoginMutationFn = ReactApollo.MutationFn<
  LoginMutation,
  LoginMutationVariables
>;
export function withLogin<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        LoginMutation,
        LoginMutationVariables,
        LoginProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withMutation<
    TProps,
    LoginMutation,
    LoginMutationVariables,
    LoginProps<TChildProps>
  >(LoginDocument, operationOptions);
}
export const LogoutDocument = gql`
  mutation Logout {
    logout
  }
`;

export class LogoutComponent extends React.Component<
  Partial<ReactApollo.MutationProps<LogoutMutation, LogoutMutationVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<LogoutMutation, LogoutMutationVariables>
        mutation={LogoutDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type LogoutProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<LogoutMutation, LogoutMutationVariables>
> &
  TChildProps;
export type LogoutMutationFn = ReactApollo.MutationFn<
  LogoutMutation,
  LogoutMutationVariables
>;
export function withLogout<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        LogoutMutation,
        LogoutMutationVariables,
        LogoutProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withMutation<
    TProps,
    LogoutMutation,
    LogoutMutationVariables,
    LogoutProps<TChildProps>
  >(LogoutDocument, operationOptions);
}
export const RegisterDocument = gql`
  mutation Register($data: RegisterInput!) {
    register(data: $data) {
      id
      firstName
      lastName
      email
      name
    }
  }
`;

export class RegisterComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<RegisterMutation, RegisterMutationVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<RegisterMutation, RegisterMutationVariables>
        mutation={RegisterDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type RegisterProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<RegisterMutation, RegisterMutationVariables>
> &
  TChildProps;
export type RegisterMutationFn = ReactApollo.MutationFn<
  RegisterMutation,
  RegisterMutationVariables
>;
export function withRegister<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        RegisterMutation,
        RegisterMutationVariables,
        RegisterProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withMutation<
    TProps,
    RegisterMutation,
    RegisterMutationVariables,
    RegisterProps<TChildProps>
  >(RegisterDocument, operationOptions);
}
export const MeDocument = gql`
  query Me {
    me {
      id
      firstName
      lastName
      email
      name
    }
  }
`;

export class MeComponent extends React.Component<
  Partial<ReactApollo.QueryProps<MeQuery, MeQueryVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<MeQuery, MeQueryVariables>
        query={MeDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type MeProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<MeQuery, MeQueryVariables>
> &
  TChildProps;
export function withMe<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        MeQuery,
        MeQueryVariables,
        MeProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withQuery<
    TProps,
    MeQuery,
    MeQueryVariables,
    MeProps<TChildProps>
  >(MeDocument, operationOptions);
}
