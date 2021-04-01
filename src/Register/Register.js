import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <div className="modal">
      <form action="" className="modal-content">
        <div className="form-input-box">
          <label for="firstName">First Name</label>
          <input type="text" name="firstName" id="firstName" required autoFocus />
        </div>
        <div className="form-input-box">
          <label for="lastName">Last Name</label>
          <input type="text" name="lastName" id="lastName" required />
        </div>
        <div className="form-input-box">
          <label for="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="form-input-box">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <div className="form-input-box">
          <label for="passwordCheck">Re-type password</label>
          <input type="password" name="passwordCheck" id="passwordCheck" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;