import React, { useRef, useState } from 'react';
import './Register.css';

const Register = (props) => {
  const div = useRef();

  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const handleClickOutside = (e) => {
    if (div.current === e.target) {
      props.onClickOutside();
    }
  }

  const handleClickIcon = () => {
    props.onClickOutside();
  }

  const onChangeRegisterPassword = (e) => {
    let value = e.target.value;

    let checkUpperCase = /[A-Z]/g;
    let checkNumber = /[0-9]/g;
    let letterResult = checkUpperCase.test(value);
    let numberResult = checkNumber.test(value);

    if (!(letterResult && numberResult)) {
      setPasswordErrorMessage("Must include capital letter and a number!");
    } else if (value.length < 8) {
      setPasswordErrorMessage("At least 8 characters required!");
    } else {
      setPasswordErrorMessage("");
    }

  }

  return (
    <div ref={div} className="modal" onClick={handleClickOutside}>
      <form action="" className="modal-content">
        <span className="close-icon" ><i onClick={handleClickIcon} className="fas fa-times"></i></span>
        <div className="form-input-box">
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" id="firstName" required autoFocus />
        </div>
        <div className="form-input-box">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" id="lastName" required />
        </div>
        <div className="form-input-box">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="form-input-box">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={onChangeRegisterPassword}
            required
          />
          <p className="error-message">{passwordErrorMessage}</p>
        </div>
        <div className="form-input-box">
          <label htmlFor="passwordCheck">Re-type password</label>
          <input type="password" name="passwordCheck" id="passwordCheck" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;