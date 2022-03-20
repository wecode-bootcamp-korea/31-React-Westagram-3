import React, { useState } from 'react';
import LoginComponent from './LoginComponent/LoginComponent';
import './Login.scss';

const Login = () => {
  const [username, setUsername] = useState();
  const [pwd, setPwd] = useState();
  const [inputValidation, setInputValidation] = useState(false);

  return (
    <div id="loginPage">
      <main className="loginContainer">
        <h1 className="loginTitle">westagram</h1>
        <LoginComponent
          username={username}
          setUsername={setUsername}
          pwd={pwd}
          setPwd={setPwd}
          inputValidation={inputValidation}
          setInputValidation={setInputValidation}
        />
        <a href="" className="forgetPwd gray">
          비밀번호를 잊으셨나요?
        </a>
      </main>
    </div>
  );
};

export default Login;
