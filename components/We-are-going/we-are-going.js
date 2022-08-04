import styles from "./we-are-going.module.css";
import utilStyles from "../../styles/utils.module.css";
import BookMe from "../book-me/book-me";

export default function WeAreGoing() {
  return (
    <div
      className={`${styles.videoContainer} ${utilStyles.fontDark}`}
      id="trip"
    >
      <div className={styles.content}>
        <h1>We are going feel to this beautiful peace of haven</h1>
        <div className={styles.video}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/upFoXg7myu8?start=42"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          ></iframe>
        </div>
        <BookMe />
      </div>
    </div>
  );
}
