import './Login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main');
  };

  return (
    <div className="Login">
      <div className="main">
        <div className="logo">
          <header className="logoText">westagram</header>
        </div>

        <div className="idPw">
          <input
            className="id"
            tpye="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input className="pw" tpye="text" placeholder="비밀번호" />
        </div>
        <input
          type="button"
          className="loginBtn"
          value="로그인"
          onClick={goToMain}
        />
        <div className="lostPw">
          <span>비밀번호를 잊으셨나요?</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
