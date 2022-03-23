import React from 'react';

const Comment = ({ userName, content, isLiked }) => {
  return (
    <li className="user-comment">
      <span className="feed-id">{userName}</span>
      <span className="feed-comment">{content}</span>
      <button
        type="button"
        className={isLiked ? 'btn-like active' : 'btn-like'}
      >
        like
      </button>
    </li>
  );
};

export default Comment;
