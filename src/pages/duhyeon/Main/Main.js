import React, { useState } from 'react';
import '../Main/Main.scss';
import Aside from './Aside/Aside';
import Comment from './Comment';
import Nav from '../../../components/Nav/Nav';

const Main = () => {
  const [btnActive, setBtnActive] = useState(false);
  const [comment, setComment] = useState('');
  const [isCommentBtn, setIsCommentBtn] = useState(false);
  const [commentArray, setCommentArray] = useState([]);

  const addClassActive = () => {
    setBtnActive(!btnActive);
  };

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
      setCommentArray(prevComment => [...prevComment, comment]);
      setComment('');
    }
  };

  return (
    <div className="container">
      <Nav />
      <div className="main">
        <div className="feeds">
          <article>
            <div className="feed-title">
              <img src="/images/duhyeon/javascript.png" alt="" />
              <span className="feed-id">weeecode</span>
              <button type="button" className="btn-feed">
                더보기
              </button>
            </div>
            <div className="feed-img">
              <img src="/images/duhyeon/javascript.png" alt="" />
            </div>
            <div className="feed-bg">
              <div className="feed-btn-wrap">
                <button
                  type="button"
                  className="btn-like"
                  onClick={addClassActive}
                >
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
                <span className="feed-id">!backend_dev</span>
                <span className="feed-content">
                  안에 어떤 내용을 넣지 안에 어떤 내용을 넣지 안에 어떤 내용을
                  넣지 안에 어떤 내용을 넣지 안에 어떤 내용을 넣지 안에 어떤
                  내용을 넣지 안에 어떤 내용을 넣지 안에 어떤 내용을 넣지 안에
                  어떤 내용을 넣지 안에 어떤 내용을 넣지 안에 어떤 내용을 넣지
                  안에 어떤 내용을 넣지 안에 어떤 내용을 넣지 안에 어떤 내용을
                  넣지 안에 어떤 내용을 넣지 안에 어떤 내용을 넣지
                </span>
                <a href="#!" className="btn-more">
                  더보기
                </a>
                <Comment commentArray={commentArray} />
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
        </div>
        <Aside />
      </div>
    </div>
  );
};

export default Main;
