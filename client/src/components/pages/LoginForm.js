import React, { useState } from 'react';
import Auth from '../../utils/auth';
import { Form, Button, Alert } from 'react-bootstrap';
// import { useMutation } from '@apollo/client';

function LoginForm() {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  // const [loginUser] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setUserFormData({
      name: '',
      email: '',
      password: '',
    });
  };

  return (

    <Form noValidate validated={validated} onSubmit={handleFormSubmit} className="justify-content-center">
      <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
        Something went wrong with your login credentials!
      </Alert>
      <Form.Group>
        <h3>Log in</h3>
        <Form.Label htmlFor='email'>Email</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter email'
          name='email'
          onChange={handleInputChange}
          value={userFormData.email}
          required
        />
        <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor='password'>Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Enter password'
          name='password'
          onChange={handleInputChange}
          value={userFormData.password}
          required
        />
        <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
      </Form.Group>
      <Button
        disabled={!(userFormData.email && userFormData.password)}
        type='submit'
        variant='btn btn-secondary btn-lg btn-block mt-2'>
        Sign in
      </Button>
    </Form>

  );
}

export default LoginForm;