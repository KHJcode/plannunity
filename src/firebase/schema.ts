import { EmailAuthCredential } from "firebase/auth";
import { GeoPoint, Timestamp } from "firebase/firestore";
import { UploadImg } from "../components/plan/createPlan/modal/SchduleAddModal";
import { DocData } from "../components/plan/createPlan/modal/SearchPlaceModal";

export interface Schdule {
    title: string;
    desc: string;
    seq: number;
    place: DocData;
    img: UploadImg | null;
    isSelected: boolean;
}

export interface Budget {
    title: string,
    budget: number,
    id: number,
    isSelected: boolean,
}

export interface Link {
    link: string,
    id: number,
    isSelected: boolean,
}

export interface Notice {
  type: "heart" | "thumb" | "point" | "friend";
  content: string;
}

export interface Plan {
    title: string;
    author?: string | null;
    schdules: Schdule[];
    budgets: Budget[];
    links: Link[];
    category: string[];
    visibility: "private" | "public" | "friends";
}

export interface SharedPlan extends Plan {
    intro: string;
    content?: string;
    thumbs: number;
    hearts: number;
    difficulty: string;
    transportAccess: string;
    view: number;
}

export interface User {
    name: string | null;
    email: string | null;
    uid: string | null;
    category?: string[];
    profileImg: string | null;
    plans: string[];
    friends: string[];
    point: number;
    notice: Notice[];
}