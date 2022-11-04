import { createWrapper, MakeStore } from "next-redux-wrapper";
import { Middleware } from "next/dist/lib/load-custom-routes";
import { applyMiddleware, combineReducers, createStore, StoreEnhancer } from "redux";
import currentPage from "./currentPage";

const rootReducer = combineReducers({
  currentPage
});

const makeStore: MakeStore<any> = () => {
  const store = createStore(rootReducer, {});
  return store;
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export const wrapper = createWrapper<any>(makeStore);

