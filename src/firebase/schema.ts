import { GeoPoint, Timestamp } from "firebase/firestore";

interface Schdule {
    title: string;
    time: string;
    position: GeoPoint;
    content: string;
    image: string;
}

interface Budget {
    title: string;
    money: number;
    isChecked: boolean; 
}

interface Link {
    link: string;
    content: string;
}

export interface Plan {
    title: string;
    hearts: number;
    thumbs: number;
    visibility: "private" | "public" | "friends";
    schdules: Schdule[];
    budgets: Budget[];
    links: Link[];
}

export interface User {

}
