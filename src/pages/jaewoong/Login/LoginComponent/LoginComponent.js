import React, { Component, uesRef } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './LoginComponent.scss';

const username = document.querySelector('.username');
const pwd = document.querySelector('.pwd');
const loginBtn = document.querySelector('.loginBtn');
const BTN_ACTIVATE = 'btnActivate';

const checkId = () => {
  console.log('함수진입');
  if (username.value.indexOf('@') == -1) return false;
  else return true;
};

const checkPwd = () => {
  if (pwd.value.length < 5) return false;
  else return true;
};

function LoginComponent() {
  const navigate = useNavigate();

  return (
    <form className="loginForm">
      <input
        className="username"
        type="email"
        placeholder="전화번호,사용자 이름 또는 이메일"
      />
      <input
        className="pwd"
        type="password"
        minLength="5"
        placeholder="비밀번호"
      />
      <Link to="/main">
        <button className="loginBtn">Login</button>
      </Link>
      {/*<button className="loginBtn" onClick={()=>{
        checkId() && checkPwd()
        ? console.log("로그인성공")
        : alert("사용자이름에는 @이 포함되어야 하며 비밀번호는 5글자 이상 입력해주셔야 합니다.")
      }}>login</button>*/}
    </form>
  );
}

export default LoginComponent;

// const loginBtnActivate=()=>{
//   loginBtn.classList.add(BTN_ACTIVATE);
//   loginBtn.disabled=false;
// }

// const loginBtnDectivate=()=>{
//   loginBtn.classList.remove(BTN_ACTIVATE);
//   loginBtn.disabled=true;
// }

// const btnColorHandler = (e) =>{
//   e.value=username.value;
//   username.value && pwd.value
//   ? loginBtnActivate()
//   : loginBtnDectivate()
// }

// const loginSuccess=()=>{
//   localStorage.setItem("ID",username.value);
//   window.location ="main.html"
// }

// const loginInfoHandler =()=>{
//   checkId() && checkPwd()
//   ? loginSuccess()
//   : alert("사용자이름에는 @이 포함되어야 하며 비밀번호는 5글자 이상 입력해주셔야 합니다.")
// }

// const init=()=>{
//   username.addEventListener("input",btnColorHandler);
//   pwd.addEventListener("input",btnColorHandler);
//   loginBtn.addEventListener("click", loginInfoHandler);
// }
