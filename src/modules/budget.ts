const ADD_BUDGET = 'ADD_BUDGET' as const;
const CLICK_BUDGET = 'CLICK_BUDGET' as const;
const UPDATE_BUDGET = 'UPDATE_BUDGET' as const;
const CLEAR_BUDGET = 'CLEAR_BUDGET' as const;

let nextId = 0;

export const addBudget = (title: string, budget: number) => ({
  type: ADD_BUDGET,
  payload: {
    title,
    budget,
    id: nextId++,
  }
});

export const clickBudget = (id: number) => ({
  type: CLICK_BUDGET,
  payload: id,
});

export const updateBudget = (title: string, budget: number, id: number) => ({
  type: UPDATE_BUDGET,
  payload: {
    title,
    budget,
    id,
  }
});

export const clearBudget = () => ({
  type: CLEAR_BUDGET
});

export type BudgetAction = 
  | ReturnType<typeof addBudget>
  | ReturnType<typeof clickBudget>
  | ReturnType<typeof updateBudget>
  | ReturnType<typeof clearBudget>;

export type BudgetState = {
  title: string,
  budget: number,
  id: number,
  isSelected: boolean,
}

export type BudgetsState = BudgetState[];

const initialState: BudgetsState = [];

export default function budget(
  state: BudgetsState = initialState,
  action: BudgetAction
): BudgetsState {
  switch(action.type) {
    case ADD_BUDGET:
      return state.concat({
        title: action.payload.title,
        budget: action.payload.budget,
        id: action.payload.id,
        isSelected: false,
      });
    case CLICK_BUDGET:
      return state.map(item => item.id === action.payload ? { 
        title: item.title,
        budget: item.budget,
        id: item.id,
        isSelected: true,
      } : item);
    case UPDATE_BUDGET:
      return state.map(item => item.id === action.payload.id ? {
        title: action.payload.title,
        budget: action.payload.budget,
        id: item.id,
        isSelected: false,
      }: item);
    case CLEAR_BUDGET:
      return [];
    default:
      return state;
  }
}

