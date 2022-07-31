import styles from "./offering-card.module.css";
import utilStyles from "../../styles/utils.module.css";
import Image from "next/image";

export default function OfferingCard(props) {
  const { image, altText, hading, detail } = props.cardsData;
  return (
    <div className={styles.cardContainer}>
      <Image
        className={utilStyles.fontDarkFilter}
        src={image}
        alt={altText}
        height={55}
        width={55}
      />
      <h3>{hading}</h3>
      <p>{detail}</p>
    </div>
  );
}
