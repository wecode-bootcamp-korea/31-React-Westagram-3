import React from 'react';
const Comment = ({ key, userName, comment }) => {
  return (
    <li key={key}>
      {userName}
      {comment}
    </li>
  );
};
export default Comment;
