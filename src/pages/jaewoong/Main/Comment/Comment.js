import { render } from '@testing-library/react';
import React from 'react';
import './Comment.scss';

const Comment = props => {
  return (
    <dl>
      <dt>{props.id}</dt>
      <dd>{props.comment}</dd>
    </dl>
  );
};

export default Comment;
