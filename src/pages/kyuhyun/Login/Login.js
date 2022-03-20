import './Login.scss';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-kyuhyun');
  };

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const handleIdInput = event => {
    setId(event.target.value);
  };

  const handlePwInput = event => {
    setPw(event.target.value);
  };

  // const isDisabled = () => {};

  const isValueTrue = () => {
    id.includes('@') && pw.length > 5
      ? goToMain()
      : alert('아이디, 비밀번호를 확인하세요.');
  };
  return (
    <div className="Login">
      <div className="main">
        <div className="logo">
          <header className="logoText">westagram</header>
        </div>

        <div className="idPw">
          <input
            onChange={handleIdInput}
            className="id"
            tpye="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={handlePwInput}
            className="pw"
            tpye="text"
            placeholder="비밀번호"
          />
        </div>
        <input
          type="button"
          className="loginBtn"
          value="로그인"
          disabled={id.length <= 1 || pw.length <= 1}
          onClick={isValueTrue}
        />
        <div className="lostPw">
          <span>비밀번호를 잊으셨나요?</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
