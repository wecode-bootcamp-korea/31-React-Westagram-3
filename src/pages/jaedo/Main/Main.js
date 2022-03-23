import React, { useEffect, useState } from 'react';
import './Main.scss';
import Side from './Aside/ASide';
import Nav from '../../../components/Nav/Nav';
import Feed from './Feed/Feed';
function Main() {
  const [feedArr, setFeedArr] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/data/jaedo/Feed.json')
      .then(res => res.json())
      .then(res => setFeedArr(res.result));
  }, []);
  return (
    <>
      <Nav />
      <div className="mainWrap">
        <div className="main">
          <div className="mainLeft">
            {feedArr &&
              feedArr.map(feed => <Feed key={feed.user_id} {...feed} />)}
          </div>
          <div className="mainRight">
            <Side />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
