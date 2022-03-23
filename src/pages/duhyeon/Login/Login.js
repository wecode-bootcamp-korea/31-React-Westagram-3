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
    fetch('http://10.58.1.189:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: inputs.id,
        password: inputs.password,
      }),
    })
      .then(response => response.json())
      .then(res => {
        if (res.token) {
          navigate('/main-duhyeon');
        }
      });
  };
  //sjsdfuk@naver.coms
  return (
    <div className="login">
      <div className="container">
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
