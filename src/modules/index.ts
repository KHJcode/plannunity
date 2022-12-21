import { createWrapper, MakeStore } from "next-redux-wrapper";
import { combineReducers, createStore } from "redux";
import currentPage from "./currentPage";
import isActive from "./isActive";
import userInfo from "./userInfo";
import schdule from "./schdule";
import budget from "./budget";
import linkInfo from "./linkInfo";
import cart from './cart';
import selectedSchdule from "./selectedSchdule";
import currentData from "./currentData";
import category from "./category";

const rootReducer = combineReducers({
  currentPage,
  isActive,
  userInfo,
  schdule,
  budget,
  linkInfo,
  cart,
  selectedSchdule,
  currentData,
  category,
});

const makeStore: MakeStore<any> = () => {
  const store = createStore(rootReducer, {});
  return store;
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export const wrapper = createWrapper<any>(makeStore);

