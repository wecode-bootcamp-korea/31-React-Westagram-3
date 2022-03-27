import React, { useEffect, useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import Aside from './Aside/Aside';
import Feed from './Feed/Feed';
import './Main.scss';

const Main = () => {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('/data/jaewoong/feedData.json', {
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
          ))}
        </section>
        <Aside />
      </main>
    </div>
  );
};

export default Main;
