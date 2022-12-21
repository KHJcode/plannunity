const LOAD_CART = 'LOAD_CART' as const;

export const loadCart = (plans: any) => ({
  type: LOAD_CART,
  payload: plans,
});

export type CartAction = ReturnType<typeof loadCart>;

const initialState: any = [];

export default function cart(
  state: any = initialState,
  action: CartAction
): any {
  switch(action.type) {
    case LOAD_CART:
      return action.payload;
    default:
      return state;
  }
}