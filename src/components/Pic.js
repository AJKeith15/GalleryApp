import React from 'react';

// create list item for a picture using the url of the pic
const Pic = props => (
  <li>
    <img src={props.url} alt=""/>
  </li>
);

export default Pic;