import React, { useState } from 'react';

const PasswordToggle = (props) => {
  const [passwordToggleText, setPasswordToggleText] = useState('Show');

  const onClickTogglePasswordVisibility = (e) => {
    if (props.passwordType === 'password') {
      props.setPasswordType('text');
      setPasswordToggleText('Hide');
    } else {
      props.setPasswordType('password');
      setPasswordToggleText('Show')
    }
  }

  return (
    <span className="toggle-password-visibility " onClick={onClickTogglePasswordVisibility}>
      {passwordToggleText}
    </span>
  );
}

export default PasswordToggle;