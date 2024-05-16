import React from 'react';
import { createContext, useContext } from 'react';
import rootStore from '../stores/rootStore';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const RootStore = new rootStore();

  return (
    <StoreContext.Provider value={RootStore}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return store;
};
