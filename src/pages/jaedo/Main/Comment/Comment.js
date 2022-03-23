import React from 'react';
import NoHeart from '@mui/icons-material/FavoriteBorder';
import Heart from '@mui/icons-material/Favorite';
import './Comment.scss';
const Comment = ({ comment, clickLike, deleteComment }) => {
  return (
    <li className="commentList">
      <span>{comment.content}</span>
      <div className="createCommentRight">
        <button type="button" onClick={() => clickLike(comment.id)}>
          {comment.like ? <Heart style={{ color: 'red' }} /> : <NoHeart />}
        </button>
        <button type="button" onClick={() => deleteComment(comment.id)}>
          x
        </button>
      </div>
    </li>
  );
};

export default Comment;
