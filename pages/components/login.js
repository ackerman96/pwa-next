import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { connect , useDispatch} from 'react-redux';
import {login} from '../function/mainThunks';
import {
  SelectField,
  TextField,
  CheckboxField
} from 'redux-form-antd'
import { reduxForm, Field } from 'redux-form';
const formConfig = {
  form: 'LoginForm',
  destroyOnUnmount: true,
  initialValues: {

  },
  onSubmit: (values, dispatch, {}) => {
    // dispatch(login())
    dispatch(login())
  },
  validate: (values) =>{ 
    console.log('values', values)

    return({
    // email: values.email ? undefined : 'Email is required',
    password: values.password ? undefined : 'Password is required',
    // confirmPassword: values.confirmPassword ? undefined : 'Confirm Password is required',
    // agreement: values.agreement ? undefined : 'Should accept agreement',
    // passwordMatch: values.password === values.confirmPassword ? undefined : 'Passwords do not match',
    username: values.username ? undefined : 'Username is required',
  })},
};

const App = (props) => {
  const dispatch = useDispatch()
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    dispatch(props.handleSubmit())
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onSubmit={props.handleSubmit()}
      onFinish={onFinish}
    >
      {/* <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item> */}
      <Field
      component={TextField}
      label= 'Username /  Email'
      name= 'username'
      placeholder='Username'
      type={'text'}
      />
      <Field
      component={TextField}
      label= 'Password'
      name= 'password'
      placeholder='Password'
      type={'text'}
      />

      {/* <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item> */}
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit"  className="login-form-button">
          Log in
        </Button>
        Or <a href="/components/register">register now!</a>
      </Form.Item>
    </Form>
  );
};

const LoginPage = reduxForm(formConfig)(App);
const mapDispatchToProps = (dispatch) => ({
})
const mapStateToProps = (state) => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
// export default App;