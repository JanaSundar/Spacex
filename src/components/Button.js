import React from 'react';

const Button = ({ value, onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={`filter__btn ${active ? 'active' : ''}`}
    >
      {value}
    </button>
  );
};

export default Button;
