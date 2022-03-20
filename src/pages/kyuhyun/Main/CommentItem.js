import React from 'react';

const CommentItem = ({ value }) => {
  return (
    <div className="CommentItem">
      <div className="Comment">{value}</div>
    </div>
  );
};

export default CommentItem;
