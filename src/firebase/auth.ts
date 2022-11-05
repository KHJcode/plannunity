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
} from "firebase/auth";
import { app } from "./firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const createUser = async (email: string, password: string) => {
  return await (
    await createUserWithEmailAndPassword(auth, email, password)
  ).user;
};

export const signInUser = async (email: string, password: string) => {
  return await (
    await signInWithEmailAndPassword(auth, email, password)
  ).user;
};

export const signInWithGoogle = async () => {
  const data = await signInWithRedirect(auth, googleProvider);

  const result = (await getRedirectResult(auth)) as UserCredential;
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential?.accessToken;
  const user = result.user;
  return user;
};

export const getUser = () => {
  return auth.currentUser;
};
