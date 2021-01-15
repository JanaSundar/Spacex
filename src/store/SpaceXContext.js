import React, { useContext } from 'react';
import useFetch from '../Hooks/useFetch';

const SpaceXContext = React.createContext();

export const useSpaceXData = () => {
  return useContext(SpaceXContext);
};

const useSpaceXProvider = () => {
  const { data, loading, refetch, error } = useFetch();
  return { data, loading, refetch, error };
};

function SpaceXProvider({ children }) {
  const data = useSpaceXProvider();

  return (
    <SpaceXContext.Provider value={data}>{children}</SpaceXContext.Provider>
  );
}
export { SpaceXProvider };
