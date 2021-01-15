import React, { useEffect, useState } from 'react';
import { BASE_URL, options, years } from '../constants';
import Title from './Title';
import Button from './Button';
import { useSpaceXData } from '../store/SpaceXContext';

const Filter = () => {
  const [year, setYear] = useState('');
  const [launch, setLaunch] = useState('');
  const [landing, setLanding] = useState('');

  const { refetch } = useSpaceXData();

  useEffect(() => {
    if (year || landing || launch) {
      let URL = `${BASE_URL}/filter?`;

      if (year) {
        URL += `launch_year=${year}&`;
      }

      if (launch) {
        URL += `launch_success=${launch}&`;
      }

      if (landing) {
        URL += `land_success=${landing}`;
      }

      refetch(URL);
    }
  }, [year, landing, launch, refetch]);

  const handleClickYear = (value) => {
    setYear(value);
  };
  const handleClickLaunch = (value) => {
    setLaunch(value);
  };
  const handleClickLanding = (value) => {
    setLanding(value);
  };

  return (
    <div className="filter">
      <div className="filter__container">
        <h3 className="title">Filters</h3>
        <div className="filter__year">
          <Title value="Launch Year" />
          <div className="filter__grid">
            {years.map((val, ind) => (
              <Button
                active={year === val}
                onClick={() => handleClickYear(val)}
                key={ind}
                value={val}
              />
            ))}
          </div>
        </div>
        <div className="filter__launch">
          <Title value="Successful launch" />
          <div className="filter__grid">
            {options.map((val, ind) => (
              <Button
                active={launch === val}
                onClick={() => handleClickLaunch(val)}
                key={ind}
                value={val}
              />
            ))}
          </div>
        </div>
        <div className="filter__landing">
          <Title value="Successful landing" />
          <div className="filter__grid">
            {options.map((val, ind) => (
              <Button
                active={landing === val}
                onClick={() => handleClickLanding(val)}
                key={ind}
                value={val}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
