import React, { useState } from 'react';
import Comment from '../Comment/Comment';

const Feed = ({
  thumbnail,
  followerThumbnail,
  userName,
  location,
  photo,
  feedText,
  comment,
}) => {
  const USERNAME = 'jayYoon';
  const [commentList, setCommentList] = useState(comment);
  const [content, setContent] = useState('');

  const submitComment = e => {
    e.preventDefault();
    let arr = commentList;
    arr.push({
      // id: arr.length + 1
      userName: USERNAME,
      content: content,
      isLiked: false,
    });
    setCommentList(arr);
    setContent('');
    // if문
  };

  const contentHandler = e => {
    setContent(e.target.value);
  };

  return (
    <article>
      <div className="postHeader">
        <img className="middleThumbnail" alt="팔로워 썸네일" src={thumbnail} />
        <dl>
          <dt className="bold">{userName}</dt>
          <dd className="gray">{location}</dd>
        </dl>
        <img
          className="tridotBtn"
          alt="게시글 설정"
          src="../../../../images/jaewoong/dot_btn.png"
        />
      </div>
      <img className="photo" alt="사진" src={photo} />
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
            src={followerThumbnail}
          />
          <span className="bold">aineworld 외 10명</span>
          <span className="small-font">이 좋아합니다.</span>
        </p>
        <dl className="postMaintext">
          <dt className="bold">{userName}</dt>
          <dd>{feedText}</dd>
        </dl>
        <div className="replyContainer">
          {comment.map(element => (
            <Comment
              key={element.id}
              userName={element.userName}
              content={element.content}
              isLiked={element.isLiked}
            />
          ))}
          {commentList.map((element, i) => (
            <Comment
              key={i}
              userName={element.userName}
              content={element.content}
              isLiked={element.isLiked}
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
    </article>
  );
};

export default Feed;
