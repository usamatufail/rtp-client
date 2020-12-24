import React from "react";
import { Form, Input, Button, Typography, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { useAuth } from "context/AuthContext";

export const ForgotPasswordForm = () => {
  const [form] = Form.useForm();

  //Extracting resetPassword function from authContext
  const { resetPassword } = useAuth();

  const onFinish = (values) => {
    const { email } = values;
    resetPassword(email);
  };

  return (
    <div style={{ minWidth: "375px" }}>
      <Typography.Title level={2}>Password Reset</Typography.Title>
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
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginTop: "1rem", width: "100%" }}
          >
            Reset Password
          </Button>
        </Form.Item>
      </Form>
      <Row gutter={16} align="middle" justify="center">
        <Col>
          <Link to="/login">Login</Link>
        </Col>
        <Col>|</Col>
        <Col>
          <Link to="/signup">Sign up for Rich to Poor</Link>
        </Col>
      </Row>
    </div>
  );
};
