import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect  } from 'react-router-dom/cjs/react-router-dom.min';
import { FacebookOutlined, TwitterOutlined } from '@ant-design/icons';
import { Form, Input, Button } from 'antd';
import { AuthWrapper } from './style';
import Heading from '../../../../components/heading/heading';
import { register } from '../../../../redux/authentication/actionCreator';


const SignUp = () => {  
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    values: null,
  });

  const handleSubmit = values => {
    setState({ ...state, values });
    dispatch(register({ username: values.username, password: values.password, first_name: values.first_name, last_name: values.last_name, email: values.email }));
  };

  if(isAuthenticated){
    return(<Redirect to='/admin' />)
  }

  return (
    <AuthWrapper>
      <p className="auth-notice">
        Already have an account? <NavLink to="/">Sign In</NavLink>
      </p>
      <div className="auth-contents">
        <Form name="register" onFinish={handleSubmit} layout="vertical">
          <Heading as="h3">
            Sign Up to <span className="color-secondary">Admin</span>
          </Heading>
          <Form.Item label="First Name" name="first_name" rules={[{ required: true, message: 'Please input your first name!' }]}>
            <Input placeholder="first Name" />
          </Form.Item>
          <Form.Item label="Last Name" name="last_name" rules={[{ required: true, message: 'Please input your last name!' }]}>
            <Input placeholder="last Name" />
          </Form.Item>
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email Address"
            rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
          >
            <Input placeholder="name@example.com" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button className="btn-create" htmlType="submit" type="primary" size="large">
              Create Account
            </Button>
          </Form.Item>
          <p className="form-divider">
            <span>Or</span>
          </p>
          <ul className="social-login signin-social">
            <li>
              <a className="google-signup" href="/">
                <img src={require('../../../../static/img/google.png')} alt="" />
                <span>Sign up with Google</span>
              </a>
            </li>
            <li>
              <a className="facebook-sign" href="/">
                <FacebookOutlined />
              </a>
            </li>
            <li>
              <a className="twitter-sign" href="/">
                <TwitterOutlined />
              </a>
            </li>
          </ul>
        </Form>
      </div>
    </AuthWrapper>
  );
};

export default SignUp;
