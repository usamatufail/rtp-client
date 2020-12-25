import { Row, Col } from "antd";
import { LoginForm } from "./LoginForm.component";
import { withoutAuth, withLoading } from "hocs";
import "./Login.styles.scss";

const Login = () => {
  return (
    <Row className="login">
      <Col span={24}>
        <Row align="middle" justify="center">
          <Col
            span={12}
            style={{ display: "inline-flex", justifyContent: "center" }}
          >
            <LoginForm />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default withLoading(withoutAuth(Login));
