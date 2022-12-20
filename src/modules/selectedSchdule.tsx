const SELECT_SCHDULE = "SELECT_SCHDULE" as const;

export const selectSchdule = (title: string, desc: string, address: string, imgLink: string, seq: number) => ({
  type: SELECT_SCHDULE,
  payload: {
    title,
    desc,
    address,
    imgLink,
    seq,
  }
});

export type selectedSchduleAction = ReturnType<typeof selectSchdule>;

export type selectedSchduleState = {
  title: string;
  desc: string;
  address: string;
  imgLink: string;
  seq: number;
}

const initialState: selectedSchduleState = { title: "", desc: "", address: "", imgLink: "", seq: 0 }

export default function selectedSchdule(
  state: selectedSchduleState = initialState,
  action: selectedSchduleAction
): selectedSchduleState {
  switch(action.type) {
    case SELECT_SCHDULE:
      return {
        title: action.payload.title,
        desc: action.payload.desc,
        address: action.payload.address,
        imgLink: action.payload.imgLink,
        seq: action.payload.seq,
      }
    default:
      return state;
  }
}