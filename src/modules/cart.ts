import { PlanData } from "../../pages";

const LOAD_CART = 'LOAD_CART' as const;

export const loadCart = (plans: PlanData[]) => ({
  type: LOAD_CART,
  payload: plans,
});

export type CartAction = ReturnType<typeof loadCart>;

const initialState: PlanData[] = [];

export default function cart(
  state: PlanData[] = initialState,
  action: CartAction
): PlanData[] {
  switch(action.type) {
    case LOAD_CART:
      return action.payload;
    default:
      return state;
  }
}