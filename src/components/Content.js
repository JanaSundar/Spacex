import React, { Fragment } from 'react';
import { useSpaceXData } from '../store/SpaceXContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Loading from '../utils/Loading';
import Empty from '../utils/Empty';
import Error from '../utils/Error';

const Content = () => {
  const { data, loading, error } = useSpaceXData();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  if (!data.length) {
    return <Empty />;
  }

  return (
    <div className="content">
      {data.map((space, ind) => (
        <Fragment key={ind}>
          {space.links?.mission_patch_small && (
            <div key={ind} className="content__card">
              <div className="content__card__image">
                <LazyLoadImage
                  src={space.links?.mission_patch_small}
                  alt={space.mission_name}
                  effect="blur"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="content__card__datacontainer">
                <h5 className="content__card__data__title">
                  {space.mission_name} #{ind + 1}
                </h5>
                <ContentData title="Launch Year" value={space.launch_year} />
                <ContentData title="Launch Year" value={space.launch_year} />
                <ContentData
                  title="Successful launch"
                  value={space.launch_success ? 'true' : 'false'}
                />
                <ContentData
                  title="Successful landing"
                  value={
                    space.rocket?.first_stage?.cores[0]?.land_success
                      ? 'true'
                      : 'false'
                  }
                />
              </div>
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Content;

const ContentData = ({ value, title }) => {
  return (
    <div className="content__card__data">
      <h5>{title}:</h5>
      <h5 className="data__value">{value}</h5>
    </div>
  );
};
