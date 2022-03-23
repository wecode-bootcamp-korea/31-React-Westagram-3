import React, { useEffect, useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import Aside from './Aside/Aside';
import Feed from './Feed/Feed';
import './Main.scss';
import Comment from './Comment/Comment';

const Main = () => {
  const USERNAME = 'jayYoon';
  const [content, setContent] = useState('');
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/jaewoong/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
      });
  }, []);

  const contentHandler = e => {
    setContent(e.target.value);
  };

  const submitComment = e => {
    e.preventDefault();
    let arr = commentList;
    arr.push({ userName: USERNAME, content: content, isLiked: false });
    setCommentList(arr);
    setContent('');
  };

  return (
    <div className="mainFrame">
      <Nav />
      <main>
        <section>
          <Feed
            commentList={commentList}
            content={content}
            submitComment={submitComment}
            contentHandler={contentHandler}
          />
          {/* <article>
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
                  <Comment
                    key={i}
                    id={i}
                    userName={commentList.userName}
                    content={commentList.content}
                    isLiked={commentList.isLiked}
                  />
                ))}
              </div>
              <form className="replyComponent" onSubmit={submitComment}>
                <input
                  className="insertReply"
                  type="text"
                  placeholder="댓글 달기..."
                  value={content}
                  onChange={contentHandler}
                />
                <button className="submitReply">입력</button>
              </form>
            </div>
          </article> */}
        </section>
        <Aside />
      </main>
    </div>
  );
};

export default Main;
