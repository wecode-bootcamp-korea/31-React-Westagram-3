import React from 'react';

const FooterList = ({ url, name }) => {
  return (
    <li>
      <a href={url}>{name}</a>
    </li>
  );
};

export default FooterList;
