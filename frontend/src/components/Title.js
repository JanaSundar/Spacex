import React from 'react';

const Title = ({ value }) => {
  return (
    <div className="filter__title">
      <h4 className="filter__title__name">{value}</h4>
      <div className="hr"></div>
    </div>
  );
};

export default Title;
