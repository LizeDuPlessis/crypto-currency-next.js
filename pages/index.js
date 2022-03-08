import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Crypto | Currency</title>
        <meta name="keywords" content="coins" />
      </Head>

      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur hic
        quisquam ratione quo magnam, consectetur quis vitae ipsam unde. Quo modi
        illum nesciunt molestiae cum suscipit qui, commodi autem officia?
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam esse
        natus laudantium quibusdam amet explicabo eaque alias commodi, quaerat
        deserunt dicta ipsam nam, eos molestiae beatae aliquid architecto
        obcaecati deleniti.
      </p>
      <Link href="/coins">
        <a className={styles.btn}>Coins</a>
      </Link>
    </div>
  );
}
