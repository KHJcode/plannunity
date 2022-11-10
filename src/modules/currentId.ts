const UPDATE_CURRENT_ID = 'UPDATE_CURRENT_ID' as const;

export const setUpdateCurrentId = (id: number) => ({
  type: UPDATE_CURRENT_ID,
  payload: id,
});

export type CurrentIdAction = ReturnType<typeof setUpdateCurrentId>;

export type CurrentIdState = {
  id: number
}

const initialState: CurrentIdState = { id: 0 };

export default function currentId(
  state: CurrentIdState = initialState,
  action: CurrentIdAction
) {
  switch(action.type) {
    case UPDATE_CURRENT_ID:
      return {
        id: action.payload
      }
    default:
      return state;
  }
}