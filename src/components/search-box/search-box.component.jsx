import React from 'react';

import "./search-box.styles.css";

export const Searchbox = (props) => {

  return <input className="search" name=""
                type="search"
                placeholder={props.placeholder}
                onChange={props.handleChange}
           />;
};
