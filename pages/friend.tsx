import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FriendListContainer from "../src/components/friend/FriendListContainer";
import FriendRequestContainer from "../src/components/friend/FriendRequestContainer";
import DeleteFriendModalContainer from "../src/components/friend/modal/DeleteFriendModalContainer";
import FriendDetailModalContainer from "../src/components/friend/modal/FriendDetailModalContainer";
import OnlineFriendContainer from "../src/components/friend/OnlineFriendContainer";
import RecentCreatedPlanByFriendContainer from "../src/components/friend/RecentCreatedPlanByFriendContainer";
import { RootState } from "../src/modules";
import { setCurrentPage } from "../src/modules/currentPage";
import styles from "../styles/Page.module.css";

export default function PartyPage() {
  const dispatch = useDispatch();
  const friendList = useSelector((state: RootState) => state.isActive.friendList);
  useEffect(() => {
    dispatch(setCurrentPage("friend"));
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>플래뮤니티 | 친구</title>
      </Head>
      {/* <FriendDetailModalContainer /> */}
      {
        !friendList 
        ? 
        <div>
          <OnlineFriendContainer />
          <RecentCreatedPlanByFriendContainer />
        </div>
        : 
        <div>
          <DeleteFriendModalContainer />
          <FriendRequestContainer />
          <FriendListContainer />
        </div>
      }
    </div>
  );
}
