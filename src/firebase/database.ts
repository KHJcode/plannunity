import { database, auth } from "./firebase";
import {
  doc,
  setDoc,
  addDoc,
  getDoc,
  getDocs,
  collection,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import {Plan, User} from "./schema";


export const addData = async (docType: "plans" | "users", data: Plan | User) => {
  try {
    console.log(data);
    
    const curUser = auth.currentUser;
    const userUid = curUser?.uid;
    if (docType === "plans") {
      const newPlan = await addDoc(collection(database, docType), {
        ...data,
        author: curUser?.displayName
      });
      const userData = (await getData("users", userUid!.toString())) as User      
      
      await updateData("users", userUid!.toString(), "plans", [...userData.plans, newPlan.id]);

      return newPlan;
    } else if (docType === "users") {
      const newUser = await setDoc(doc(database, docType, userUid!.toString()), data);
      return newUser;
    }
  } catch(e) {
    console.log(e);
    
    return e;
  } 
}

export const getData = async (docType: "plans" | "users", id: string) => {
  try {
    const data = doc(database, docType, id);
    const dataSnap = await getDoc(data);
    if (dataSnap.exists()) return dataSnap.data();
    else return;
  } catch (e) {
    return e;
  } 
}

export const getAllData = async (docType: "plans" | "users") => {
  try {
    const dataSnap = await getDocs(collection(database, docType));
    const datas: any[] = [];
    dataSnap.forEach(data => {
      datas.push({
        ...data.data(),
        id: data.id
      })
     });
    return datas;
  } catch (e) {
    return e;
  }
}

export const updateData = async (docType: "plans" | "users", id: string, fieldName: string, updateData: any) => {
  try {
    const data = doc(database, docType, id);
    return await updateDoc(data, fieldName, updateData);
  } catch(e) {
    return e;
  }
}

export const deleteData = async (docType: "plans" | "users", id:string) => {
  try {
    await deleteDoc(doc(database, docType, id))
    return;
  } catch (e) {
    return e;
  }
}