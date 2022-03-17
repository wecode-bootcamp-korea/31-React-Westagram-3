import React from 'react';
import './Main.scss';
import Aside from './Aside/Aside';
// import { FavoriteIcon } from '@mui/icons-material';
// import FavoriteIcon from '@mui/icons-material/Favorite';

const Main = () => {
  return (
    <div className="Main">
      <main className="page">
        <div className="main">
          <div className="feeds">
            <article className="article">
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
                  <div className="articleBottomMiddleCommentText" />
                </div>
                <form className="articleBottomBottom">
                  <input
                    type="text"
                    className="articleBottomBottomComment"
                    placeholder="댓글 달기.."
                  />
                  <button
                    type="button"
                    className="articleBottomBottomCommentBtn"
                  >
                    게시
                  </button>
                </form>
              </footer>
            </article>
          </div>
        </div>
        {/* 메인우측시작 */}
        <Aside />
      </main>
    </div>
  );
};

export default Main;
