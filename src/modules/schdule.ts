import { UploadImg } from "../components/plan/createPlan/modal/SchduleAddModal";
import { DocData } from "../components/plan/createPlan/modal/SearchPlaceModal";

const ADD_SCHDULE = 'ADD_SCHDULE' as const;
const DELETE_SCHDULE = 'DELETE_SCHDULE' as const;
const CLICK_SCHDULE = 'CLICK_SCHDULE' as const;
const UPDATE_SCHDULE = 'UPDATE_SCHDULE' as const;
const CLEAR_SCHDULE = 'CLEAR_SCHDULE' as const;

export const addSchdule = (title: string, desc: string, seq: number, place: DocData, img?: UploadImg) => ({
  type: ADD_SCHDULE,
  payload: {
    title,
    desc,
    seq,
    place,
    img,
  }
});

export const deleteSchdule = (seq: number) => ({
  type: DELETE_SCHDULE,
  payload: seq
});

export const clickSchdule = (seq: number) => ({
  type: CLICK_SCHDULE,
  payload: seq
});

export const updateSchdule = (title: string, desc: string, seq: number, place: DocData, img?: UploadImg) => ({
  type: UPDATE_SCHDULE,
  payload: {
    title,
    desc,
    seq,
    place,
    img,
  }
});

export const clearSchdule = () => ({
  type: CLEAR_SCHDULE,
});

export type SchduleAction = 
  | ReturnType<typeof addSchdule>
  | ReturnType<typeof deleteSchdule>
  | ReturnType<typeof clickSchdule>
  | ReturnType<typeof updateSchdule>
  | ReturnType<typeof clearSchdule>;

export type SchduleState = {
  title: string;
  desc: string;
  seq: number;
  place: DocData;
  img?: UploadImg;
  isSelected: boolean;
}

export type SchdulesState = SchduleState[];

const initialState: SchdulesState = [];

export default function schdule(
  state: SchdulesState = initialState,
  action: SchduleAction
): SchdulesState {
  switch(action.type) {
    case ADD_SCHDULE:
      return state.concat({
        title: action.payload.title,
        desc: action.payload.desc,
        seq: action.payload.seq,
        place: action.payload.place,
        img: action.payload.img,
        isSelected: false,
      });
    case DELETE_SCHDULE:
      return state
        .filter(item => item.seq !== action.payload)
        .map((item: SchduleState, idx): SchduleState => ({ 
          title: item.title, 
          desc: item.desc, 
          seq: idx + 1,
          place: item.place,
          img: item.img,
          isSelected: false,
        }));
    case CLICK_SCHDULE:
      return state.map(item => item.seq === action.payload ? { 
        title: item.title, 
        desc: item.desc, 
        seq: item.seq,
        place: item.place,
        img: item.img,
        isSelected: true,
      } : item);
    case UPDATE_SCHDULE:
      return state.map(item => item.seq === action.payload.seq ? {
        title: action.payload.title,
        desc: action.payload.desc,
        seq: item.seq,
        place: action.payload.place,
        img: action.payload.img,
        isSelected: false,
      }: item)
    case CLEAR_SCHDULE:
      return [];
    default:
      return state;
  }
}