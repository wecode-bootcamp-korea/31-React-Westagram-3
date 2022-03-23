import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginComponent.scss';

const LoginComponent = () => {
  const [inputs, setInputs] = useState({
    username: '',
    pwd: '',
  });
  const navigate = useNavigate();
  const API = '';

  const handleInput = e => {
    setInputs(inputs => ({
      ...inputs, //기존객체 오버라이드한다는 뜻인가
      [e.target.className]: e.target.value,
    }));
  };

  let checkValidity =
    inputs.username.includes('@') && inputs.pwd.length > 4 ? true : false;

  const handleLogin = e => {
    e.preventDefault();

    fetch(API, {
      method: 'POST',
      body: JSON.stringify({
        email: inputs.username,
        password: inputs.pwd,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.token) {
          navigate('/main-jaewoong');
        } else alert('ID와 비밀번호를 다시 확인해주세요');
      });
  };
  //form이 아닌 button에 이벤트 걸것. e.preventDefault걸면서 submit타입 선언 불필요
  return (
    <form className="loginForm">
      <input
        className="username"
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
        className={checkValidity ? 'btnActivate' : 'loginBtn'}
        disabled={checkValidity ? false : true}
        onClick={handleLogin}
      >
        login
      </button>
    </form>
  );
};
export default LoginComponent;
