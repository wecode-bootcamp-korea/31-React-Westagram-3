import { useState } from 'react';
import LoginComponent from './LoginComponent/LoginComponent';
import './Login.scss';
import Join from './Join/Join';
import React from 'react';

const Login = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };
  return (
    <div id="loginPage">
      <main className="loginContainer">
        <h1 className="loginTitle">westagram</h1>
        <LoginComponent />
        <Join show={show} />
        <button onClick={handleToggle}>회원가입</button>
        <a href="www" className="forgetPwd gray">
          비밀번호를 잊으셨나요?
        </a>
      </main>
    </div>
  );
};

export default Login;
