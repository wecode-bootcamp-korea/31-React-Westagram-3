import React, { useState } from 'react';
import Comment from '../Comment/Comment';
import './Feed.scss';
const Feed = ({ user_id, profile_img, content_img, comment_arr }) => {
  const [comment, setComment] = useState({ id: 0, content: '', like: false });
  const [commentArr, setCommentArr] = useState([...comment_arr]);
  const [id, setId] = useState(4);

  const createComment = e => {
    e.preventDefault();
    let blank_pattern = /^\s+|\s+$/g;
    if (
      comment.content.replace(blank_pattern, '') !== '' &&
      comment.content !== ''
    ) {
      setCommentArr(commentArr => [...commentArr, comment]);
      setComment({ ...comment, id: id, content: '' });
      setId(id + 1);
    } else {
      alert('내용이 공백입니다.');
      setComment({ ...comment, content: '' });
    }
  };
  const handleComment = e => {
    setComment({ ...comment, id: id, content: e.target.value });
    if (e.key === 'Enter') {
      e.preventDefault();
      createComment();
    }
  };
  const clickLike = id => {
    setCommentArr(
      commentArr.map(comment =>
        comment.id === id ? { ...comment, like: !comment.like } : comment
      )
    );
  };
  const deleteComment = id => {
    setCommentArr(commentArr =>
      commentArr.filter(comment => comment.id !== id)
    );
  };
  return (
    <div className="feeds">
      <article>
        <div className="articleTop">
          <div className="articleTopLeft">
            <img className="profile" src={profile_img} alt="profile_img" />
            <span>{user_id}</span>
          </div>
          <div className="articleTopRight">
            <img className="more" alt="more" src="/images/jaedo/more.png" />
          </div>
        </div>
        <div className="articleContent">
          <img alt="content_img" src={content_img} />
        </div>
        <div className="articleContent-footer" />
        <form className="comment">
          <input
            className="commentInput"
            type="text"
            onChange={e => handleComment(e)}
            value={comment.content}
          />
          <button className="commentBtn" onClick={createComment}>
            게시
          </button>
          <ul className="commentContents">
            {commentArr &&
              commentArr.map(comment => (
                <Comment
                  key={comment.id}
                  comment={comment}
                  clickLike={clickLike}
                  deleteComment={deleteComment}
                />
              ))}
          </ul>
        </form>
      </article>
    </div>
  );
};

export default Feed;
