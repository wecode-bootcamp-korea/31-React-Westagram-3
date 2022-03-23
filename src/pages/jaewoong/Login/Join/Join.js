import React, { useState } from 'react';

const Join = props => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [userName, setUserName] = useState('');
  const [phone, setPhone] = useState('');

  const handleIdInput = e => {
    const { value } = e.target;
    setEmail(value);
  };
  const handlePwdInput = e => {
    const { value } = e.target;
    setPwd(value);
  };
  const handlePhoneInput = e => {
    const { value } = e.target;
    setPhone(value);
  };
  const handleUserNameInput = e => {
    const { value } = e.target;
    setUserName(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://10.58.1.90:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: pwd,
        name: userName,
        phone: phone,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
  };
  return (
    <div className={props.show ? 'modal' : 'hidden'}>
      <form className="loginForm" onSubmit={handleSubmit}>
        <input
          className="email"
          placeholder="전화번호,사용자 이름 또는 이메일"
          type="email"
          onChange={handleIdInput}
        />
        <input
          className="pwd"
          type="password"
          placeholder="비밀번호"
          onChange={handlePwdInput}
        />
        <input
          className="userName"
          placeholder="성명"
          onChange={handleUserNameInput}
        />
        <input
          className="phone"
          placeholder="전화번호"
          onChange={handlePhoneInput}
        />

        <button>sign-in</button>
      </form>
    </div>
  );
};

export default Join;
