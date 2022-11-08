const SET_ACTIVE = "SET_ACTIVE" as const;
const UNSET_ACTIVE = "UNSET_ACTIVE" as const;

export const setActive = (name: string) => ({
  type: SET_ACTIVE,
  payload: name,
});

export const unsetActive = (name: string) => ({
  type: UNSET_ACTIVE,
  payload: name,
});

export type isActiveAction = 
  | ReturnType<typeof setActive> 
  | ReturnType<typeof unsetActive>;

export type isActiveState = {
  bell: boolean;
  bag: boolean;
  planEdit: boolean;
  partyEdit: boolean;
  partyItem: boolean;
  planShare: boolean;
}

const initialState: isActiveState = { bell: false, bag: false, planEdit: false, partyEdit: false, partyItem: false, planShare: false };

export default function isClicked(
  state: isActiveState = initialState,
  action: isActiveAction
): isActiveState {
  switch(action.type) {
    case SET_ACTIVE:
      return {
        ...state,
        [action.payload]: true,
      }
    case UNSET_ACTIVE:
      return {
        ...state,
        [action.payload]: false,
      }
    default:
      return state;
  }
}
