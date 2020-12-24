import { Row, Col } from "antd";
import { ForgotPasswordForm } from "./ForgotPasswordForm.component";
import { withoutAuth } from "hocs";
import "./ForgotPassword.styles.scss";

const Login = () => {
  return (
    <Row className="login">
      <Col span={24}>
        <Row align="middle" justify="center">
          <Col
            span={12}
            style={{ display: "inline-flex", justifyContent: "center" }}
          >
            <ForgotPasswordForm />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default withoutAuth(Login);
