import styles from "./nav-bar.module.css";
import utilStyles from "../../styles/utils.module.css";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className={`${utilStyles.padSides} ${styles.navBarContainer}`}>
      <div>
        <Image
          className={utilStyles.fontLightFilter}
          src="/AwkTripsLogo.svg"
          alt="Website logo"
          height={70}
          width={100}
        />
        <div className={`${styles.navLinksContainer} ${utilStyles.fontLight}`}>
          <li>
            <Link href={"#trip"}>Trip</Link>
          </li>
          <li>
            <Link href={"#"}>About</Link>
          </li>
          <li>
            <Link href={"#"}>Contact</Link>
          </li>
        </div>
      </div>
    </div>
  );
}
