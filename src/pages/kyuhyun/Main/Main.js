import React from 'react';
import './Main.scss';
import Aside from './Aside/Aside';

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
                  <i className="fa-solid fa-ellipsis" />
                </div>
              </section>
              <div className="articleMiddle">
                <img src="/images/kyuhyun/profile2.png" />
              </div>

              <footer className="articleBottom">
                <div className="articleBottomTop">
                  <div className="articleBottomTopLeft">
                    <div className="redHeart">
                      <i className="fa-solid fa-heart" />
                    </div>
                    <i className="fa-regular fa-comment" />
                    <i className="fa-solid fa-arrow-up-from-bracket" />
                  </div>
                  <div className="articleBottomTopRight">
                    <i className="fa-regular fa-bookmark" />
                  </div>
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
