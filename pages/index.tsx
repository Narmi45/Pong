import Head from "next/head";
import GameGrid from "../components/game-grid/game-grid";
import DefaultLayout from "../layouts/default-layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Arcade Cabinet</title>
        <meta
          name="description"
          content="A small collection of simple arcade games implemented in TypeScript."
        />
        <link rel="icon" href="/arcade-machine-16x16.ico" />
      </Head>
      <DefaultLayout>
        <section>
          <div className={styles.title}>
            <h1 className={styles.main_title}>Arcade Cabinet</h1>
            <p className={styles.sub_title}>
              Play beloved classics in your web browser
            </p>
          </div>
        </section>
        <section className="games">
          <GameGrid/>
        </section>
      </DefaultLayout>
    </>
  );
}
