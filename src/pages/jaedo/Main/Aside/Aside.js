import React, { useState, useEffect } from 'react';
import './Aside.scss';
import Story from './Story/Story';
import Recommend from './Recommend/Recommend';
function ASide() {
  const [storyArr, setStoryArr] = useState([]);
  const [recommendArr, setRecommendArr] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/data/jaedo/Aside.json')
      .then(res => res.json())
      .then(res => {
        setStoryArr(res.story);
        setRecommendArr(res.recommend);
      });
  }, []);
  return (
    <div className="side">
      <div className="sideTop">
        <div className="sideTopLeft">
          <img src="/images/jaedo/emile-73-PGCksCZ8-unsplash.jpg" alt="x" />
        </div>
        <div className="sideTopRight">
          <span>wecode_bootcamp</span>
          <span>WeCode | 위코드</span>
        </div>
      </div>
      <div className="sideStory">
        <div className="sideStoryTop">
          <span>스토리</span>
          <span>모두 보기</span>
        </div>
        <ul className="sideContent">
          {storyArr.map(story => (
            <Story key={story.id} {...story} />
          ))}
        </ul>
      </div>
      <div className="sideRecommend">
        <div className="sideRecommendTop">
          <span>회원님을 위한 추천</span>
          <span>모두 보기</span>
        </div>
        <ul className="sideContent">
          {recommendArr.map(recommend => (
            <Recommend key={recommend.id} {...recommend} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ASide;
