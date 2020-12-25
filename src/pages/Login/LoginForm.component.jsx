import React from "react";
import { Form, Input, Button, Typography, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { useAuth } from "context/AuthContext";

export const LoginForm = () => {
  const [form] = Form.useForm();

  //Extracting login function from authContext
  const { login, loading } = useAuth();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const { email, password } = values;
    login(email, password);
  };

  return (
    <div style={{ minWidth: "375px" }}>
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
            loading={loading}
            type="primary"
            htmlType="submit"
            style={{ marginTop: "1rem", width: "100%" }}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
      <Row gutter={16} align="middle" justify="center">
        <Col>
          <Link to="/forgot-password">Forgot password?</Link>
        </Col>
        <Col>|</Col>
        <Col>
          <Link to="/signup">Sign up for Rich to Poor</Link>
        </Col>
      </Row>
    </div>
  );
};
