import React, { useState } from 'react';
import '../Login/Login.scss';

const Login = () => {
  const [validId, setValidId] = useState('');
  const [validPw, setValidPw] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleIdInput = e => {
    setValidId(e.target.value);
    isPassedLogin();
  };

  const handlePwInput = e => {
    setValidPw(e.target.value);
    isPassedLogin();
  };

  const isPassedLogin = () => {
    validId.includes('@') && validPw.length > 4
      ? setIsActive(true)
      : setIsActive(false);
  };

  return (
    <div className="container">
      <div className="login">
        <h1 className="logo">westagram</h1>
        <div className="login-form">
          <input
            type="text"
            id="user_id"
            onChange={handleIdInput}
            autoComplete="off"
            placeholder="전화번호,사용자 이름 또는 이메일"
          />
          <input
            type="password"
            id="user_pw"
            onChange={handlePwInput}
            autoComplete="off"
            placeholder="비밀번호"
          />
          <button
            type="button"
            className={isActive ? 'btn-login active' : 'btn-login'}
            disabled={isActive ? true : false}
          >
            로그인
          </button>
        </div>
        <p className="find-password">비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
};

export default Login;
