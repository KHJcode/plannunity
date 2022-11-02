import Head from 'next/head'
import Header from '../src/components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>플래뮤니티 | 홈</title>
      </Head>
      <div className={styles.container}>
        <Header />
      </div>
    </>
  )
}
