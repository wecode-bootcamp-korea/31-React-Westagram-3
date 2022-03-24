import React, { useEffect, useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import Aside from './Aside/Aside';
import Feed from './Feed/Feed';
import './Main.scss';

const Main = () => {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/jaewoong/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);

  return (
    <div className="mainFrame">
      <Nav />
      <main>
        <section>
          {feedList.map(list => (
            <Feed key={list.id} {...feedList} />
            // <Feed
            //   key={element.id}
            //   thumbnail={element.thumbnail}
            //   followerThumbnail={element.followerThumbnail}
            //   userName={element.userName}
            //   location={element.location}
            //   photo={element.photo}
            //   feedText={element.feedText}
            //   comment={element.comment}
            // />
          ))}
        </section>
        <Aside />
      </main>
    </div>
  );
};

export default Main;
