import { Row, Col } from "antd";
import { RegistrationForm } from "./RegistrationForm.component";
import { withoutAuth } from "hocs";
import "./SignUp.styles.scss";

const SignUp = () => {
  return (
    <Row className="signup">
      <Col span={24}>
        <Row align="middle" justify="center">
          <Col span={12}>
            <RegistrationForm />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default withoutAuth(SignUp);
