import styles from "./places-to-visit.module.css";
import utilStyles from "../../styles/utils.module.css";
import PlacesToVisitPhoto from "../places-to-visit-photo/places-to-visit-photo";

export default function PlacesToVisit() {
  const photoList = [
    { id: 1, image: "/whatToSee/kashmir.jpg", altText: "Kashmir picture" },
    { id: 2, image: "/whatToSee/swat2.jpg", altText: "Swat picture" },
    { id: 3, image: "/whatToSee/kashmir2.jpg", altText: "Kashmir picture" },
    { id: 4, image: "/whatToSee/swat.jpg", altText: "Swat picture" },
    { id: 5, image: "/whatToSee/nature.jpg", altText: "nature picture" },
    {
      id: 6,
      image: "/whatToSee/history.jpg",
      altText: "history monument picture",
    },
    {
      id: 7,
      image: "/whatToSee/sunflowers.jpg",
      altText: "Sunflowers pictures",
    },
  ];

  return (
    <div
      className={`${styles.photoGalleryContainer} ${utilStyles.fontDark} ${utilStyles.margUpDown} ${utilStyles.padUpDown}`}
    >
      <h1>Places To Visit</h1>
      <div className={`${styles.gallery} ${utilStyles.pad}`}>
        {photoList.map((photo) => (
          <PlacesToVisitPhoto key={photo.id} photosToDisplay={photo} />
        ))}
      </div>
    </div>
  );
}
