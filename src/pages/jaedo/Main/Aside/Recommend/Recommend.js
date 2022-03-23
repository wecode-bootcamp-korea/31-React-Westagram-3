import React from 'react';

const Recommend = ({ id, img, time }) => {
  return (
    <li className="Item">
      <div className="ItemImg">
        <img className="Profile" src={img} alt="x" />
      </div>
      <div className="User">
        <span>{id}</span>
        <span>{time}</span>
      </div>
    </li>
  );
};

export default Recommend;
