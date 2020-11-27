import { Artwork } from "./API";

export const ACTIONS = {
  ALL: "all",
};

export type InitialState = {
  arts: Artwork[] | any;
  artToShow: Artwork | null;
};

export type ArtAction = {
  type: string;
  dispatch?: () => any;
  payload?: Artwork | Artwork[];
};

export const artReducer = (state: InitialState, action: ArtAction) => {
  switch (action.type) {
    case ACTIONS.ALL: {
      return {
        ...state,
        arts: action.payload,
      };
    }
    default:
      return state;
  }
};
