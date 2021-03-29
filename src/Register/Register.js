import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <form action="">
      <div className="form-input-box">
        <label for="username">Username</label>
        <input type="text" name="username" id="username" required autoFocus />
      </div>
      <div className="form-input-box">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" required />
      </div>
      <button type="submit">Sign On</button>
    </form>
  )
}

export default Register;