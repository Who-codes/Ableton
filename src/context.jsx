import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [showMore, setShowMore] = useState(false);

  const handleMore = () => {
    setShowMore(!showMore);
  };

  return (
    <AppContext.Provider
      value={{
        showMore,
        handleMore,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
