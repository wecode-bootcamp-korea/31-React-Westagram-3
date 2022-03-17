import React from 'react';
import './Aside.scss';

const Aside = () => {
  return (
    <aside className="mainRight">
      {/* <!-- 메인 우측 내 프로필  --> */}
      <div className="mainRightTop">
        <img className="mainRightTopImg" src="/images/kyuhyun/my.png" />
        <div className="mainRightTopProfile">
          <div className="mainRightTopId">
            <span>loubxxtin</span>
          </div>
          <div className="mainRightTopName">
            <span>노규현</span>
          </div>
        </div>
      </div>
      {/* <!-- 스토리 프로필 시작 --> */}
      <div className="mainRightMiddle">
        {/* <!-- 스토리 프로필 헤더 --> */}
        <div className="maineRightMiddleHeader">
          <span>스토리</span>
          <span>모두 보기</span>
        </div>
        {/* <!-- 스토리 프로필 --> */}
        <div className="mainRightMiddleList">
          <ul>
            <li>
              <img
                className="mainRightMiddleListImg"
                src="/images/kyuhyun/profile4.png"
              />
              <div className="mainRightMiddleListProfile">
                <div className="mainRightMiddleListProfileId">
                  <span>kkk_nannya</span>
                  {/* <!-- </div>
              <div className="mainRight-middle-list-profile-name"> --> */}
                  <span>16분 전</span>
                </div>
              </div>
            </li>
            <li>
              <img
                className="mainRightMiddleListImg"
                src="/images/kyuhyun/profile5.png"
              />
              <div className="mainRightMiddleListProfile">
                <div className="mainRightMiddleListProfileId">
                  <span>ohya_0</span>
                  {/* <!-- </div>
              <div className="mainRight-middle-list-profile-name"> --> */}
                  <span>3시간 전</span>
                </div>
              </div>
            </li>
            <li>
              <img
                className="mainRightMiddleListImg"
                src="/images/kyuhyun/profile6.png"
              />
              <div className="mainRightMiddleListProfile">
                <div className="mainRightMiddleListProfileId">
                  <span>hyookyc</span>
                  {/* <!-- </div>
              <div className="mainRight-middle-list-profile-name"> --> */}
                  <span>20시간 전</span>
                </div>
              </div>
            </li>
            <li>
              <img
                className="mainRightMiddleListImg"
                src="/images/kyuhyun/profile7.png"
              />
              <div className="mainRightMiddleListProfile">
                <div className="mainRightMiddleListProfileId">
                  <span>jminkeek</span>
                  {/* <!-- </div>
              <div className="mainRight-middle-list-profile-name"> --> */}
                  <span>21시간 전</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- 추천 프로필 시작  --> */}
      <div className="mainRightBottom">
        {/* <!-- 추천 프로필 헤더  --> */}
        <div className="mainRightBottomHeader">
          <span>회원님을 위한 추천</span>
          <span>모두 보기</span>
        </div>
        {/* <!-- 추천 프로필 리스트 시작  --> */}
        <div className="mainRightBottomList">
          <ul>
            <li>
              <img
                className="mainRightBottomListImg"
                src="/images/kyuhyun/mainimg.png"
              />
              <div className="mainRightBottomListProfile">
                <div className="mainRightBottomListProfileId">
                  <span>ilrowa</span>
                  <span>jimmyl12님 외 10명이...</span>
                </div>
                <div className="mainRightBottomListProfileFollow">
                  <span>팔로우</span>
                </div>
              </div>
            </li>
            <li>
              <img
                className="mainRightBottomListImg"
                src="/images/kyuhyun/profile2.png"
              />
              <div className="mainRightBottomListProfile">
                <div className="mainRightBottomListProfileId">
                  <span>drink.weesky</span>
                  <span>ring.in.sxxul님 외 12명이...</span>
                </div>
                <div className="mainRightBottomListProfileFollow">
                  <span>팔로우</span>
                </div>
              </div>
            </li>
            <li>
              <img
                className="mainRightBottomListImg"
                src="/images/kyuhyun/profile3.png"
              />
              <div className="mainRightBottomListProfile">
                <div className="mainRightBottomListProfileId">
                  <span>wecodeking</span>
                  <span>_lehend님 외 3명이...</span>
                </div>
                <div className="mainRightBottomListProfileFollow">
                  <span>팔로우</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- 추천 프로필  끝 --> */}
      <div className="mainRightUnder">
        <div className="mainRightUnderText1">
          <span>
            Instagram 정보.지원.홍보 센터.API.채용
            정보.개인정보처리방침.약관.디렉터리.프로필.해시태그.언어
          </span>
        </div>
        <div className="mainRightUnderText2">
          <span>o 2019 INSTAGRAM</span>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
