import React from 'react';
import CommentItem from './CommentItem';

const CommentList = ({ commentList }) => {
  return (
    
      {commentList.map((it, i) => (
        return (

        <li key={i}>{it}</li>
        )
        
      ))}
    </div>
  );
};

CommentList.defaultProps = {
  commentList: [],
};

export default CommentList;
