import React from 'react';
import { useRef, useState } from 'react';

const CommentEditor = ({ onCreate }) => {
  const commentInput = useRef();

  const [state, setState] = useState('');

  const changeState = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  onCreate(state.author, state.content, state.emotion);

  return (
    <div className="CommentEditor">
      <form className="articleBottomBottom">
        <input
          ref={commentInput}
          className="articleBottomBottomComment"
          name="value"
          value={state.value}
          onChange={changeState}
          placeholder="댓글 달기.."
        />
        <button type="button" className="articleBottomBottomCommentBtn">
          게시
        </button>
      </form>
    </div>
  );
};

export default CommentEditor;
