import { createWrapper, MakeStore } from "next-redux-wrapper";
import { combineReducers, createStore } from "redux";
import currentPage from "./currentPage";
import isActive from "./isActive";
import userInfo from "./userInfo";

const rootReducer = combineReducers({
  currentPage,
  isActive,
  userInfo,
});

const makeStore: MakeStore<any> = () => {
  const store = createStore(rootReducer, {});
  return store;
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export const wrapper = createWrapper<any>(makeStore);

