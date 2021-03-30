import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <React.Fragment>
      <form action="">
        <div className="form-input-box">
          <label for="email">Email</label>
          <input type="email" name="email" id="email" required autoFocus />
        </div>
        <div className="form-input-box">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <input type="checkbox" name="remember" id="remember"></input>
        <label className="remember" for="remember">Remember</label>
        <button type="submit">Sign On</button>
      </form>
      <div className="register-links">
        <a href="http://">Register</a>
        <p>|</p>
        <a href="http://">Forgot Password?</a>
      </div>
    </React.Fragment>
  );
}

export default Login;