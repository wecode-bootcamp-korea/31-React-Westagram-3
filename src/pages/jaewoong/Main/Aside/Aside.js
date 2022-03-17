import React from 'react';

const Aside = () => {
  return (
    <aside>
      <div className="personalContainer">
        <div className="userContainer">
          <img
            className="userThumbnail"
            alt="유져썸네일"
            src="../../../../images/jaewoong/westa-contents/first-contents.png"
          />
          <div className="userInfo doubleLineContainer">
            <a className="userid smallBoldFont" href="">
              jay yoon
            </a>
            <div>
              <span>윤재웅</span>
            </div>
          </div>
        </div>
        <div className="asideBox">
          <div className="asideBoxHeader">
            <span className="asideBoxTitle">스토리</span>
            <a className="asideBoxSeeAllBtn" href="">
              모두보기
            </a>
          </div>
          <div className="userstodyList">
            <ul>
              <li className="asideBoxList">
                <div className="thumbnailIdContainer">
                  <img
                    className="no1 middleThumbnail"
                    alt="팔로워썸네일"
                    src="../../../../images/jaewoong/westa-userthumnails/thumb1.png"
                  />
                  <div className="doubleLineContainer">
                    <span className="no1 recommandId smallBoldFont">
                      아이디1
                    </span>
                    <span className="no1 friendsOfMineLocation smallGrayFont">
                      3분전
                    </span>
                  </div>
                </div>
              </li>
              <li className="asideBoxList">
                <div className="thumbnailIdContainer">
                  <img
                    className="no1 middleThumbnail"
                    alt="팔로워썸네일"
                    src="../../../../images/jaewoong/westa-userthumnails/thumb2.png"
                  />
                  <div className="doubleLineContainer">
                    <span className="no1 recommandId smallBoldFont">
                      아이디2
                    </span>
                    <span className="no1 friendsOfMineLocation smallGrayFont">
                      10분전
                    </span>
                  </div>
                </div>
              </li>
              <li className="asideBoxList">
                <div className="thumbnailIdContainer">
                  <img
                    className="no1 middleThumbnail"
                    alt="팔로워썸네일"
                    src="../../../../images/jaewoong/westa-userthumnails/thumb3.png"
                  />
                  <div className="doubleLineContainer">
                    <span className="no1 recommandId smallBoldFont">
                      아이디3
                    </span>
                    <span className="no1 friendsOfMineLocation smallGrayFont">
                      2일전
                    </span>
                  </div>
                </div>
              </li>
              <li className="asideBoxList">
                <div className="thumbnailIdContainer">
                  <img
                    className="no1 middleThumbnail"
                    alt="팔로워썸네일"
                    src="../../../../images/jaewoong/westa-userthumnails/thumb4.png"
                  />
                  <div className="doubleLineContainer">
                    <span className="no1 recommandId smallBoldFont">
                      아이디4
                    </span>
                    <span className="no1 friendsOfMineLocation smallGrayFont">
                      3일전
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="asideBox recommandContainer">
          <div className="asideBoxHeader">
            <span className="asideBoxTitle">회원님을 위한 추천</span>
            <a className="asideBoxSeeAllBtn" href="">
              모두보기
            </a>
          </div>
          <div className="recommandList">
            <ul>
              <li className="asideBoxList">
                <div className="thumbnailIdContainer">
                  <img
                    className="no1 middleThumbnail"
                    alt="팔로워썸네일"
                    src="../../../../images/jaewoong/westa-userthumnails/thumb5.png"
                  />
                  <div className="doubleLineContainer">
                    <span className="no1 recommandId smallBoldFont">
                      아이디5
                    </span>
                    <span className="no1 friendsOfMineLocation smallGrayFont">
                      aaa외 13명이 팔로우하고있습니다.
                    </span>
                  </div>
                </div>
                <span className="followBtn">팔로우</span>
              </li>
              <li className="asideBoxList">
                <div className="thumbnailIdContainer">
                  <img
                    className="no1 middleThumbnail"
                    alt="팔로워썸네일"
                    src="../../../../images/jaewoong/westa-userthumnails/thumb6.png"
                  />
                  <div className="doubleLineContainer">
                    <span className="no1 recommandId smallBoldFont">
                      아이디6
                    </span>
                    <span className="no1 friendsOfMineLocation smallGrayFont">
                      aaa외 13명이 팔로우하고있습니다.
                    </span>
                  </div>
                </div>
                <span className="followBtn">팔로우</span>
              </li>
              <li className="asideBoxList">
                <div className="thumbnailIdContainer">
                  <img
                    className="no1 middleThumbnail"
                    alt="팔로워썸네일"
                    src="../../../../images/jaewoong/westa-userthumnails/thumb1.png"
                  />
                  <div className="doubleLineContainer">
                    <span className="no1 recommandId smallBoldFont">
                      아이디7
                    </span>
                    <span className="no1 friendsOfMineLocation smallGrayFont">
                      aaa외 13명이 팔로우하고있습니다.
                    </span>
                  </div>
                </div>
                <span className="followBtn">팔로우</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer">
          <ul>
            <li>
              <a href="">instagram 정보</a>
            </li>
            <li>
              <a href="">지원</a>
            </li>
            <li>
              <a href="">홍보센터</a>
            </li>
            <li>
              <a href="">API</a>
            </li>
            <li>
              <a href="">채용 정보</a>
            </li>
            <li>
              <a href="">개인정보처리방침</a>
            </li>
            <li>
              <a href="">약관</a>
            </li>
            <li>
              <a href="">디렉터리</a>
            </li>
            <li>
              <a href="">프로필</a>
            </li>
            <li>
              <a href="">해시태그</a>
            </li>
            <li>
              <a href="">언어</a>
            </li>
          </ul>
          <div>2019 WESTAGRAM</div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
