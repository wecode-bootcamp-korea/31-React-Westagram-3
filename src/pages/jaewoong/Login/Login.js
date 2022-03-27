import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Join from './Join/Join';
import './Login.scss';
const Login = () => {
  const [userInput, setUserInput] = useState({
    id: '',
    pwd: '',
  });
  const [joinPage, setJoinPage] = useState(false);
  const navigate = useNavigate();

  const isJoinpageOpened = () => {
    setJoinPage(!joinPage);
  };

  const SERVER_URL = 'sample';
  const handleInput = e => {
    setUserInput(() => ({
      ...userInput,
      [e.target.className]: e.target.value,
    }));
  };

  const isUserInputValid =
    userInput.id.includes('@') && userInput.pwd.length > 4 ? true : false;

  const loginHandler = e => {
    e.preventDefault();
    fetch(SERVER_URL, {
      method: 'POST',
      body: JSON.stringify({
        email: userInput.username,
        password: userInput.pwd,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.statusCode === 404) {
          throw new Error('Not Found');
        } else if (response.statusCode === 200) {
          return response.json();
        } else {
          throw new Error('Unexpected Http Status Code');
        }
      })
      .then(result => {
        console.log('서버에서 보낸 토큰확인되었습니다.');
        navigate('/main-jaewoong');
      })
      .catch(error => {
        console.log('에러발생');
        navigate('/main-jaewoong');
      });
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
            onClick={loginHandler}
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
