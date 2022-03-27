import React, { useState, useEffect } from 'react';
import UpdatedStory from './UpdatedStory/UpdatedStory';
import RecommendedUser from './RecommendedUser/RecommendedUser';
import FooterList from './FooterList/FooterList';
import FOOTER_DATA from './FooterList/footerData';
import './Aside.scss';

const Aside = () => {
  const [updatedStory, setUpdatedStory] = useState([]);
  const [recommendedUser, setRecommendedUser] = useState([]);

  //스토리 업데이트된 친구 json데이터 호출
  useEffect(() => {
    fetch('http://localhost:3000/data/jaewoong/updatedStoryData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setUpdatedStory(data);
      });
  }, []);

  //추천친구목록 json데이터 호출
  useEffect(() => {
    fetch('http://localhost:3000/data/jaewoong/recommendedUserData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setRecommendedUser(data);
      });
  }, []);

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
          {updatedStory.map((updatedStory, i) => (
            <UpdatedStory
              key={i}
              id={updatedStory.id}
              thumbnail={updatedStory.thumbnail}
              timePassed={updatedStory.timePassed}
            />
          ))}
        </ul>
      </div>
      <div className="asideBoxHeader">
        <span className="asideBoxTitle gray">회원님을 위한 추천</span>
        <a className="asideBoxSeeAllBtn" href="www">
          모두보기
        </a>
      </div>
      <div className="asideBox recommend">
        <ul>
          {recommendedUser.map((element, i) => (
            <RecommendedUser
              key={i}
              id={element.id}
              thumbnail={element.thumbnail}
              followerName={element.followerName}
              followerNum={element.followerNum}
            />
          ))}
        </ul>
      </div>
      <div className="footer">
        <ul>
          {FOOTER_DATA.map(footer => {
            return (
              <FooterList key={footer.id} name={footer.name} url={footer.url} />
            );
          })}
        </ul>
        <div>2019 WESTAGRAM</div>
      </div>
    </aside>
  );
};

export default Aside;
