import { database } from "./firebase";
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
import {} from "link-preview-js";

export const addData = async (docType: "plans" | "users", data: Plan | User) => {
  try {
    const newDoc = await addDoc(collection(database, docType), data);
    return newDoc;
  } catch(e) {
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