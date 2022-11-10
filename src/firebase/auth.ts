import {
    browserLocalPersistence,
    createUserWithEmailAndPassword,
    setPersistence,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
  } from "firebase/auth";
  import { auth } from "./firebase";
  
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
      // await sign("email", email, password);
      return user;
    } catch (err: any) {
      return err;
    }
  };
  
  export const logout = async () => {
    return await signOut(auth);
  };
  
  export const getUser = async () => {
    //   // onAuthStateChanged(auth, callback)
  };
  