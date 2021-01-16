import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Card = ({ data, ind }) => {
  return (
    <div className="content__card">
      <div className="content__card__image">
        <LazyLoadImage
          src={data.links?.mission_patch_small}
          alt={data.mission_name}
          effect="blur"
          width="100%"
          height="100%"
        />
      </div>
      <div className="content__card__datacontainer">
        <h5 className="content__card__data__title">
          {data.mission_name} #{ind + 1}
        </h5>
        <MissionId value={data.mission_id} title="mission ids" />
        <ContentData title="Launch Year" value={data.launch_year} />
        <ContentData
          title="Successful launch"
          value={data.launch_success ? 'true' : 'false'}
        />
        <ContentData
          title="Successful landing"
          value={
            data.rocket?.first_stage?.cores[0]?.land_success ? 'true' : 'false'
          }
        />
      </div>
    </div>
  );
};

export default Card;

const ContentData = ({ value, title }) => {
  return (
    <div className="content__card__data">
      <h5>{title}:</h5>
      <h5 className="data__value">{value}</h5>
    </div>
  );
};

const MissionId = ({ value, title }) => {
  return (
    <>
      <div className="content__card__data">
        <h5>{title}:</h5>
        {value.length === 0 && <h5 className="data__value">----</h5>}
      </div>
      <ul className="data__list">
        {value.map((id, ind) => (
          <li key={ind}>{id}</li>
        ))}
      </ul>
    </>
  );
};
