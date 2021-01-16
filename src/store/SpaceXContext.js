import React, { useContext, useState } from 'react';
// import useFetch from '../Hooks/useFetch';

const SpaceXContext = React.createContext();

export const useSpaceXData = () => {
  return useContext(SpaceXContext);
};

// const useSpaceXProvider = () => {
//   const { data, loading, refetch, error } = useFetch();
//   return { data, loading, refetch, error };
// };

function SpaceXProvider({ children, state = [] }) {
  const [data, setData] = useState(state ?? []);

  const value = { data, setData };

  return (
    <SpaceXContext.Provider value={value}>{children}</SpaceXContext.Provider>
  );
}
export { SpaceXProvider };
