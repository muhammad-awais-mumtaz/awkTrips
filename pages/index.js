import Head from "next/head";
import Layout from "../components/layout/layout";
import styles from "../styles/Home.module.css";
import Wallpaper from "../components/wallpaper/wallpaper";
import Offering from "../components/offering/offering";
import PlacesToVisit from "../components/places-to-visit/places-to-visit";
import WeAreGoing from "../components/We-are-going/we-are-going";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Wallpaper />
          <WeAreGoing />
          <Offering />
          <PlacesToVisit />
        </main>
      </div>
    </Layout>
  );
}
