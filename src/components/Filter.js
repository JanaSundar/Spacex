import React, { useEffect, useState } from 'react';
import { BASE_URL, options, years } from '../constants';
import { DATA, LOADING, useDispatchContext } from '../store/SpaceXContext';
import Title from './Title';
import Button from './Button';
import { FetchData } from '../utils/Fetch';

const Filter = () => {
  const [year, setYear] = useState('');
  const [launch, setLaunch] = useState('');
  const [landing, setLanding] = useState('');

  const dispatch = useDispatchContext();

  useEffect(() => {
    if (year || landing || launch) {
      dispatch({ type: LOADING, payload: true });
      let URL = BASE_URL;

      if (year) {
        URL += `&launch_year=${year}`;
      }

      if (launch) {
        URL += `&launch_success=${launch}`;
      }

      if (landing) {
        URL += `&land_success=${landing}`;
      }

      const updateData = async () => {
        const result = await FetchData(URL);
         dispatch({ type: DATA, payload: result });
         dispatch({ type: LOADING, payload: false });
      };

      updateData();
    }
  }, [year, landing, launch, dispatch]);

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
