import React from 'react';

const Story = ({ id, img, time }) => {
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

export default Story;
