import React from 'react';

const UpdatedStory = ({ thumbnail, id, timePassed }) => {
  return (
    <li className="asideBoxList">
      <img className="middleThumbnail" alt="팔로워썸네일" src={thumbnail} />
      <dl>
        <dt className="bold">{id}</dt>
        <dd className="gray">{timePassed}</dd>
      </dl>
    </li>
  );
};

export default UpdatedStory;
