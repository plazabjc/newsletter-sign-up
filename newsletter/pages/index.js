import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  const items = [
    { text: "Product discovery and building what matters" },
    { text: "Measuring to ensure updates are a success" },
    { text: "And much more" },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Stay updated!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.gridContent}>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Stay updated!</h3>
              <p>Join 60,000+ product managers receiving monthly updates on:</p>
              <ul className={styles.imageList}>
                {items.map((item, index) => (
                  <li key={index}>
                    <img src="/images/icon-list.svg" alt="Common Image" />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.card}>
              <img
                src="/images/illustration-sign-up-desktop.svg"
                alt="Common Image"
              />
            </div>
          </div>
        </div>
      </main>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
