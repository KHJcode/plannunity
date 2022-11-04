const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE' as const;

export const setCurrentPage = (pageName: string) => ({
  type: SET_CURRENT_PAGE,
  payload: pageName,
});

export type CurrentPageAction = ReturnType<typeof setCurrentPage>;

export type CurrentPageState = {
  home: boolean;
  plan: boolean;
  party: boolean;
  profile: boolean;
}

const initialState: CurrentPageState = { home: true, plan: false, party: false, profile: false };

export default function currentPage(
  state: CurrentPageState = initialState,
  action: CurrentPageAction
): CurrentPageState {
  switch(action.type) {
    case 'SET_CURRENT_PAGE':
      return {
        home: false,
        plan: false,
        party: false,
        profile: false,
        [action.payload]: true
      };
    default:
      return state;
  }
}
