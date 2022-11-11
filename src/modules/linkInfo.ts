const ADD_LINK = 'ADD_LINK' as const;
const DELETE_LINK = 'DELETE_LINK' as const;
const CLEAR_LINK = 'CLEAR_LINK' as const;

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
})

export const clearLink = () => ({
  type: CLEAR_LINK,
})

export type LinkInfoAction = 
  | ReturnType<typeof addLink>
  | ReturnType<typeof deleteLink>
  | ReturnType<typeof clearLink>;

export type LinkInfoState = {
  link: string,
  id: number,
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
        id: action.payload.id
      });
    case DELETE_LINK:
      return state.filter(item => item.id !== action.payload);
    case CLEAR_LINK:
      return [];
    default:
      return state;
  }
}