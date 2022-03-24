import './Login.scss';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const Login = () => {
  // 주석? 
  // 설명

  // code를 설명(복잡했을 때) => code가 가독성이 좋게

  // code 설명을 제외한 주석 활용
  // 마킹 이부분 나중에 수정 필요
  // TODO: ~~~~~,
  // FIXME: ~~~~~~,

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-kyuhyun');
  };
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  // FIXME: input 관련 state, hanlder 합치기

  const handleIdInput = event => {
    setId(event.target.value);
  };

  const handlePwInput = event => {
    setPw(event.target.value);
  };
  // 유효성 검사 - 로그인
  const userInputValidation = () => {
    return id.includes('@') && pw.length > 5
  };

  const toastErrorMessage = () => {
     alter()
  }

  const handleLoginBtn = () => {
    userInputValidation() ? goToMain() : toastErrorMessage()
  }
  // userInput validation -> Main navigate, alter
  // FIXME: 함수 분리, 네이밍 정확하게

  // fetch함수를 이용해 api 호출 - 회원가입
  const goToSignup = () => {
    fetch('http://10.58.3.10:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        name: 'kyuhyun',
        email: id,
        password: pw,
        phone_number: '010',
      }),
    })
      .then(res => res.json())
      .then(result => alert(result.message));
    setId('');
    setPw('');
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
  //
  const isUserInputFilled = id.length <= 1 || pw.length <= 1

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
          disabled={isUserInputFilled}
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
          className="loginBtn2"
          value="회원가입"
          disabled={isUserInputFilled}
          onClick={goToSignup}
        />
        {/* FIXME: disable 조건 변수화 */}
        <div className="lostPw">
          <span>비밀번호를 잊으셨나요?</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
