import { isValidDateValue } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './LoginComponent.scss';

const LoginComponent = () => {
  // const navigate = useNavigate();

  const [username, setUsername] = useState();
  const [pwd, setPwd] = useState();
  const [usernameValidation, setUsernameValidation] = useState(false);
  const [pwdValidation, setPwdValidation] = useState(false);
  const navigate = useNavigate();

  const handleInput = e => {
    setUsername(e.target.value);
    setPwd(e.target.value);
    console.log(`ID:${username} / pwd"${pwd}`);
  };

  const checkUsername = id => {
    if (id.indexOf('@') < 0) return false;
    else {
      return true;
    }
  };

  const checkPwd = pwd => {
    if (pwd.length < 5) return false;
    else return true;
  };

  const handleClick = () => {
    usernameValidation && pwdValidation
      ? navigate('/main-jaewoong', {
          state: {
            username: usernameValidation,
          },
        })
      : alert('다시 입력해주세요');
  };

  return (
    <form
      className="loginForm"
      onSubmit={() => {
        handleClick();
      }}
    >
      <input
        className="username"
        placeholder="전화번호,사용자 이름 또는 이메일"
        // onChange={e => {
        //   setUsernameValidation(checkUsername(e.target.value));
        // }}
        onChange={handleInput}
      />
      <input
        className="pwd"
        type="password"
        placeholder="비밀번호"
        // onChange={e => {
        //   setPwdValidation(checkPwd(e.target.value));
        // }}
        onChange={handleInput}
      />
      {/*<Link to="/main-jaewoong">
        <button className="loginBtn" onClick={checkValidation}>
          Login
        </button>
      </Link>*/}
      <button className="loginBtn" type="submit">
        login
      </button>
    </form>
  );
};
export default LoginComponent;
