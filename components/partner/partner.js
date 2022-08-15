import styles from "./partner.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
import Image from "next/image";

export default function Partner({ partner }) {
  return (
    <div className={styles.partnerContainer}>
      <Image
        className={styles.image}
        src={partner.pic}
        alt={`image of ${partner.name} who is ${partner.designation}`}
        height={300}
        width={300}
        layout="responsive"
        objectFit="cover"
        priority
      />
      <h1>{partner.name}</h1>
      <h2>{partner.designation}</h2>
      <p>{partner.detail}</p>
      <Link href={partner.instagram} target="_blank">
        <a target={"__blank"}>
          <InstagramIcon className={styles.socialMediaLink} />
        </a>
      </Link>{" "}
      <Link href={partner.twitter} target="_blank">
        <a target={"__blank"}>
          <TwitterIcon className={styles.socialMediaLink} />
        </a>
      </Link>
    </div>
  );
}
