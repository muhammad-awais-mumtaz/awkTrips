import styles from "./places-to-visit.module.css";
import utilStyles from "../../styles/utils.module.css";
import Image from "next/image";

export default function PlacesToVisit() {
  const photoList = [
    { id: 1, image: "/whatToSee/kashmir.jpg", altText: "Kashmir picture" },
    { id: 2, image: "/whatToSee/swat2.jpg", altText: "Swat picture" },
    { id: 3, image: "/whatToSee/kashmir2.jpg", altText: "Kashmir picture" },
    { id: 4, image: "/whatToSee/swat.jpg", altText: "Swat picture" },
    { id: 5, image: "/whatToSee/swat.jpg", altText: "Swat picture" },
    { id: 6, image: "/whatToSee/swat.jpg", altText: "Swat picture" },
    { id: 7, image: "/whatToSee/swat.jpg", altText: "Swat picture" },
  ];

  return (
    <>
      <div className={`${styles.gallery} ${utilStyles.marg} ${utilStyles.pad}`}>
        {photoList.map((photo) => (
          <div
            className={`${styles.pics} ${utilStyles.margUpDown}`}
            key={photo.id}
          >
            <Image
              src={photo.image}
              alt={photo.altText}
              width={500}
              height={500}
              layout="responsive"
            />
          </div>
        ))}
      </div>
    </>
  );
}
