import React from 'react';
import '../Aside/Aside.scss';
const Aside = () => {
  return (
    <div className="main-right">
      <div className="profile-section">
        <img src="/images/duhyeon/javascript.png" alt="" />
        <dl>
          <dt id="user-nickname">wecode_bootcamp</dt>
          <dd className="user-desc">WeCode | 위코드</dd>
        </dl>
      </div>
      <div className="story-section">
        <div className="more-title-wrap">
          <p className="title">스토리</p>
          <a href="#!" className="btn-story-more">
            모두 보기
          </a>
        </div>
        <div className="story-wrap">
          <div className="story-list">
            <img src="/images/duhyeon/javascript.png" alt="" />
            <dl>
              <dt>wecode_bootcamp</dt>
              <dd>WeCode | 위코드</dd>
            </dl>
          </div>
          <div className="story-list">
            <img src="/images/duhyeon/javascript.png" alt="" />
            <dl>
              <dt>wecode_bootcamp</dt>
              <dd>WeCode | 위코드</dd>
            </dl>
          </div>
          <div className="story-list">
            <img src="/images/duhyeon/javascript.png" alt="" />
            <dl>
              <dt>wecode_bootcamp</dt>
              <dd>WeCode | 위코드</dd>
            </dl>
          </div>
          <div className="story-list">
            <img src="/images/duhyeon/javascript.png" alt="" />
            <dl>
              <dt>wecode_bootcamp</dt>
              <dd>WeCode | 위코드</dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="recommend-section">
        <div className="more-title-wrap">
          <p className="title">회원님을 위한 추천</p>
          <a href="#!" className="btn-story-more">
            모두 보기
          </a>
        </div>
        <div className="recommend-wrap">
          <div className="recommend-list">
            <img src="/images/duhyeon/javascript.png" alt="" />
            <dl>
              <dt>wecode_bootcamp</dt>
              <dd>hongduhyeon님 외 12명이 팔로우했습니다</dd>
            </dl>
            <button type="button" className="btn-follow">
              팔로우
            </button>
          </div>
          <div className="recommend-list">
            <img src="/images/duhyeon/javascript.png" alt="" />
            <dl>
              <dt>wecode_bootcamp</dt>
              <dd>hongduhyeon님 외 12명이 팔로우했습니다</dd>
            </dl>
            <button type="button" className="btn-follow">
              팔로우
            </button>
          </div>
          <div className="recommend-list">
            <img src="/images/duhyeon/javascript.png" alt="" />
            <dl>
              <dt>wecode_bootcamp</dt>
              <dd>hongduhyeon님 외 12명이 팔로우했습니다</dd>
            </dl>
            <button type="button" className="btn-follow">
              팔로우
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aside;
