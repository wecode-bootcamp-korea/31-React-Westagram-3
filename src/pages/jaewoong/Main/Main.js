import React from 'react';
import Nav from '../../../components/Nav/Nav';
import Aside from './Aside/Aside';

const Main = () => {
  return (
    <>
      <Nav />
      <div id="mainPage">
        <Aside />
        <main className="main">
          <section className="section">
            <article className="no1 postContainer">
              <div className="postTopbar">
                <img
                  className="middleThumbnail"
                  alt="팔로워 썸네일"
                  src="../../../../images/jaewoong/westa-contents/first-contents.png"
                />
                <div className="doubleLineContainer">
                  <span className="followeeId smallBoldFont">jay yoon</span>
                  <span className="followeeLocation smallGrayFont">
                    location스탠딩바 전기
                  </span>
                </div>
                <img
                  className="tridotBtn"
                  alt="게시글 설정"
                  src="../../../../images/jaewoong/dot_btn.png"
                />
              </div>
              <img
                className="photo"
                alt="사진"
                src="../../../../images/jaewoong/westa-contents/first-contents.png"
              />
              <div className="postInteractionParts">
                <div className="postIconBar">
                  <div className="postIconContainer">
                    <img
                      className="postIcon blankHeart"
                      alt="blank heart"
                      src="../../../../images/jaewoong/heart_logo.png"
                    />
                    <img
                      className="postIcon redHeart hidden"
                      alt="red heart"
                      src="../../../../images/jaewoong/redheart.png"
                    />
                    <img
                      className="postIcon reply"
                      alt="reply"
                      src="../../../../images/jaewoong/talk.png"
                    />
                    <img
                      className="postIcon download"
                      alt="download"
                      src="../../../../images/jaewoong/download.png"
                    />
                  </div>
                  <img
                    className="postIcon bookmark"
                    alt="bookmart"
                    src="../../../../images/jaewoong/bookmark.png"
                  />
                </div>
                <div className="postLikeCounter">
                  <img
                    className="smallFolloweeThumbnail"
                    alt="thumbnail"
                    src="../../../../images/jaewoong/westa-userthumnails/thumb5.png"
                  />
                  <span className="smallBoldFont">aineworld 외 10명</span>
                  <span className="small-font">이 좋아합니다.</span>
                </div>
                <div className="postMaintext">
                  <span className="smallBoldFont">jay yoon</span>
                  <span>아 또가고싶다 또가면되지</span>
                </div>
                <ul className="replyContainer" />
                <form className="replyComponent">
                  <input
                    className="insertReply"
                    type="text"
                    placeholder="댓글 달기..."
                  />
                  <button className="submitReply">입력</button>
                </form>
              </div>
            </article>
          </section>
        </main>
      </div>
    </>
  );
};

export default Main;
