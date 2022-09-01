import React from "react";
import { IAppContext } from "../types/context";

export const AppContext = React.createContext<IAppContext | null>(null);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  const updateSearchQuery = (searchQuery: string) => {
    setSearchQuery(searchQuery);
  };

  return (
    <AppContext.Provider
      value={{
        searchQuery,
        updateSearchQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
