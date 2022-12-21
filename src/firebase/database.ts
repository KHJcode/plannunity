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
import {Plan, User, SharedPlan} from "./schema";


export const addData = async (docType: "plans" | "users", data: Plan | User) => {
  try {
    const curUser = auth.currentUser;
    const userUid = curUser?.uid;
    
    if (docType === "plans") {
      const newPlan = await addDoc(collection(database, docType), {
        author: curUser?.displayName,
        ...data
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
export const getPlansByVisibility = async (visibility: "private" | "public" | "friends") => {
  try {
    const dataSnap = await getDocs(collection(database, "plans"));
    const datas: any[] = [];
    dataSnap.forEach(data => {
      const plan = data.data();
      if (plan.visibility === visibility) {
        datas.push({
          ...plan,
          id:data.id
        })
      }
    })
    return datas
  } catch (e) {
    return e;
  }
}

export const getFriendsPlans = async () => {
  try {
    const friendPlans = (await getPlansByVisibility("friends")) as SharedPlan[];
    const friends = ((await getData("users", auth.currentUser!.uid)) as User).friends
    return friendPlans.filter(plan => friends.includes(plan.author!.toString()))
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

export const setSharedPlan = async (id: string, data: SharedPlan) => {  
  try {
    console.log(id);
    
    const newData = await setDoc(doc(database, "plans", id), data);
    console.log(newData);
    return newData
  } catch (e) {
    return e;
  }
}

export const deleteData = async (docType: "plans" | "users", id: string) => {
  try {
    await deleteDoc(doc(database, docType, id))
    return;
  } catch (e) {
    return e;
  }
}

export const addFriend = async (uid: string) => {
  try {
    const userUid = auth.currentUser!.uid;
    const userData = await getData("users", userUid) as User;
    await updateData("users", auth.currentUser!.uid, "friends", [...userData.friends, uid]);
  } catch (e) {
    return e;
  }
}

export const getFriends  = async () => {
  try {
    const friends = ((await getData("users", auth.currentUser!.uid)) as User).friends
    const friendsArr = []
    friends.forEach(uid => {
      
    })
  } catch (e) {
    return e;
  }
} 

export const planSort = (plans: SharedPlan[], type: "hearts" | "view" | "thumbs", order: "ascending" | "descending") => {
  plans.sort((a: SharedPlan, b: SharedPlan) => {
    if (order === "ascending") return a[type] - b[type];
    else return b[type] - a[type];
  })
  return plans;
}

export const searchPlans = async (query: string)  => {
  const datas: SharedPlan[] = []
  const allPlans = (await getPlansByVisibility("public")) as any[]
  allPlans.forEach(plan => {
    if (plan.title.includes(query) || plan.category.includes(query)) {
      datas.push(plan);
    }  
  })
  return datas
}