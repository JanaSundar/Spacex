import React, { Fragment } from 'react';
import { useSpaceXData } from '../store/SpaceXContext';
import Loading from '../utils/Loading';
import Empty from '../utils/Empty';
import Error from '../utils/Error';
import loadable from '@loadable/component';

const Card = loadable(() => import('./Card'));

const Content = () => {
  const { data, loading, error } = useSpaceXData();

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  if (!data.length) {
    return <Empty />;
  }

  return (
    <div className="content">
      {data.map((space, ind) => (
        <Fragment key={ind}>
          {space.links?.mission_patch_small && (
            <Card data={space} ind={ind} key={ind} />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Content;
