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
import {} from "link-preview-js";

export interface schdule {
  seq: number;
  title: string;
  desc: string;
  isSelected: boolean;
}

export interface budget {
  id: number;
  title: string;
  budget: number;
  isSelected: boolean;
}

export interface info {
  id:number;
  link: string;
}

const planCollection = collection(database, "plans");

export const addPlan = async (
  planTitle: string,
  author: string,
  schdules: schdule[],
  budgets: budget[],
  infos: info[]
) => {
  try {
    const newPlan = await addDoc(planCollection, {
      author,
      planTitle,
      schdules,
      budgets,
      infos,
    });
    return newPlan;
  } catch (e) {
    return e;
  }
};

export const deletePlan = async (planId: string) => {
  try {
    await deleteDoc(doc(database, "plans", planId));
    return;
  } catch (e) {
    return e;
  }
};

export const getAllPlans = async () => {
  try {
    const planSnapshot = await getDocs(planCollection);
    return planSnapshot;
  } catch (e) {
    return e;
  }
};

export const getPlan = async (planId: string) => {
  try {
    const plan = doc(database, "plans", planId);
    const planSnap = await getDoc(plan);

    if (planSnap.exists()) {
      return plan;
    } else {
      return;
    }
  } catch (e) {
    return e;
  }
};

export const updatePlan = async (
  planId: string,
  fieldName: string,
  updateData: any
) => {
  const plan = doc(database, "plans", planId);
  const updatedPlan = await updateDoc(plan, fieldName, updateData);
  return updatedPlan;
};
