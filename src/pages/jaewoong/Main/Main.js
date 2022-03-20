import React, { useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import Aside from './Aside/Aside';
import './Main.scss';
import Comment from './Comment/Comment';

const Main = () => {
  const USERNAME = 'jayYoon';
  const [textValue, setTextValue] = useState('');
  const [commentList, setCommentList] = useState([]);
  let commentCounter = 1;
  const textHandler = e => {
    setTextValue(e.target.value);
  };

  const submitComment = e => {
    e.preventDefault();
    let arr = commentList;
    arr.push({ id: USERNAME, comment: textValue });
    setCommentList(arr);

    console.log(commentList);
    setTextValue('');
  };
  return (
    <div className="mainFrame">
      <Nav />
      <main>
        <section>
          <article>
            <div className="postHeader">
              <img
                className="middleThumbnail"
                alt="팔로워 썸네일"
                src="../../../../images/jaewoong/westa-contents/first-contents.png"
              />
              <dl>
                <dt className="bold">jay yoon</dt>
                <dd className="gray">스탠딩바 전기</dd>
              </dl>
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
              <p>
                <img
                  className="smallFolloweeThumbnail"
                  alt="thumbnail"
                  src="../../../../images/jaewoong/westa-userthumnails/thumb5.png"
                />
                <span className="bold">aineworld 외 10명</span>
                <span className="small-font">이 좋아합니다.</span>
              </p>
              <dl className="postMaintext">
                <dt className="bold">jay yoon</dt>
                <dd>아 또가고싶다 또가면되지</dd>
              </dl>
              <div className="replyContainer">
                {commentList.map((commentList, i) => (
                  <dl key={i} id={i}>
                    <dt>{commentList.id}</dt>
                    <dd>{commentList.comment}</dd>
                  </dl>
                ))}
              </div>
              <form className="replyComponent" onSubmit={submitComment}>
                <input
                  className="insertReply"
                  type="text"
                  placeholder="댓글 달기..."
                  value={textValue}
                  onChange={textHandler}
                />
                <button className="submitReply">입력</button>
              </form>
            </div>
          </article>
        </section>
        <Aside />
      </main>
    </div>
  );
};

export default Main;
