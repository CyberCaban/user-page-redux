import { Layout } from "../../components/layout";
import { Form, Button, Card, Space, Typography, Row } from "antd";
import { CustomForm } from "../../components/custom-form";
import React from "react";
import { Paths } from "../../../paths";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="Зарегистрируйтесь" style={{ width: "30rem" }}>
          <Form>
            <CustomForm name="name" placeholder="Имя"></CustomForm>
            <CustomForm name="email" placeholder="Email"></CustomForm>
            <CustomForm name="password" placeholder="Пароль"></CustomForm>
            <Button type="primary">Зарегистрироваться</Button>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>
              Уже есть аккаунт? <Link to={Paths.login}>Войти</Link>
            </Typography.Text>
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};
