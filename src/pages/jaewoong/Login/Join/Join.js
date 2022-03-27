import React, { useState } from 'react';

const Join = ({ joinPage }) => {
  // const [email, setEmail] = useState('');
  // const [pwd, setPwd] = useState('');
  // const [userName, setUserName] = useState('');
  // const [phone, setPhone] = useState('');

  // const handleIdInput = e => {
  //   const { value } = e.target;
  //   setEmail(value);
  // };
  // const handlePwdInput = e => {
  //   const { value } = e.target;
  //   setPwd(value);
  // };
  // const handlePhoneInput = e => {
  //   const { value } = e.target;
  //   setPhone(value);
  // };
  // const handleUserNameInput = e => {
  //   const { value } = e.target;
  //   setUserName(value);
  // };

  const [signupInfo, setSignupInfo] = useState({
    username: '',
    pwd: '',
    korName: '',
    phone: '',
  });

  const handleInput = e => {
    setSignupInfo(signupInfo => ({
      ...signupInfo,
      [e.target.className]: e.target.value,
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://10.58.1.90:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: signupInfo.username,
        password: signupInfo.pwd,
        name: signupInfo.korName,
        phone: signupInfo.phone,
      }),
    }).then(response => response.json());
  };

  return (
    <div className={joinPage ? 'modal' : 'hidden'}>
      <form className="loginForm" onSubmit={handleSubmit}>
        <input
          className="username"
          placeholder="전화번호,사용자 이름 또는 이메일"
          type="email"
          onChange={handleInput}
        />
        <input
          className="pwd"
          type="password"
          placeholder="비밀번호"
          onChange={handleInput}
        />
        <input className="korName" placeholder="성명" onChange={handleInput} />
        <input
          className="phone"
          placeholder="전화번호"
          onChange={handleInput}
        />

        <button>sign-in</button>
      </form>
    </div>
  );
};

export default Join;
