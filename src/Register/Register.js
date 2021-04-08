import React, { useRef, useState } from 'react';
import './Register.css';

const Register = (props) => {
  const registerForm = useRef();

  const [userPassword, setUserPassword] = useState("");
  const [passwordCapitalLetterMessage, setPasswordCapitalLetterMessage] = useState("");
  const [passwordNumberMessage, setPasswordNumberMessage] = useState("");
  const [passwordLengthMessage, setPasswordLengthMessage] = useState("");
  const [passwordMatchMessage, setPasswordMatchMessage] = useState("");

  const handleClickOutside = (e) => {
    if (registerForm.current === e.target) {
      props.onClickClose();
    }
  }

  const handleClickClose = () => {
    props.onClickClose();
  }

  const onChangeRegisterPassword = (e) => {
    let passwordValue = e.target.value;
    setUserPassword(passwordValue);

    let checkUpperCase = /[A-Z]/g;
    let checkNumber = /[0-9]/g;
    let letterResult = checkUpperCase.test(passwordValue);
    let numberResult = checkNumber.test(passwordValue);

    letterResult
      ? setPasswordCapitalLetterMessage("")
      : setPasswordCapitalLetterMessage("Includes capital letter!");

    numberResult
      ? setPasswordNumberMessage("")
      : setPasswordNumberMessage("Includes a number!");

    passwordValue.length <= 8
      ? setPasswordLengthMessage("At least 8 characters!")
      : setPasswordLengthMessage("");
  }

  const onChangePasswordCheck = (e) => {
    userPassword !== e.target.value
      ? setPasswordMatchMessage("Password do not match!")
      : setPasswordMatchMessage("");
  }

  return (
    <div ref={registerForm} className="modal" onClick={handleClickOutside}>
      <i class="close-icon far fa-times-circle" onClick={handleClickClose}></i>
      <form action="" className="modal-content">
        <div className="form-input-box">
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" id="firstName" required autoFocus />
        </div>
        <div className="form-input-box">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" id="lastName" required />
        </div>
        <div className="form-input-box">
          <label htmlFor="register-email">Email</label>
          <input type="email" name="register-email" id="register-email" required />
        </div>
        <div className="form-input-box">
          <label htmlFor="register-password">Password</label>
          <input
            type="password"
            name="register-password"
            id="register-password"
            onChange={onChangeRegisterPassword}
            required
          />
        </div>
        <p className="error-message">{passwordLengthMessage}</p>
        <p className="error-message">{passwordCapitalLetterMessage}</p>
        <p className="error-message">{passwordNumberMessage}</p>
        <div className="form-input-box">
          <label htmlFor="passwordCheck">Re-type password</label>
          <input
            type="password"
            name="passwordCheck"
            id="passwordCheck"
            onChange={onChangePasswordCheck}
            required />
        </div>
        <p className="error-message">{passwordMatchMessage}</p>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;