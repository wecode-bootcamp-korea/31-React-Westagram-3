import React from 'react';

const Nav = () => {
  return (
    <nav className="header">
      <div className="header-wrap">
        <div className="header-logo">
          <img src="images/common/instagram.png" alt="" />
          <span className="logo-font">westagramm</span>
        </div>
        <div className="header-search">
          <input className="search-input" type="text" />
          <p className="search-icon">검색</p>
          <ul className="search-list-wrap">
            <li className="search-list">
              <img src="images/common/javascript.png" alt="" />
              <dl>
                <dt className="search-id">wecode_bootacamp</dt>
                <dd className="search-sub">i want frontEnd</dd>
              </dl>
            </li>
            <li className="search-list">
              <img src="images/common/javascript.png" alt="" />
              <dl>
                <dt className="search-id">wecode_bootacamp</dt>
                <dd className="search-sub">i want frontEnd</dd>
              </dl>
            </li>
            <li className="search-list">
              <img
                className="search-img"
                src="images/common/javascript.png"
                alt=""
              />
              <dl>
                <dt className="search-id">wecode_bootacamp</dt>
                <dd className="search-sub">i want frontEnd</dd>
              </dl>
            </li>
          </ul>
        </div>
        <div className="header-util">
          <button type="button" className="btn-more-feed">
            다른 피드
          </button>
          <button type="button" className="btn-alram on">
            알림
          </button>
          <button type="button" className="btn-mypage">
            마이페이지
          </button>
          <button type="button" className="btn-profile">
            프로필
          </button>
          <ul className="profile-modal active">
            <li className="modal-profile">프로필</li>
            <li className="modal-save">저장됨</li>
            <li className="modal-setting">설정</li>
            <li className="modal-logout">로그아웃</li>
          </ul>
        </div>
        <div className="overlay" />
      </div>
    </nav>
  );
};

export default Nav;
