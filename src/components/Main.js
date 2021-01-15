import React from 'react';
import loadable from '@loadable/component';

const Filter = loadable(() => import('./Filter'));
const Content = loadable(() => import('./Content'));

const Main = () => {
  return (
    <div className="main">
      <Filter />
      <Content />
    </div>
  );
};

export default Main;
