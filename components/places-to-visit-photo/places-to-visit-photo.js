import styles from "./places-to-visit-photo.module.css";
import Image from "next/image";

export default function PlacesToVisitPhoto(props) {
  const { name, altText } = props.photoToDisplay;
  return (
    <div className={styles.pic}>
      <Image src={name} alt={altText} layout="fill" />
      <h3>{altText}</h3>
    </div>
  );
}
