import { Row, Col, Typography } from 'antd';
import { withoutAuth, withLoading } from 'hocs';
import Lottie from 'react-lottie';
import { RegistrationForm } from './RegistrationForm.component';
import animationData from './SignUpAnimation.json';
import './SignUp.styles.scss';

const SignUp = () => (
  <Row className="signup" align="middle">
    <Col span={12}>
      <Typography.Title
        level={2}
        style={{ textAlign: 'center', marginBottom: 0 }}
      >
        JOIN US
      </Typography.Title>
      <Typography.Title
        level={4}
        style={{ textAlign: 'center', marginTop: 0 }}
      >
        as Donor, NGO, Brand Partner, Volunteer or Donee
      </Typography.Title>
      <div className="signup__react-lottie-wrapper">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            },
          }}
          height={400}
          width={400}
        />
      </div>
    </Col>
    <Col span={12}>
      <Row align="middle" justify="center">
        <Col
          span={12}
          style={{ display: 'inline-flex', justifyContent: 'center' }}
        >
          <RegistrationForm />
        </Col>
      </Row>
    </Col>
  </Row>
);

export default withLoading(withoutAuth(SignUp));
