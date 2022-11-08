const LOGIN = 'LOGIN' as const;
const LOGOUT = 'LOGOUT' as const;

export const setLogin = (name: string, email: string, imgURL: string) => ({
  type: LOGIN,
  payload: {
    name,
    email,
    imgURL
  }
});

export const setLogout = () => ({
  type: LOGOUT
});

export type userInfoAction = 
  | ReturnType<typeof setLogin>
  | ReturnType<typeof setLogout>;

export type userInfoState = {
  name: string;
  email: string;
  imgURL: string;
}

const initialState: userInfoState = { name: "", email: "", imgURL: "" };

export default function userInfo(
  state: userInfoState = initialState,
  action: userInfoAction
): userInfoState {
  switch(action.type) {
    case LOGIN:
      return {
        name: action.payload.name,
        email: action.payload.email,
        imgURL: !action.payload.imgURL ? "https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_1280.png" : action.payload.imgURL,
      };
    case LOGOUT:
      return {
        name: "",
        email: "",
        imgURL: "",
      };
    default:
      return state;
  }
}
