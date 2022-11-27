import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import SearchBarContainer from "../src/components/templates/SearchBarContainer";
import { setCurrentPage } from "../src/modules/currentPage";
import styles from "../styles/Page.module.css";

export default function PartyPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentPage("party"));
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>플래뮤니티 | 파티</title>
      </Head>
      <SearchBarContainer searchType="party" />
    </div>
  );
}
