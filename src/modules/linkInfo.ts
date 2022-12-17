const ADD_LINK = 'ADD_LINK' as const;
const DELETE_LINK = 'DELETE_LINK' as const;
const CLEAR_LINK = 'CLEAR_LINK' as const;
const CLICK_LINK = 'CLICK_LINK' as const;
const UPDATE_LINK = 'UPDATE_LINK' as const;

let nextId = 0;

export const addLink = (link: string) => ({
  type: ADD_LINK,
  payload: {
    link,
    id: nextId++,
  }
});

export const deleteLink = (id: number) => ({
  type: DELETE_LINK,
  payload: id,
});

export const clearLink = () => ({
  type: CLEAR_LINK,
});

export const clickLink = (id: number) => ({
  type: CLICK_LINK,
  payload: id,
});

export const updateLink = (link: string, id: number) => ({
  type: UPDATE_LINK,
  payload: {
    link,
    id,
  }
});

export type LinkInfoAction = 
  | ReturnType<typeof addLink>
  | ReturnType<typeof deleteLink>
  | ReturnType<typeof clearLink>
  | ReturnType<typeof clickLink>
  | ReturnType<typeof updateLink>;

export type LinkInfoState = {
  link: string,
  id: number,
  isSelected: boolean,
}

export type LinkInfosState = LinkInfoState[];

const initialState: LinkInfosState = [];

export default function linkInfo(
  state: LinkInfosState = initialState,
  action: LinkInfoAction
): LinkInfosState {
  switch(action.type) {
    case ADD_LINK:
      return state.concat({
        link: action.payload.link,
        id: action.payload.id,
        isSelected: false,
      });
    case DELETE_LINK:
      return state.filter(item => item.id !== action.payload);
    case CLICK_LINK:
      return state.map(item => item.id === action.payload ? { 
        link: item.link,
        id: item.id,
        isSelected: true,
      } : item);
    case UPDATE_LINK:
      return state.map(item => item.id === action.payload.id ? {
        link: action.payload.link,
        id: item.id,
        isSelected: false,
      }: item)
    case CLEAR_LINK:
      return [];
    default:
      return state;
  }
}