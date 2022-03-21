import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login/Login.scss';

const Login = () => {
  const [inputs, setInputs] = useState({
    id: '',
    password: '',
  });
  const onChange = e => {
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };
  let idValid =
    inputs.id.includes('@') && inputs.password.length > 4 ? true : false;
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-duhyeon');
  };
  return (
    <div className="container">
      <div className="login">
        <h1 className="logo">westagram</h1>
        <div className="login-form">
          <form>
            <input
              name="id"
              value={inputs.id}
              type="text"
              onChange={onChange}
              autoComplete="off"
              placeholder="전화번호,사용자 이름 또는 이메일"
            />
            <input
              name="password"
              value={inputs.password}
              type="password"
              onChange={onChange}
              onKeyDown={goToMain}
              autoComplete="off"
              placeholder="비밀번호"
            />
            <button
              type="button"
              className={idValid ? 'btn-login active' : 'btn-login'}
              disabled={idValid ? false : true}
              onClick={goToMain}
            >
              로그인
            </button>
          </form>
        </div>
        <p className="find-password">비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
};

export default Login;
