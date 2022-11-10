const CREATE_PLAN_SCHDULE = "CREATE_PLAN_SCHDULE" as const;
const UPDATE_PLAN_SCHDULE = "UPDATE_PLAN_SCHDULE" as const;
const DELETE_PLAN_SCHDULE = "DELETE_PLAN_SCHDULE" as const;

let nextId = 0;

export const setCreatePlanSchdule = () => ({
  type: CREATE_PLAN_SCHDULE,
  payload: nextId++
});

export const setUpdatePlanSchdule = (id: number, title: string, date: string, loc: string, memo: string) => ({
  type: UPDATE_PLAN_SCHDULE,
  payload: {
    id,
    title,
    date,
    loc,
    memo
  }
});

export const setDeletePlanSchdule = (id: number) => ({
  type: DELETE_PLAN_SCHDULE,
  payload: id
});

export type planSchduleAction = 
  | ReturnType<typeof setCreatePlanSchdule>
  | ReturnType<typeof setUpdatePlanSchdule>
  | ReturnType<typeof setDeletePlanSchdule>;

export type planSchduleState = {
  id: number;
  title: string;
  date: string;
  loc: string;
  memo: string;
};

export type planSchduleStates = planSchduleState[];

const initialState: planSchduleStates = [];

export default function planSchdule(
  state: planSchduleStates = initialState,
  action: planSchduleAction
): planSchduleStates {
  switch(action.type) {
    case CREATE_PLAN_SCHDULE:
      return state.concat({
        id: action.payload,
        title: "",
        date: "",
        loc: "",
        memo: "",
      });
    case UPDATE_PLAN_SCHDULE:
      return state.map(item => item.id === action.payload.id ? {
        ...item, 
        title: action.payload.title,
        date: action.payload.date,
        loc: action.payload.loc,
        memo: action.payload.memo,
      } : item);
    case DELETE_PLAN_SCHDULE:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}

