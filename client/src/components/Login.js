import React, { useState } from "react";

import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER, ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth.js';
import "./PictureStyle.css"

function Login() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { errorUser, dataUser }] = useMutation(ADD_USER);
  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // login
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);

      localStorage.setItem('username', data.login.user.username);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  //Signup
  const getChange = (event) => {
    const { username, value } = event.target;

    setForm({
      ...form,
      [username]: value,
    });
  };

  const getFormSubmit = async (event) => {
    event.preventDefault();


    try {
      const { dataUser } = await addUser({
        variables: { ...form },
      });

      Auth.login(dataUser.addUser.token);
      localStorage.setItem('username', dataUser.addUser.login.user.username);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <div className="wrapper"><h1 className=" mx-auto d-flex justify-content-center">Let's Space Out!</h1></div>
      <div className="row d-flex pt-4">
        <button className="btn btn-info btn-block py-1" onClick={(event) => Auth.logout()}>Logout</button>
        <div className="col-md-3 mx-auto">
          {data ? (
            <p>
              Success! You may now head
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
            <form className="justify-content-center" onSubmit={handleFormSubmit}>
              <h2>Log In</h2>

              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Email" name="email" value={formState.email}
                  onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" name="password" value={formState.password}
                  onChange={handleChange} />
              </div>

              <button type="submit" className="btn btn-secondary btn-lg btn-block mt-2">Sign In </button>

            </form>)}

          {error && (
            <div className="my-3 p-3 bg-danger text-white">
              {error.message}
            </div>
          )}
        </div>
        <div className="col-md-3 mx-auto">
          {dataUser ? (
            <p>
              Success! You may now head{' '}
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
            <form className="justify-content-center" onSubmit={getFormSubmit}>
              <h2>Sign Up</h2>

              <div className="form-group">
                <label>Space Alias</label>
                <input type="username" name="username" className="form-control" placeholder="Name" value={form.name}
                  onChange={getChange} />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" className="form-control" placeholder="Email" value={form.email}
                  onChange={getChange} />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" className="form-control" placeholder="Password" value={form.password}
                  onChange={getChange} />
              </div>

              <button type="submit" className="btn btn-secondary btn-lg btn-block mt-2">Sign Up </button>

            </form>
          )}

          {errorUser && (
            <div className="my-3 p-3 bg-danger text-white">
              {errorUser.message}
            </div>
          )}
        </div>
      </div>
    </>

  )
}
export default Login;