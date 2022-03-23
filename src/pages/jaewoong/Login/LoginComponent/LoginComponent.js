import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginComponent.scss';

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');
  const navigate = useNavigate();
  const API = '';
  // const [inputValidation, setInputValidation] = useState(true);

  const handleIdInput = e => {
    // setUsername(e.target.value);
    const { value } = e.target;
    setUsername(value);
  };

  const handlePwdInput = e => {
    // setPwd(e.target.value);
    const { value } = e.target;
    setPwd(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    fetch(API, {
      method: 'POST',
      body: JSON.stringify({
        email: username,
        password: pwd,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));

    navigate('/main-jaewoong', {
      state: {
        username: username,
      },
    });
  };

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <input
        className="username"
        placeholder="전화번호,사용자 이름 또는 이메일"
        type="email"
        onChange={handleIdInput}
      />
      <input
        className="pwd"
        type="password"
        placeholder="비밀번호"
        minLength={5}
        autoComplete="on"
        onChange={handlePwdInput}
      />
      <button
        className={
          username.indexOf('@') !== -1 && pwd.length > 4
            ? 'btnActivate'
            : 'loginBtn'
        }
        type="submit"
      >
        login
      </button>
    </form>
  );
};
export default LoginComponent;
