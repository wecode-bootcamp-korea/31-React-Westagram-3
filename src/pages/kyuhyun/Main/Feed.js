import React from 'react';
import Comment from './Comment';
import { useState } from 'react';

const Feed = ({
  feedItem: { id, topUserImg, topUserName, mainImg, commentList },
}) => {
  const [commentArr, setCommentArr] = useState([...commentList]);
  const [comment, setComment] = useState('');

  const onClick = e => {
    if (e.key === 'enter') handleInputList();
  };

  const handleInputList = e => {
    e.preventDefault();
    let newComment = [...commentArr];
    newComment.push({
      id: newComment.length + 1,
      userName: 'loubxxtin',
      content: comment,
    });
    setCommentArr(newComment);
    setComment('');
  };

  return (
    <div key={id}>
      <article className="article">
        <section className="articleTop">
          <div className="articleTopLeft">
            <div className="articleTopLeftImg">
              <img src={topUserImg} alt="topUserImg" />
            </div>
            <h5 className="articleTopLeftText">{topUserName}</h5>
          </div>

          <div className="articleTopRight">
            <button type="button" className="btnDot" />
          </div>
        </section>
        <div className="articleMiddle">
          <img src={mainImg} alt="mainImg" />
        </div>

        <footer className="articleBottom">
          <div className="articleBottomTop">
            <button type="button" className="btnHeart" />
            <button type="button" className="btnComment" />
            <button type="button" className="btnShare" />
            <button type="button" className="btnBookmark" />
          </div>
          <div className="articleBottomMiddle">
            <div className="articleBottomMiddleLike">
              <img src="/images/kyuhyun/my.png" alt="bottomUserImg" />
              <span className="articleBottomMiddleText">
                loubxxtin님 외 10명이 좋아합니다.
              </span>
            </div>
          </div>
          <div className="articleBottomMiddleComment">
            <div className="articleBottomMiddleCommentText">
              <ul>
                {commentArr.map(comment => {
                  return (
                    <Comment
                      key={comment.id}
                      userName={comment.userName}
                      comment={comment.content}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
          <form className="articleBottomBottom">
            <input
              value={comment}
              onChange={e => {
                setComment(e.target.value);
              }}
              type="text"
              className="articleBottomBottomComment"
              name="value"
              placeholder="댓글 달기.."
            />

            <button
              className="articleBottomBottomCommentBtn"
              onClick={handleInputList}
            >
              게시
            </button>
          </form>
        </footer>
      </article>
    </div>
  );
};

export default Feed;
