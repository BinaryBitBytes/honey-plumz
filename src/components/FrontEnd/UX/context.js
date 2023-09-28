import { createContext, useState } from "react";

const MyContext = createContext();

export function MyContextProvider({ children }) {
  const [contextValue, setContextValue] = useState(/* initial value */);

  return (
    <MyContext.Provider value={{ contextValue, setContextValue }}>
      {children}
    </MyContext.Provider>
  );
}