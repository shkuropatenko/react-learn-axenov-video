import React, {useState} from 'react';

const Header = (props) => {

  return (
    <header>
      <ul>
        {props.names.map((name) => {
          return <li key={name}>{name}</li>
        })}
      </ul>
    </header>
  );
}

export default Header;