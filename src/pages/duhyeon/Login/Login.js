import React from 'react';
import '../Login/Login.scss';

const Login = () => {
  return (
    <div className="container">
      <div className="login">
        <h1 className="logo">westagram</h1>
        <div className="login-form">
          <input
            type="text"
            id="user_id"
            placeholder="전화번호,사용자 이름 또는 이메일"
          />
          <input type="password" id="user_pw" placeholder="비밀번호" />
          <button type="button" className="btn-login" disabled>
            로그인
          </button>
        </div>
        <p className="find-password">비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
};

export default Login;
