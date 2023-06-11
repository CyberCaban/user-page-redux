import React from "react";
import { Form, Input } from "antd";

type Props = {
  name: string;
  placeholder: string;
};

export const CustomForm = ({ name, placeholder }: Props) => {
  return (
    <Form.Item
      name={name}
      rules={[{ required: true, message: "Обязательное поле" }]}
      shouldUpdate={true}
    >
      <Input placeholder={placeholder} size="large" />
    </Form.Item>
  );
};
