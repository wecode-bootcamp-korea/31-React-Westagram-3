import React from 'react';
import { useEffect, useState } from 'react';
import './Main.scss';
import Aside from './Aside/Aside';
import Nav from '../../../components/Nav/Nav';
import Comment from './Comment';
// import { FavoriteIcon } from '@mui/icons-material';
// import FavoriteIcon from '@mui/icons-material/Favorite';

const Main = () => {
  const [commentArr, setCommentArr] = useState([]);
  const [comment, setComment] = useState('');

  useEffect(() => {
    fetch('/data/commentData.json')
      .then(res => res.json())
      .then(res => setCommentArr(res));
  }, []);
  // const onClick = e => {
  //   if (e.key === 'enter') handleInputList();
  // };
  // useEffect(() => {
  //   fetch('/data/feedData.json')
  //   .then(res=> res.json())
  //   .then(res=> 피드배열 만들어줘야함 (res));
  // }, []);

  // const handleFeedList = e => {
  //   e.preventDefault();
  //   let
  // }

  const handleInputList = e => {
    e.preventDefault();
    // if (comment === '') {
    //   return;
    // }
    let newComment = [...commentArr];
    newComment.push({
      id: newComment.length + 1,
      userName: 'loubxxtin',
      content: comment,
    });

    setCommentArr(newComment);
    setComment('');
  };
  // };

  return (
    <div className="Main">
      <Nav />
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
