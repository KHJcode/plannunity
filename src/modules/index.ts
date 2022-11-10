import { createWrapper, MakeStore } from "next-redux-wrapper";
import { combineReducers, createStore } from "redux";
import currentPage from "./currentPage";
import isActive from "./isActive";
import userInfo from "./userInfo";
import planSchdule from "./planSchdule";
import currentId from "./currentId";

const rootReducer = combineReducers({
  currentPage,
  isActive,
  userInfo,
  planSchdule,
  currentId
});

const makeStore: MakeStore<any> = () => {
  const store = createStore(rootReducer, {});
  return store;
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export const wrapper = createWrapper<any>(makeStore);

