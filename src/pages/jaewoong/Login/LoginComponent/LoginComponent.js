import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginComponent.scss';

const LoginComponent = props => {
  const navigate = useNavigate();

  const handleIdInput = e => {
    const target = e.target;
    props.setUsername(target.value);
    checkUserValidation();
  };

  const handlePwdInput = e => {
    const target = e.target;
    props.setPwd(target.value);
    checkUserValidation();
  };

  const checkUserValidation = () => {
    const checkUsername = username => {
      if (username.indexOf('@') == -1) return false;
      else return true;
    };

    const checkPwd = pwd => {
      if (pwd.length < 5) return false;
      else return true;
    };

    checkUsername(props.username) && checkPwd(props.pwd)
      ? props.setInputValidation(true)
      : props.setInputValidation(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.inputValidation
      ? navigate('/main-jaewoong', {
          state: {
            username: props.username,
          },
        })
      : alert('다시 입력해주세요');
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
        onChange={handlePwdInput}
      />
      {/*<Link to="/main-jaewoong">
        <button className="loginBtn" onClick={checkValidation}>
          Login
        </button>
      </Link>*/}
      <button
        className={props.inputValidation ? 'btnActivate' : 'loginBtn'}
        type="submit"
      >
        login
      </button>
    </form>
  );
};
export default LoginComponent;
