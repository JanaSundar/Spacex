import React, { useContext } from 'react';

export const SpaceXContext = React.createContext({ data: [], loading: false });
export const SpaceXDispatchContext = React.createContext();

export const useSpaceXData = () => {
  return useContext(SpaceXContext);
};

export const useDispatchContext = () => {
  return useContext(SpaceXDispatchContext);
};

export const LOADING = 'LOADING';
export const DATA = 'DATA';

const spacexReducer = (state, action) => {
  switch (action.type) {
    case DATA: {
      return { ...state, data: action.payload };
    }
    case LOADING: {
      return { ...state, loading: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

function SpaceXProvider({ children, data = [] }) {
  const [state, dispatch] = React.useReducer(spacexReducer, {
    data: data ?? [],
    loading: false,
  });

  return (
    <SpaceXContext.Provider value={state}>
      <SpaceXDispatchContext.Provider value={dispatch}>
        {children}
      </SpaceXDispatchContext.Provider>
    </SpaceXContext.Provider>
  );
}
export { SpaceXProvider };
