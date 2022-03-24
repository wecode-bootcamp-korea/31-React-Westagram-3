import React from 'react';
const Comment = ({ id, userName, comment }) => {
  return (
    <li key={id}>
      {/* FIXME: key는 배열을 만드는 장소에서만 */}
      <span className="name">{userName}</span>
      <span className="comment">{comment}</span>
    </li>
  );
};
export default Comment;
