import React, { useState, useEffect } from 'react';
import './Login.scss';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
function Login() {
  const [inputValue, setInputValue] = useState({
    id: '',
    password: '',
    name: '',
    phone: '',
    createId: '',
    createPw: '',
    PwCheck: '',
  });

  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const onLogin = () => {
    /*fetch('http://10.58.2.242:8000/users/login', {
      method: 'post',
      body: JSON.stringify({
        email: inputValue.id,
        password: inputValue.password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.Token) {
          navigate('/main-jaedo');
        }
      });*/
    const { id, password } = inputValue;
    if (id.indexOf('@') === -1) {
      alert('아이디 형식을 지켜주세요.(@포함)');
    } else if (password.length < 8) {
      alert('비밀번호 형식을 지켜주세요.(8자리)');
    } else navigate('/main-jaedo');
  };
  const handleModal = () => {
    setOpenModal(true);
  };
  const closedModal = () => {
    setOpenModal(false);
    setInputValue({ ...inputValue, createId: '', createPw: '', pwCheck: '' });
  };
  const changeInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const loginBtnCheck = () => {
    const { id, password } = inputValue;
    return id.indexOf('@') !== -1 && password.length >= 8;
  };
  const handlePwCheck = () => {
    const { createPw, pwCheck } = inputValue;
    return createPw && createPw === pwCheck;
  };
  const CreateUser = () => {
    fetch('http://10.58.2.242:8000/users/registration', {
      method: 'post',
      body: JSON.stringify({
        name: inputValue.name,
        phone_number: inputValue.phone,
        email: inputValue.createId,
        password: inputValue.createPw,
      }),
    })
      .then(res => res.json())
      .then(res => alert('회원가입성공'));
    setOpenModal(false);
    setInputValue({ ...inputValue, createId: '', createPw: '', pwCheck: '' });
  };
  return (
    <div className="contentWrap">
      <div className="content">
        <form className="login">
          <div className="logo">Westagram</div>
          <input
            className="userId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={changeInput}
            name="id"
          />
          <input
            className="userPassword"
            type="password"
            placeholder="비밀번호"
            onChange={changeInput}
            name="password"
          />
          <button
            className={loginBtnCheck() ? 'loginBtn' : 'noLoginBtn'}
            type="button"
            disabled={!loginBtnCheck()}
            onClick={onLogin}
          >
            로그인
          </button>
          <button className="loginBtn" type="button" onClick={handleModal}>
            회원가입
          </button>
          <div className="footer">비밀번호를 잊으셨나요?</div>
        </form>
      </div>
      <Modal
        className="create_modal"
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
        style={{
          overlay: {
            width: '500px',
            height: '400px',
            zIndex: '1000',
            margin: '100px auto',
            backgroundColor: '#FFFFFF',
          },
        }}
        shouldCloseOnOverlayClick={false}
        ariaHideApp={false}
      >
        <form className="createUser">
          <ul>
            <li>
              아이디
              <br />
              <input
                type="text"
                name="createId"
                onChange={changeInput}
                placeholder="아이디를 입력해주세요"
              />
            </li>
            <li>
              패스워드
              <br />
              <input
                type="password"
                name="createPw"
                onChange={changeInput}
                placeholder="비밀번호를 입력해주세요"
              />
            </li>
            <li>
              패스워드 확인
              <br />
              <input
                type="password"
                name="pwCheck"
                onChange={changeInput}
                placeholder="비밀번호를 확인해주세요"
              />
              <br />
              {handlePwCheck() ? (
                <span className="passPw">비밀번호가 일치합니다.</span>
              ) : (
                <span className="failPw">비밀번호가 일치하지 않습니다.</span>
              )}
            </li>
            <li>
              이름
              <br />
              <input
                type="text"
                name="name"
                onChange={changeInput}
                placeholder="이름을 입력해주세요"
              />
            </li>
            <li>
              전화번호
              <br />
              <input
                type="text"
                name="phone"
                onChange={changeInput}
                placeholder="전화번호를 입력해주세요"
              />
            </li>
            <li>
              <button type="button" onClick={CreateUser}>
                회원가입
              </button>
              <button type="button" onClick={closedModal}>
                닫기
              </button>
            </li>
          </ul>
        </form>
      </Modal>
    </div>
  );
}

export default Login;
