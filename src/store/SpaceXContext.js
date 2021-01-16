import React, { useContext, useState } from 'react';
// import useFetch from '../Hooks/useFetch';

const SpaceXContext = React.createContext();
const SpaceXDispatchContext = React.createContext();

export const useSpaceXData = () => {
  return useContext(SpaceXContext);
};

export const useDispatchContext = () => {
  return useContext(SpaceXDispatchContext);
};

function SpaceXProvider({ children, state = [] }) {
  const [data, setData] = useState(state ?? []);
  const [loading, setLoading] = useState(false);

  const value = { data, loading };
  const dispatchValue = { setData, setLoading };

  return (
    <SpaceXContext.Provider value={value}>
      <SpaceXDispatchContext.Provider value={dispatchValue}>
        {children}
      </SpaceXDispatchContext.Provider>
    </SpaceXContext.Provider>
  );
}
export { SpaceXProvider };
