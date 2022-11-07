import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  UserCredential,
  updateProfile,
  updateCurrentUser,
  sendEmailVerification,
  sendPasswordResetEmail,
  deleteUser,
  Auth,
  onAuthStateChanged,
  User,
  setPersistence,
  browserLocalPersistence,
  signOut,
} from "firebase/auth";

export let app: FirebaseApp;
export let database: Firestore;
export let auth: Auth;

export const sign = async (
  type: "google" | "email",
  email: string,
  password?: string
) => {
  if (type === "google") {
  } else if (type === "email") {
    try {
      const user = (await signInWithEmailAndPassword(auth, email, password!))
        .user;
      await setPersistence(auth, browserLocalPersistence);

      return user;
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

if (!getApps().length) {
  app = initializeApp({
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINH_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
  });

  auth = getAuth(app);
  database = getFirestore(app);
} else {
  app = getApp();
  auth = getAuth(app);
  database = getFirestore(app);
}
