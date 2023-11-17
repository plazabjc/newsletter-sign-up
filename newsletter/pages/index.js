import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const items = [
    { text: "Product discovery and building what matters" },
    { text: "Measuring to ensure updates are a success" },
    { text: "And much more" },
  ];

  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const router = useRouter();

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setIsValidEmail(isValid);

    if (isValid) {
      console.log("Valid email.");
      router.push("/posts/success");
    } else {
      console.log("Invalid email");
    }
  };

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
                <form onSubmit={handleSubmit} noValidate>
                  <label>
                    Email address
                    {!isValidEmail && (
                      <p className={styles.invalidEmail}>
                        Valid email required
                      </p>
                    )}
                    <input
                      type="email"
                      value={email}
                      onChange={handleInputChange}
                      required
                      className={!isValidEmail ? styles.invalidInput : styles.inputForm}
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
        <div className={styles.attribution}>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Juan Carlos Plaza</a>.
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
