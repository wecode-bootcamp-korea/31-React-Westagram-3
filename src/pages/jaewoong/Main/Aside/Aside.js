import React from 'react';
import FooterList from './FooterList';
import FOOTER_DATA from './footerData';
import './Aside.scss';

const Aside = () => {
  return (
    <aside>
      <div className="userContainer">
        <img
          className="myThumbnail"
          alt="유져썸네일"
          src="../../../../images/jaewoong/westa-contents/first-contents.png"
        />
        <dl>
          <dt>
            <a className="userid bold" href="www">
              jay yoon
            </a>
          </dt>
          <dd>윤재웅</dd>
        </dl>
      </div>
      <div className="asideBoxHeader">
        <span className="asideBoxTitle gray">스토리</span>
        <a className="asideBoxSeeAllBtn" href="www">
          모두보기
        </a>
      </div>
      <div className="asideBox story">
        <ul>
          <li className="asideBoxList">
            <img
              className="no1 middleThumbnail"
              alt="팔로워썸네일"
              src="../../../../images/jaewoong/westa-userthumnails/thumb1.png"
            />
            <dl className="doubleLineContainer">
              <dt className="no1 bold">아이디1</dt>
              <dd className="no1 gray">3분전</dd>
            </dl>
          </li>
          <li className="asideBoxList">
            <img
              className="no1 middleThumbnail"
              alt="팔로워썸네일"
              src="../../../../images/jaewoong/westa-userthumnails/thumb2.png"
            />
            <dl className="doubleLineContainer">
              <dt className="no1 recommandId bold">아이디2</dt>
              <dd className="no1 friendsOfMineLocation gray">10분전</dd>
            </dl>
          </li>
          <li className="asideBoxList">
            <img
              className="no1 middleThumbnail"
              alt="팔로워썸네일"
              src="../../../../images/jaewoong/westa-userthumnails/thumb3.png"
            />
            <dl className="doubleLineContainer">
              <dt className="no1 recommandId bold">아이디3</dt>
              <dd className="no1 friendsOfMineLocation gray">2일전</dd>
            </dl>
          </li>
          <li className="asideBoxList">
            <img
              className="no1 middleThumbnail"
              alt="팔로워썸네일"
              src="../../../../images/jaewoong/westa-userthumnails/thumb4.png"
            />
            <dl className="doubleLineContainer">
              <dt className="no1 recommandId bold">아이디4</dt>
              <dd className="no1 friendsOfMineLocation gray">3일전</dd>
            </dl>
          </li>
        </ul>
      </div>
      <div className="asideBoxHeader">
        <span className="asideBoxTitle gray">회원님을 위한 추천</span>
        <a className="asideBoxSeeAllBtn" href="www">
          모두보기
        </a>
      </div>
      <div className="asideBox recommand">
        <ul>
          <li className="asideBoxList">
            <img
              className="no1 middleThumbnail"
              alt="팔로워썸네일"
              src="../../../../images/jaewoong/westa-userthumnails/thumb5.png"
            />
            <dl>
              <dt className="bold">아이디5</dt>
              <dd className="gray">aaa외 13명이 팔로우하고있습니다.</dd>
            </dl>
            <span className="mainBlue">팔로우</span>
          </li>
          <li className="asideBoxList">
            <img
              className="no1 middleThumbnail"
              alt="팔로워썸네일"
              src="../../../../images/jaewoong/westa-userthumnails/thumb6.png"
            />
            <dl className="doubleLineContainer">
              <dt className="no1 recommandId bold">아이디6</dt>
              <dd className="no1 friendsOfMineLocation gray">
                aaa외 13명이 팔로우하고있습니다.
              </dd>
            </dl>
            <span className="mainBlue">팔로우</span>
          </li>
          <li className="asideBoxList">
            <img
              className="no1 middleThumbnail"
              alt="팔로워썸네일"
              src="../../../../images/jaewoong/westa-userthumnails/thumb1.png"
            />
            <dl className="doubleLineContainer">
              <dt className="no1 recommandId bold">아이디7</dt>
              <dd className="no1 friendsOfMineLocation gray">
                aaa외 13명이 팔로우하고있습니다.
              </dd>
            </dl>
            <span className="mainBlue">팔로우</span>
          </li>
          <li className="asideBoxList">
            <img
              className="no1 middleThumbnail"
              alt="팔로워썸네일"
              src="../../../../images/jaewoong/westa-userthumnails/thumb1.png"
            />
            <dl className="doubleLineContainer">
              <dt className="no1 recommandId bold">아이디7</dt>
              <dd className="no1 friendsOfMineLocation gray">
                aaa외 13명이 팔로우하고있습니다.
              </dd>
            </dl>
            <span className="mainBlue">팔로우</span>
          </li>
        </ul>
      </div>
      <div className="footer">
        <ul>
          {FOOTER_DATA.map((footer, i) => {
            return <FooterList key={i} name={footer.name} url={footer.url} />;
          })}
        </ul>
        <div>2019 WESTAGRAM</div>
      </div>
    </aside>
  );
};

export default Aside;
