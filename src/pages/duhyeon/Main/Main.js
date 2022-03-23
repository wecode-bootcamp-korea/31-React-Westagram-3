import React, { useState, useEffect } from 'react';
import '../Main/Main.scss';
import Aside from './Aside/Aside';
import Nav from '../../../components/Nav/Nav';
import Feed from './Feed';

const Main = () => {
  const [feedArr, setFeedArr] = useState([]);
  useEffect(() => {
    // fetch('http://10.59.1.189:8000/users/signup', {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeedArr(data);
      });
  }, []);
  return (
    <div className="main">
      <Nav />
      <div className="container">
        <div className="feeds">
          {feedArr.map(list => {
            return <Feed key={list.id} {...list} />;
          })}
        </div>
        <Aside />
      </div>
    </div>
  );
};

export default Main;
