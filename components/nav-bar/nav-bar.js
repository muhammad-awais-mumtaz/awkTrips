import styles from "./nav-bar.module.css";
import utilStyles from "../../styles/utils.module.css";
import Image from "next/image";
import Link from "next/link";

export default function NavBar({ home }) {
  return (
    <div className={`${utilStyles.padSides} ${styles.navBarContainer}`}>
      <div>
        <Link href={"/"}>
          <Image
            className={`${
              home ? utilStyles.fontLightFilter : utilStyles.fontDarkFilter
            } ${styles.homeLink}`}
            src="/AwkTripsLogo.svg"
            alt="Website logo"
            height={70}
            width={100}
          />
        </Link>
        <div
          className={`${styles.navLinksContainer} ${
            home ? utilStyles.fontLight : utilStyles.fontDark
          }`}
        >
          <li>
            <Link href={"/#trip"}>Trip</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
        </div>
      </div>
    </div>
  );
}
