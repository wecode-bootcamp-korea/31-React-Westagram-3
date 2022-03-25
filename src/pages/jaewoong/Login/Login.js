import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Join from './Join/Join';
import './Login.scss';

const SERVER_URL = 'sample';

const Login = () => {
  const [userInput, setUserInput] = useState({
    id: '',
    pwd: '',
  });
  const [joinPage, setJoinPage] = useState(false);

  const handleInput = e => {
    setUserInput(userInput => ({
      ...userInput,
      [e.target.className]: e.target.value,
    }));
  };

  const isUserInputValid =
    userInput.id.includes('@') && userInput.pwd.length > 4 ? true : false;

  const isJoinpageOpened = () => {
    setJoinPage(!joinPage);
  };

  const goToMain = e => {
    e.preventDefault();
    Navigate('/main-jaewoong');
  };
  return (
    <div id="loginPage">
      <main className="loginContainer">
        <h1 className="loginTitle">westagram</h1>
        <form className="loginForm">
          <input
            className="id"
            placeholder="전화번호,사용자 이름 또는 이메일"
            type="email"
            onChange={handleInput}
          />
          <input
            className="pwd"
            type="password"
            placeholder="비밀번호"
            minLength={5}
            autoComplete="on"
            onChange={handleInput}
          />
          <button
            className={isUserInputValid ? 'btnActivate' : 'loginBtn'}
            disabled={isUserInputValid ? false : true}
            onClick={goToMain}
          >
            login
          </button>
        </form>
        <Join joinPage={joinPage} />
        <button onClick={isJoinpageOpened}>회원가입</button>
        <a href="www" className="forgetPwd gray">
          비밀번호를 잊으셨나요?
        </a>
      </main>
    </div>
  );
};

export default Login;
