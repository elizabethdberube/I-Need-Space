import React from "react";

function Login() {
  return (
    <>
      <div><h1 className=" mx-auto d-flex justify-content-center">Let's Space Out!</h1></div>
      <div className="row d-flex pt-4">
        <div className="col-md-3 mx-auto">

          <form className="justify-content-center">
            <h2>Log In</h2>

            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Email" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Password" />
            </div>

            <button type="submit" className="btn btn-secondary btn-lg btn-block mt-2">Sign In </button>

          </form>
        </div>
        <div className="col-md-3 mx-auto">

          <form className="justify-content-center">
            <h2>Sign Up</h2>

            <div className="form-group">
              <label>Space Alias</label>
              <input type="text" className="form-control" placeholder="Name" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Email" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Password" />
            </div>

            <button type="submit" className="btn btn-secondary btn-lg btn-block mt-2">Sign Up </button>

          </form>
        </div>
      </div>
    </>

  )
};

export default Login;