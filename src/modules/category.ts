const ADD_CATEGORY = "ADD_CATEGORY" as const;

export const addCategory = (category: string) => ({
  type: ADD_CATEGORY,
  payload: category,
});

export type CategoryAction = ReturnType<typeof addCategory>;

export type CategorysState = string[];

const initialState: CategorysState = [];

export default function category(
  state: CategorysState = initialState,
  action: CategoryAction
): CategorysState {
  switch(action.type) {
    case ADD_CATEGORY:
      return state.concat(action.payload);
    default:
      return state;
  }
}
