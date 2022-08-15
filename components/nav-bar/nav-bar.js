import styles from "./nav-bar.module.css";
import utilStyles from "../../styles/utils.module.css";
import Image from "next/image";
import Link from "next/link";

export default function NavBar({ home }) {
  return (
    <div className={`${utilStyles.padSides} ${styles.navBarContainer}`}>
      <div className={styles.homeLinkContainer}>
        <Link href={"/"}>
          <a>
            <Image
              className={`${
                home ? utilStyles.fontLightFilter : utilStyles.fontDarkFilter
              } ${styles.homeLink}`}
              src="/AwkTripsLogo.svg"
              alt="Website logo"
              height={80}
              width={110}
            />
          </a>
        </Link>
        <div
          className={`${styles.navLinksContainer} ${
            home ? utilStyles.fontLight : utilStyles.fontDark
          }`}
        >
          <li>
            <Link href={"/#trip"}>
              <a>Trip</a>
            </Link>
          </li>
          <li>
            <Link href={"/about"}>
              <a>About</a>
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
}
