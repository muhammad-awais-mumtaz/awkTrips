import styles from "./footer.module.css";
import utilStyles from "../../styles/utils.module.css";
import Image from "next/image";

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={utilStyles.fontDark}>
        &copy;{year}{" "}
        <Image
          className={utilStyles.fontDarkFilter}
          src="/AwkTripsLogo.svg"
          alt="AwkTrips logo Logo"
          width={72}
          height={16}
        />
      </span>
    </footer>
  );
}
