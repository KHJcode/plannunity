const ADD_CATEGORY = "ADD_CATEGORY" as const;
const CLEAR_CATEGORY = "CLEAR_CATEGORY" as const;

export const addCategory = (category: string[]) => ({
  type: ADD_CATEGORY,
  payload: category,
});

export const clearCategory = () => ({
  type: CLEAR_CATEGORY,
});

export type CategoryAction = ReturnType<typeof addCategory> | ReturnType<typeof clearCategory>;

export type CategoriesState = string[];

const initialState: CategoriesState = [];

export default function category(
  state: CategoriesState = initialState,
  action: CategoryAction
): CategoriesState {
  switch(action.type) {
    case ADD_CATEGORY:
      return action.payload;
    case CLEAR_CATEGORY:
      return [];
    default:
      return state;
  }
}
