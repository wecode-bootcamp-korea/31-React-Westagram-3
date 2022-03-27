import React from 'react';
import './Comment.scss';

const Comment = ({ id, userName, content, isLiked }) => {
  return (
    <dl key={id}>
      <dt className="bold">{userName}</dt>
      <dd>{content}</dd>
      <dd>
        <img
          className={isLiked ? 'hidden' : 'show'}
          alt="liked"
          src="../../../../images/jaewoong/heart_logo.png"
        />
        <img
          className={isLiked ? 'show' : 'hidden'}
          alt="notLiked"
          src="../../../../images/jaewoong/redheart.png"
        />
      </dd>
    </dl>
  );
};
export default Comment;
