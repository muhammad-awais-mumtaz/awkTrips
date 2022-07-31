import styles from "./wallpaper.module.css";
import utilStyles from "../../styles/utils.module.css";
import Image from "next/image";

export default function Wallpaper() {
  return (
    <div className={styles.wallpaperContainer}>
      <div className={styles.image}>
        <Image
          priority
          src={"/wallpaper.jpg"}
          alt="home background image"
          layout="fill"
        />
      </div>
      <div className={`${styles.text} ${utilStyles.fontLight}`}>
        <h1>AwkTrips</h1>
        <span>Roam around Pakistan.</span>
      </div>
    </div>
  );
}
