import { DocData } from "../components/plan/createPlan/modal/SearchPlaceModal";

const ADD_PLACE = 'ADD_PLACE' as const;
const CLEAR_PLACE = 'CLEAR_PLACE' as const;

export const addPlace = (place: DocData) => ({
  type: ADD_PLACE,
  payload: place
});

export const clearPlace = () => ({
  type: CLEAR_PLACE,
});

type PlaceAction = ReturnType<typeof addPlace> | ReturnType<typeof clearPlace>;

type PlaceState = {
  place: DocData | null;
}

const initialState: PlaceState = { place: null };

export default function place(
  state: PlaceState = initialState,
  action: PlaceAction,
): PlaceState {
  switch(action.type) {
    case ADD_PLACE:
      return {
        place: action.payload
      };
    case CLEAR_PLACE:
      return { place: null };
    default:
      return state;
  }
}