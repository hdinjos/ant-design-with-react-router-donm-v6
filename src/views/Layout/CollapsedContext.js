import { useState, createContext } from "react";
const CollapsedContext = createContext({
  collapsed: false,
  setCollapsed: () => { }
});

const CollapsedContextProvider = ({ children }) => {
  const setCollapsed = (collapsed) => {
    setState({ ...state, collapsed });
  }
  const initialState = {
    collapsed: false,
    setCollapsed
  }
  const [state, setState] = useState(initialState);

  return (
    <CollapsedContext.Provider value={state}>
      {children}
    </CollapsedContext.Provider>
  );
};

export { CollapsedContext, CollapsedContextProvider }
