import React, { useState } from 'react';
import './Login.css';
import Register from '../Register/Register';
import PasswordToggle from '../PasswordToggle/PasswordToggle';

const Login = () => {
  const [registerFormOpen, setRegisterFormOpen] = useState(false);
  const [passwordType, setPasswordType] = useState('password');

  const onClickRegister = () => {
    setRegisterFormOpen(!registerFormOpen);
  }

  return (
    <React.Fragment>
      <form action="">
        <div className="form-input-box">
          <label htmlFor="login-email">Email</label>
          <input type="email" name="login-email" id="login-email" required autoFocus />
        </div>
        <div className="form-input-box">
          <label htmlFor="login-password">Password
            <PasswordToggle passwordType={passwordType} setPasswordType={setPasswordType} />
          </label>
          <input type={passwordType} name="login-password" id="login-password" required />
        </div>
        <input type="checkbox" name="remember" id="remember"></input>
        <label className="remember" htmlFor="remember">Remember</label>
        <button type="submit">Sign On</button>
      </form>
      <div className="register-links">
        <p onClick={onClickRegister}>Register</p>
        <span>|</span>
        <p >Forgot Password?</p>
      </div>
      {registerFormOpen && <Register onClickClose={setRegisterFormOpen} />}
    </React.Fragment>
  );
}

export default Login;