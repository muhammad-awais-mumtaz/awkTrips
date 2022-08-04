import styles from "./book-me.module.css";
import Link from "next/link";

export default function BookMe() {
  const uniqueNumber = Math.floor(Math.random() * (1000 - 1) + 1);
  return (
    <Link href={`https://api.whatsapp.com/send?phone=923222636688`}>
      <a>
        <div className={styles.bookMeNowContainer}>
          <h1>Book me now</h1>
        </div>
      </a>
    </Link>
  );
}
