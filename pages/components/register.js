import {
  Button,
  Checkbox,
  Input,
  Form
} from 'antd';
import React, { useState } from 'react';
import { register } from '../function/mainThunks';
import { useDispatch, connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import {map} from 'lodash';
// import { Form, FormField } from 'redux-form-ant-design';
import {
  SelectField,
  TextField,
  CheckboxField
} from 'redux-form-antd'
const formConfig = {
  form: 'RegisterForm',
  destroyOnUnmount: true,
  initialValues: {

  },
  onSubmit: (values, dispatch, {registration}) => {
    console.log('sampai sini')
    dispatch(register())
  },
  validate: (values) =>{ 
    console.log('values', values)

    return({
    // email: values.email ? undefined : 'Email is required',
    // password: values.password ? undefined : 'Password is required',
    // confirmPassword: values.confirmPassword ? undefined : 'Confirm Password is required',
    // agreement: values.agreement ? undefined : 'Should accept agreement',
    // passwordMatch: values.password === values.confirmPassword ? undefined : 'Passwords do not match',
    // username: values.username ? undefined : 'Username is required',
  })},
};


const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const fields = [
  {
    label: 'E-Mail',
    name: 'email',
    fieldType: 'text',
    placeholder: 'E-Mail',
    component: 'TextField',
  },
  {
    label: 'Username',
    name: 'username',
    fieldType: 'text',
    placeholder: 'Username',
  },
  {
    label: 'Password',
    name: 'password',
    fieldType: 'password',
    placeholder: 'Password',
  },
  {
    label: 'Confirm Password',
    name: 'confirmPassword',
    fieldType: 'pasword',
    placeholder: 'Confirm Password',
  },
  {
    label: 'Checkbox',
    name: 'checkbox',
    fieldType: 'checkbox',
    placeholder: 'Checkbox',
  },
];

const Register = (props) => {
  const dispatch = useDispatch()
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    props.handleSubmit();
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      onSubmit={props.handleSubmit()}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
    >

      {/* {map(mapSectionFields(fields))} */}
      <Field
      component={TextField}
      name="email"
      label="E-Mail"
      placeholder="E-Mail"
      />
      <Field
      component={TextField}
      label= 'Username'
      name= 'username'
      placeholder='Username'
      type={'text'}
      />
      <Field
      component={TextField}
      name="password"
      label="Password"
      placeholder="Password"
      type={'password'}
      // rules={[

      // ]})
      />
      <Field
      component={TextField}
      name="confirmPassword"
      label="Confirm Password"
      placeholder="Confirm Password"
      type={'password'}
      />
      {/* <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Field
          component={Input}
          name="email"
          placeholder="Email"
          type={'email'}
        />
      </Form.Item>
       */}

      {/* <Form.Item
        name="username"
        label="Username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item> */}

      {/* <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Field
          component={Input}
          name="password"
          placeholder="Password"
          type={'password'}
        />
      </Form.Item> */}

      {/* <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Field
          component={Input}
          name="confirmPassword"
          placeholder="Confirm Password"
          type={'password'}
        />
      </Form.Item> */}
      {/* <Field
        component={NewInput}
        name="confirmPassword"
        label="Confirm Password"
        placeholder="Confirm Password"
        hasFeedback
        type={'password'}
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      /> */}
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the agreement 
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" >
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
const DecoratedForm = reduxForm(formConfig)(Register);

const mapDispatchToProps = (dispatch) => ({
  registration:  dispatch(register())

})
const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(DecoratedForm);