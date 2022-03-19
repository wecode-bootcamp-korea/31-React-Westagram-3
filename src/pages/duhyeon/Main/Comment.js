import React from 'react';

const Comment = props => {
  // eslint-disable-next-line react/destructuring-assignment
  const commentArray = props.commentArray;
  const commentList = commentArray.map((value, key) => (
    <div key={key} className="user-comment">
      <span className="feed-id">duhyeon</span>
      <span className="feed-comment">{value}</span>
      <button type="button" className="btn-like">
        like
      </button>
    </div>
  ));
  return <div className="feed-comment-wrap">{commentList}</div>;
};

export default Comment;
