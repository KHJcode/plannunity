import { createWrapper, MakeStore } from "next-redux-wrapper";
import { combineReducers, createStore } from "redux";
import currentPage from "./currentPage";
import isActive from "./isActive";

const rootReducer = combineReducers({
  currentPage,
  isActive,
});

const makeStore: MakeStore<any> = () => {
  const store = createStore(rootReducer, {});
  return store;
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export const wrapper = createWrapper<any>(makeStore);

