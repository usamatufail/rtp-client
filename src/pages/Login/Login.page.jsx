import { Row, Col } from 'antd';
import { withoutAuth, withLoading } from 'hocs';
import { LoginForm } from './LoginForm.component';
import './Login.styles.scss';

const Login = () => (
  <Row className="login">
    <Col span={24}>
      <Row align="middle" justify="center">
        <Col
          span={12}
          style={{ display: 'inline-flex', justifyContent: 'center' }}
        >
          <LoginForm />
        </Col>
      </Row>
    </Col>
  </Row>
);

export default withLoading(withoutAuth(Login));
