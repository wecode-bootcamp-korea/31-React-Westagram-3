import React from 'react';
const Comment = ({ comment, i }) => {
  return <li key={i}>{comment}</li>;
};
export default Comment;
