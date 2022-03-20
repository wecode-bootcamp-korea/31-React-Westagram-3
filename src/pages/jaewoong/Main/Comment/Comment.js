import { render } from '@testing-library/react';
import React from 'react';
import './Comment.scss';

const Comment = props => {
  return (
    <dl>
      <dt className="username bold">dd</dt>
      <dd className="commentContents">담에 같이가자~</dd>
    </dl>
  );
};

export default Comment;
