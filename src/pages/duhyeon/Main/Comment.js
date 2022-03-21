import React from 'react';

const Comment = props => {
  return (
    <li className="user-comment">
      <span className="feed-id">{props.userName}</span>
      <span className="feed-comment">{props.content}</span>
      <button
        type="button"
        className={props.isLiked ? 'btn-like active' : 'btn-like'}
      >
        like
      </button>
    </li>
  );
};

export default Comment;
