import React from 'react';
import { useEffect, useState } from 'react';
import './Main.scss';
import Aside from './Aside/Aside';
import Nav from '../../../components/Nav/Nav';
import Feed from './Feed';

const Main = () => {
  const [feedArr, setFeedArr] = useState([]);
  // FIXME: Arr 등의 네이밍은 지양

  useEffect(() => {
    fetch('/data/kyuhyun/feedData.json')
      .then(res => res.json())
      .then(res => setFeedArr(res));
  }, []);

  // FIXME: 필요한 주석
  return (
    <div className="Main">
      {/* 헤더  */}
      <Nav />
      {/* 헤더 종료 */}
      {/* 전체페이지 시작 */}
      <main className="page">
        {/* 메인피드, 메인우측 감싸는 부모 */}
        <div className="main">
          {/* 메인피드 목록 시작  */}
          <div className="feeds">
            {feedArr.map(feedItem => {
              return (
                <Feed
                  key={feedItem.id}
                  feedItem={feedItem}

                  // topUserName={feedItem.topUserName}
                  // mainImg={feedItem.mainImg}
                  // commentArr={commentArr}
                  // comment={comment}
                  // setComment={setComment}
                  // handleInputList={handleInputList}
                  // commentList={commentList}
                />
              );
            })}
            {/* <article className="article">
              <section className="articleTop">
                <div className="articleTopLeft">
                  <div className="articleTopLeftImg">
                    <img src="/images/kyuhyun/storyimg1.png" />
                  </div>
                  <h5 className="articleTopLeftText">sunnyfterrain</h5>
                </div>

                <div className="articleTopRight">
                  <button type="button" className="btnDot" />
                </div>
              </section>
              <div className="articleMiddle">
                <img src="/images/kyuhyun/profile2.png" />
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
                    <img src="/images/kyuhyun/my.png" />
                    <span className="articleBottomMiddleText">
                      loubxxtin님 외 10명이 좋아합니다.
                    </span>
                  </div>
                </div>
                <div className="articleBottomMiddleComment">
                  <div className="articleBottomMiddleCommentText">
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
            </article> */}
          </div>
          {/* 메인피드 종료 */}
        </div>
        {/* 메인우측시작 */}
        <Aside />
        {/* 메인 우측 종료  */}
      </main>
    </div>
  );
};

export default Main;
