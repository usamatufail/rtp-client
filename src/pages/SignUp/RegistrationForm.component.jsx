import React from "react";
import {
  Form,
  Input,
  Checkbox,
  Button,
  Typography,
  Row,
  Col,
  Radio,
} from "antd";
import { Link } from "react-router-dom";
import { Loader } from "components";
import { useAuth } from "context/AuthContext";

export const RegistrationForm = () => {
  const [form] = Form.useForm();

  //Extracting signup function from authContext
  const { signup, loading } = useAuth();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const { email, password, userType } = values;
    signup(email, password, userType);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div style={{ minWidth: "375px" }}>
          <Typography.Title level={2}>Sign Up</Typography.Title>
          <Form
            layout={"vertical"}
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
          >
            <Form.Item
              name="userType"
              label="Register As"
              rules={[
                {
                  required: true,
                  message: "Please select how want to be part of us!",
                },
              ]}
            >
              <Radio.Group>
                <Radio value="donor">Donor</Radio>
                <Radio value="ngo">NGO</Radio>
                <Radio value="brandPartner">Brand Partner</Radio>
                <Radio value="donee">Donee</Radio>
                <Radio value="volunteer">Volunteer</Radio>
              </Radio.Group>
            </Form.Item>

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

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "The two passwords that you entered do not match!"
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject("Should accept agreement"),
                },
              ]}
            >
              <Checkbox>
                I have read the <a href="/">agreement</a>
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Button
                loading={loading}
                style={{ width: "100%" }}
                type="primary"
                htmlType="submit"
              >
                Register
              </Button>
            </Form.Item>
          </Form>
          <Row gutter={16} align="middle" justify="center">
            <Col>
              <Link to="/login">Already have an account? Login Now</Link>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};
