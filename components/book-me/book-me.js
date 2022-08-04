import styles from "./book-me.module.css";

export default function BookMe() {
  const uniqueNumber = Math.floor(Math.random() * (1000 - 1) + 1);
  return (
    <a
      href={`https://api.whatsapp.com/send?phone=923222636688&text=Hello, this is my unique number "${uniqueNumber}". Can you book my spot?`}
    >
      <div className={styles.bookMeNowContainer}>
        <h1>Book me now</h1>
      </div>
    </a>
  );
}
