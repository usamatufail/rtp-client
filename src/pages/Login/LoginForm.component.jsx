import React from "react";
import { Form, Input, Button, Typography } from "antd";
import { useAuth } from "context/AuthContext";

export const LoginForm = () => {
  const [form] = Form.useForm();

  //Extracting login function from authContext
  const { login } = useAuth();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const { email, password } = values;
    login(email, password);
  };

  return (
    <>
      <Typography.Title level={2}>Log in</Typography.Title>
      <Form
        layout={"vertical"}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginTop: "1rem" }}
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
