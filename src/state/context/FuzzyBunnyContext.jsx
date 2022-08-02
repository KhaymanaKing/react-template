import { createContext, useReducer, useMemo } from 'react';

export const FuzzyBunnyStateContext = createContext();
export const FuzzyBunnyDispatchContext = createContext();

//reducer is used for higher functions(?)
// it takes whatever the case is and should apply the right function
//its still kind of wizard magic.
//Also global state 
function reducer(list, { type, payload }) {
  switch(type) {
    case 'load':
      return payload;
    case 'add':
      return [...list, payload];
    case 'update':
      return list.map((f) => (f.id === payload.id ? payload : f));
    case 'remove':
      return list.filter((f) => f.id !== payload.id);
    default:
      throw Error(`Unknown: ${type}`);
  }
}

export default function FuzzyBunnyProvider({ children }) {
  const [families, familiesDispatch] = useReducer(reducer, null);
  const [bunnies, bunniesDispatch] = useReducer(reducer, null);

  const stateValue = {
    families,
    bunnies,
  };

  const dispatchValue = useMemo(
    () => ({
      familiesDispatch,
      bunniesDispatch,
    }),
    [familiesDispatch, bunniesDispatch]
  );
//State of the global varity. 
  return(
    <FuzzyBunnyStateContext.Provider value={stateValue}>
      <FuzzyBunnyDispatchContext.Provider value={dispatchValue}>
        {children}
      </FuzzyBunnyDispatchContext.Provider>
    </FuzzyBunnyStateContext.Provider>
  );
}
