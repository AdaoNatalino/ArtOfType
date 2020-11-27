import { useReducer, useContext, ReactNode, createContext } from "react";
import { ArtAction, artReducer, InitialState } from "./reducer";

const DataContext = createContext<ValueReturn>({
  artState: {
    arts: [],
    artToShow: null,
  },
});

export type ValueReturn = {
  artState: InitialState;
  dispatch?: React.Dispatch<ArtAction> | any;
};

export const useData = () => useContext(DataContext);

const initialState: InitialState = {
  arts: [],
  artToShow: null,
};

type ContextProps = {
  children?: ReactNode;
};

export const DataContextProvider: React.FC = ({ children }: ContextProps) => {
  const [artState, dispatch] = useReducer(artReducer, initialState);

  const value: any = {
    artState,
    dispatch,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
