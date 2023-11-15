import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const items = [
    { text: "Product discovery and building what matters" },
    { text: "Measuring to ensure updates are a success" },
    { text: "And much more" },
  ];

  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));
  };

  useEffect(() => {
    if (isValidEmail) {
      console.log("Valid email.");
    } else {
      console.log("Invalid email");
    }
  }, [isValidEmail]);

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
              <h1>Stay updated!</h1>
              <p>Join 60,000+ product managers receiving monthly updates on:</p>
              <ul className={styles.listContent}>
                {items.map((item, index) => (
                  <li key={index}>
                    <img
                      src="/images/icon-list.svg"
                      alt="Common Image"
                      className={styles.imageList}
                    />
                    {item.text}
                  </li>
                ))}
              </ul>

              <div className={styles.formContent}>
                {!isValidEmail && (
                  <p style={{ color: "red" }}>Valid email required</p>
                )}
                <form onSubmit={handleSubmit} noValidate>
                  <label>
                    Email address
                    <input
                      type="email"
                      value={email}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                  <button type="submit">Subscribe to monthly newsletter</button>
                </form>
              </div>
            </div>
            <div className={styles.cardImg}>
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
