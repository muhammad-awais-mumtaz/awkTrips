import styles from "./offering.module.css";
import utilStyles from "../../styles/utils.module.css";
import OfferingCard from "../offering-card/offering-card";

const offeringData = [
  {
    id: 1,
    image: "/hotel.svg",
    hading: "THE BEST HOTELS",
    altText: "The best hotel icon",
    detail:
      "From the latest trendy boutique hotel to the iconic palace with XXL pool, go for a mini-vacation just a few subway stops away from your home.",
  },
  {
    id: 2,
    image: "/newExperience.svg",
    hading: "NEW EXPERIENCES",
    altText: "New experiences icon",
    detail:
      "Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… your Sundays will not be alike.",
  },
  {
    id: 3,
    image: "/exclusiveRates.svg",
    hading: "EXCLUSIVE RATES",
    altText: "Exclusive rates icon",
    detail:
      "By registering, you will access specially negotiated rates that you will not find anywhere else.",
  },
];

export default function Offering() {
  return (
    <div className={`${styles.offeringContainer} ${utilStyles.fontDark}`}>
      <div className={`${styles.offeringCards} ${utilStyles.container2}`}>
        {offeringData.map((card) => {
          return <OfferingCard key={card.id} cardsData={card} />;
        })}
      </div>
    </div>
  );
}
