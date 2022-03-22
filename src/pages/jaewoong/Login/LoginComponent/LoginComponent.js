import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginComponent.scss';

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');
  const navigate = useNavigate();
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
    navigate('/main-jaewoong', {
      state: {
        username: username,
      },
    });
  };
  // const checkUserValidation = () => {
  //   const checkUsername = username => {
  //     if (username.indexOf('@') == -1) return false;
  //     else return true;
  //   };

  //   const checkPwd = pwd => {
  //     if (pwd.length < 5) return false;
  //     else return true;
  //   };

  //   checkUsername(props.username) && checkPwd(props.pwd)
  //     ? setInputValidation(true)
  //     : setInputValidation(false);
  // };

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
      {/*<Link to="/main-jaewoong">
        <button className="loginBtn" onClick={checkValidation}>
          Login
        </button>
      </Link>*/}
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
