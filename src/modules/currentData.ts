import { DocData } from "../components/plan/createPlan/modal/SearchPlaceModal";

const ADD_PLACE = 'ADD_PLACE' as const;
const CLEAR_PLACE = 'CLEAR_PLACE' as const;

const ADD_TRAVEL_TERM = 'ADD_TRAVEL_TERM' as const;
const ADD_SHARE_TARGET = 'ADD_SHARE_TARGET' as const;
const ADD_MASS_TRANS_ACC = 'ADD_MASS_TRANS_ACC' as const;
const ADD_DIFFICULTY = 'ADD_DIFFICULTY' as const;

const CLEAR_CREATE_PLAN_DATA = 'CLEAR_CREATE_PLAN_DATA' as const;
const CLEAR_SHARE_PLAN_DATA = 'CLEAR_SHARE_PLAN_DATA' as const;

export const addPlace = (place: DocData) => ({
  type: ADD_PLACE,
  payload: place
});

export const clearPlace = () => ({
  type: CLEAR_PLACE,
});

export const addTravelTerm = (travelTerm: string) => ({
  type: ADD_TRAVEL_TERM,
  payload: travelTerm
});

export const addShareTarget = (shareTarget: "public" | "friends") => ({
  type: ADD_SHARE_TARGET,
  payload: shareTarget,
});

export const addMassTransAcc = (massTransAcc: string) => ({
  type: ADD_MASS_TRANS_ACC,
  payload: massTransAcc,
});

export const addDifficulty = (difficulty: string) => ({
  type: ADD_DIFFICULTY,
  payload: difficulty,
});

export const clearCreatePlanData = () => ({
  type: CLEAR_CREATE_PLAN_DATA,
});

export const clearSharePlanData = () => ({
  type: CLEAR_SHARE_PLAN_DATA,
});

type CurrentDataAction = 
  | ReturnType<typeof addPlace> 
  | ReturnType<typeof clearPlace>
  | ReturnType<typeof addTravelTerm>
  | ReturnType<typeof addShareTarget>
  | ReturnType<typeof addMassTransAcc>
  | ReturnType<typeof addDifficulty>
  | ReturnType<typeof clearCreatePlanData>
  | ReturnType<typeof clearSharePlanData>;

type CurrentDataState = {
  place: DocData | null;
  travelTerm: string;
  shareTarget: "public" | "friends";
  massTransAcc: string;
  difficulty: string;
}

const initialState: CurrentDataState = { 
  place: null,
  travelTerm: "당일치기",
  shareTarget: "public",
  massTransAcc: "보통",
  difficulty: "보통",
};

export default function currentData(
  state: CurrentDataState = initialState,
  action: CurrentDataAction,
): CurrentDataState {
  switch(action.type) {
    case ADD_PLACE:
      return {
        place: action.payload,
        travelTerm: state.travelTerm,
        shareTarget: state.shareTarget,
        massTransAcc: state.massTransAcc,
        difficulty: state.difficulty,
      };
    case CLEAR_PLACE:
      return { 
        place: null,
        travelTerm: state.travelTerm,
        shareTarget: state.shareTarget,
        massTransAcc: state.massTransAcc,
        difficulty: state.difficulty,
      };
    case ADD_TRAVEL_TERM:
      return {
        place: state.place,
        travelTerm: action.payload,
        shareTarget: state.shareTarget,
        massTransAcc: state.massTransAcc,
        difficulty: state.difficulty,
      }
    case ADD_SHARE_TARGET:
      return {
        place: state.place,
        travelTerm: state.travelTerm,
        shareTarget: action.payload,
        massTransAcc: state.massTransAcc,
        difficulty: state.difficulty,
      }
    case ADD_MASS_TRANS_ACC:
      return {
        place: state.place,
        travelTerm: state.travelTerm,
        shareTarget: state.shareTarget,
        massTransAcc: action.payload,
        difficulty: state.difficulty,
      }
    case ADD_DIFFICULTY:
      return {
        place: state.place,
        travelTerm: state.travelTerm,
        shareTarget: state.shareTarget,
        massTransAcc: state.massTransAcc,
        difficulty: action.payload,
      }
    case CLEAR_CREATE_PLAN_DATA:
      return {
        place: state.place,
        travelTerm: "당일치기",
        shareTarget: state.shareTarget,
        massTransAcc: state.massTransAcc,
        difficulty: state.difficulty,
      }
    case CLEAR_SHARE_PLAN_DATA:
      return {
        place: state.place,
        travelTerm: state.travelTerm,
        shareTarget: "public",
        massTransAcc: "보통",
        difficulty: "보통",
      }
    default:
      return state;
  }
}