const SET_ACTIVE = "SET_ACTIVE" as const;
const UNSET_ACTIVE = "UNSET_ACTIVE" as const;
const SET_TOGGLE = "SET_TOGGLE" as const;

export const setActive = (name: string) => ({
  type: SET_ACTIVE,
  payload: name,
});

export const unsetActive = (name: string) => ({
  type: UNSET_ACTIVE,
  payload: name,
});

export const setToggle = (name: string, currentState: boolean) => ({
  type: SET_TOGGLE,
  payload: {
    name,
    currentState,
  }
});

export type isActiveAction =
  | ReturnType<typeof setActive>
  | ReturnType<typeof unsetActive>
  | ReturnType<typeof setToggle>;

export type isActiveState = {
  bell: boolean;
  cart: boolean;
  planEdit: boolean;
  partyEdit: boolean;
  partyItem: boolean;
  planShare: boolean;
  planDetail: boolean;
  schduleAdd: boolean;
  schduleEdit: boolean;
  schduleEditOne: boolean;
  budgetAdd: boolean;
  budgetEdit: boolean;
  budgetEditOne: boolean;
  searchInfoAdd: boolean;
  searchInfoEdit: boolean;
  searchInfoEditOne: boolean;
  friendList: boolean;
  deleteFriend: boolean;
  friendDetail: boolean;
};

const initialState: isActiveState = {
  bell: false,
  cart: false,
  planEdit: false,
  partyEdit: false,
  partyItem: false,
  planShare: false,
  planDetail: false,
  schduleAdd: false,
  schduleEdit: false,
  schduleEditOne: false,
  budgetAdd: false,
  budgetEdit: false,
  budgetEditOne: false,
  searchInfoAdd: false,
  searchInfoEdit: false,
  searchInfoEditOne: false,
  friendList: false,
  deleteFriend: false,
  friendDetail: false,
};

export default function isClicked(
  state: isActiveState = initialState,
  action: isActiveAction
): isActiveState {
  switch (action.type) {
    case SET_ACTIVE:
      return {
        ...state,
        [action.payload]: true,
      };
    case UNSET_ACTIVE:
      return {
        ...state,
        [action.payload]: false,
      };
    case SET_TOGGLE:
      return {
        ...state,
        [action.payload.name]: !action.payload.currentState,
      }
    default:
      return state;
  }
}
