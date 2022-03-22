import React, { useState } from 'react';
import Comment from './Comment';

const Feed = ({ userId, userFeed, userComment, userImg }) => {
  const [comment, setComment] = useState('');
  const [isCommentBtn, setIsCommentBtn] = useState(false);
  const [commentArray, setComentArray] = useState(userComment);

  const commentChange = event => {
    setComment(event.target.value);
    hasCommentInput();
  };

  const hasCommentInput = () => {
    comment.length ? setIsCommentBtn(true) : setIsCommentBtn(false);
  };

  const handleCommentList = event => {
    event.preventDefault();
    if (comment === '') {
      return;
    } else {
      const myComment = {
        id: comment.length + 1,
        userName: 'duhyeon',
        content: comment,
        isLiked: false,
      };
      setComentArray(prevComment => [...prevComment, myComment]);
      setComment('');
    }
  };
  return (
    <article>
      <div className="feed-title">
        <img src="/images/duhyeon/javascript.png" alt="" />
        <span className="feed-id">{userId}</span>
        <button type="button" className="btn-feed">
          더보기
        </button>
      </div>
      <div className="feed-img">
        <img src={userImg} alt="" />
      </div>
      <div className="feed-bg">
        <div className="feed-btn-wrap">
          <button type="button" className="btn-like">
            좋아요
          </button>
          <button type="button" className="btn-write">
            댓글달기
          </button>
          <button type="button" className="btn-share">
            공유하기
          </button>
          <button type="button" className="btn-mark">
            북마크
          </button>
        </div>
        <div className="like-status">
          <img src="/images/duhyeon/javascript.png" alt="" />
          <p className="like-count">
            <span className="bold">duhyeon</span>님
            <span className="bold">외 10명</span>이 좋아합니다.
          </p>
        </div>
        <div className="feed-information">
          <span className="feed-id">{userId}</span>
          <span className="feed-content">{userFeed}</span>
          <a href="#!" className="btn-more">
            더보기
          </a>
          <ul className="feed-comment-wrap">
            {commentArray.map(comment => {
              return <Comment key={comment.id} {...comment} />;
            })}
          </ul>
          <p className="write-time">42분 전</p>
        </div>
        <div className="write-comment">
          <form className="comment-list" onSubmit={handleCommentList}>
            <input
              type="text"
              id="feed-comment"
              onChange={commentChange}
              value={comment}
              autoComplete="off"
              placeholder="댓글 달기..."
            />
            <button
              type="button"
              className="btn-comment"
              onClick={handleCommentList}
              disabled={isCommentBtn ? false : true}
            >
              게시
            </button>
          </form>
        </div>
      </div>
    </article>
  );
};

export default Feed;
