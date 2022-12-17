import { GetStaticProps } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FriendListContainer from "../src/components/friend/FriendListContainer";
import FriendRequestContainer from "../src/components/friend/FriendRequestContainer";
import DeleteFriendModalContainer from "../src/components/friend/modal/DeleteFriendModalContainer";
import FriendDetailModalContainer from "../src/components/friend/modal/FriendDetailModalContainer";
import OnlineFriendContainer from "../src/components/friend/OnlineFriendContainer";
import RecentCreatedPlanByFriendContainer from "../src/components/friend/RecentCreatedPlanByFriendContainer";
import { getAllData } from "../src/firebase/database";
import { RootState } from "../src/modules";
import { setCurrentPage } from "../src/modules/currentPage";
import styles from "../styles/Page.module.css";

export const getStaticProps: GetStaticProps = async () => {
  const planData: any = await getAllData("plans");
  return {
    props: {
      planData
    }
  }
}

export default function PartyPage({ planData }: any) {
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
      {
        !friendList 
        ? 
        <div>
          <OnlineFriendContainer />
          <RecentCreatedPlanByFriendContainer plans={planData.slice(0, 3)} />
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
