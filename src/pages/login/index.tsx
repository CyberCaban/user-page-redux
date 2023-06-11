import React from "react";
import { Paths } from "../../../paths";
import { Link } from "react-router-dom";
import { Layout } from "../../components/layout";

export const Login = () => {
  return (
    <Layout>
      <Link to={Paths.register}>Register</Link>
    </Layout>
  );
};
