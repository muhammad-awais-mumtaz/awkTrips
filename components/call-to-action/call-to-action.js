import styles from "./call-to-action.module.css";
import utilStyles from "../../styles/utils.module.css";

export default function CallToAction() {
  return (
    <div className={`${styles.callToActionContainer} ${utilStyles.fontLight}`}>
      <div className={styles.form}>
        <h1>Be updated</h1>
        <input type="email" placeholder="E-mail" />
        <span
          onClick={() =>
            alert("We are working ⚒👷‍♂️ on that feature to available for you.")
          }
        >
          Send Me offers
        </span>
      </div>
      <div className={styles.pic}></div>
    </div>
  );
}
