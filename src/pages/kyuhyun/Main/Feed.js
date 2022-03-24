import React from 'react';
import Comment from './Comment';
import { useState } from 'react';

const Feed = ({feedItem, addComment}) => {
  const { id, topUserImg, topUserName, mainImg, commentList } = feedItem
  // FIXME: 구조분해 two depth 지양

  // 1. 부모로부터 props를 통해 전달됩니까? 그러면 확실히 state가 아닙니다. => 유지보수
  // 2. 시간이 지나도 변하지 않나요? 그러면 확실히 state가 아닙니다.
  // 3. 컴포넌트 안의 다른 state나 props를 가지고 계산 가능한가요? 그렇다면 state가 아닙니다.

  const [comment, setComment] = useState('');

  const handleInputList = e => {
    e.preventDefault();

    const newComment = {
      id: commentList.length + 1,
      userName: 'loubxxtin',
      content: comment,
    };

    addComment(feedItem.id, newComment)
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
                {commentList.map(comment => {
                  return (
                    <Comment
                      key={comment.id}
                      userName={comment.userName}
                      comment={comment.content}
                    />
                  );
                })}
                {/* FIXME: 매개변수 자리에서 구조분해 */}
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
