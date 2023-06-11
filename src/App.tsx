import { Paths } from "../paths";
import { Layout } from "./components/layout";
import { CustomForm } from "./components/custom-form";
import { Link, useNavigate } from "react-router-dom";
import React from "react";

export const App = () => {
  return (
    <Layout>
      <CustomForm name="Email" placeholder="Email" />
      <Link to={Paths.login}>psdasda</Link>
    </Layout>
  );
};
