import React from 'react';
const Comment = ({ id, userName, comment }) => {
  return (
    <li key={id}>
      <span className="name">{userName}</span>
      <span className="comment">{comment}</span>
    </li>
  );
};
export default Comment;
