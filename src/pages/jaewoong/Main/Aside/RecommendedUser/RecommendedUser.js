import React from 'react';

const RecommendedUser = ({ id, thumbnail, followerName, followerNum }) => {
  return (
    <li>
      <img className="middleThumbnail" alt="팔로워썸네일" src={thumbnail} />
      <dl>
        <dt className="bold">{id}</dt>
        <dd className="gray">
          {followerName}외 {followerNum}명이 팔로우하고 있습니다.
        </dd>
      </dl>
      <span className="mainBlue">팔로우</span>
    </li>
  );
};

export default RecommendedUser;
