import {  // 지금 없네. 한빈이한테 말할께 다른 거 하고 있어볼래?

  browserLocalPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase";
import { Plan, User } from "./schema";
import { addData } from "./database";

export const sign = async (
  type: "google" | "email",
  email: string,
  password?: string
) => {
  if (type === "google") {
  } else if (type === "email") {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password!);
      console.log(user);
      await setPersistence(auth, browserLocalPersistence);

      return user.user;
    } catch (err: any) {
      return err;
    }
  }
};

export const createUser = async (
  email: string,
  password: string,
  nickname: string
) => {
  try {
    const user = (await createUserWithEmailAndPassword(auth, email, password))
      .user;
    await updateProfile(user, {
      displayName: nickname,
    });
    await setPersistence(auth, browserLocalPersistence);
    const data: User = {
      email: user.email,
      friends: [],
      name: user.displayName,
      notice: [],
      plans: [],
      uid: user.uid,
      point: 0,
      profileImg: user.photoURL,
    };
    addData("users", data);
    return user;
  } catch (err: any) {
    return err;
  }
};

export const logout = async () => {
  return await signOut(auth);
};

export const getUser = async () => {
  return auth.currentUser;
};
