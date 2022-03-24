import './Login.scss';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  // 메인페이지 이동
  const goToMain = () => {
    navigate('/main-kyuhyun');
  };

  // state 하나로 합치기  - 다 변경해줘야해서 잠시 접어둠 ^.^
  // const [id, setId] = useState('');
  // const [pw, setPw] = useState('');

  const [inputValues, setInputValues] = useState({
    inputId: '',
    inputPw: '',
  });

  // const handleIdInput = event => {
  //   setId(event.target.value);
  // };

  // const handlePwInput = event => {
  //   setPw(event.target.value);
  // };

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  // 할당한 두개의 input에 값 하나라도 1이하면 Disabled
  const isDisabled =
    inputValues.inputId.length <= 1 || inputValues.inputPw.length <= 1;

  // 유효성 검사 - 로그인
  const isValueTrue = () => {
    inputValues.inputId.includes('@') && inputValues.inputPw.length > 5
      ? goToMain()
      : alert('아이디, 비밀번호를 확인하세요.');
  };
  // fetch함수를 이용해 api 호출 - 회원가입
  const goToSignup = () => {
    fetch('http://10.58.3.10:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        name: 'kyuhyun',
        email: inputValues.inputId,
        password: inputValues.inputPw,
        phone_number: '010',
      }),
    })
      .then(res => res.json())
      .then(result => alert(result.message));
    setInputValues('');
  };
  // fetch함수를 이용해 api 호출 - 로그인 / 현재 API 를 불러오지 않기 때문에 주석
  // const goToLogin = () => {
  //   fetch('http://10.58.3.10:8000/users/signin', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       name: 'kyuhyun',
  //       email: id,
  //       password: pw,
  //       phone_number: '010',
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(result => (result.token ? goToMain() : alert(result.message)));
  //   setId('');
  //   setPw('');
  // };

  return (
    <div className="Login">
      <div className="main">
        <div className="logo">
          <header className="logoText">westagram</header>
        </div>

        <div className="idPw">
          <input
            onChange={handleInput}
            className="id"
            name="inputId"
            tpye="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={handleInput}
            className="pw"
            name="inputPw"
            tpye="text"
            placeholder="비밀번호"
          />
        </div>
        <input
          type="button"
          className="loginBtn"
          value="로그인"
          disabled={isDisabled}
          onClick={isValueTrue}
        />
        {/* <input
          type="button"
          className="loginBtn"
          value="로그인"
          disabled={id.length <= 1 || pw.length <= 1}
          fetch를 이용하여 api 호출하기
          onClick={goToLogin}
        /> */}
        <input
          type="button"
          className="signupBtn"
          value="회원가입"
          disabled={isDisabled}
          onClick={goToSignup}
        />
        <div className="lostPw">
          <span>비밀번호를 잊으셨나요?</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
