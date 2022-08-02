import styles from "./places-to-visit-photo.module.css";
import utilStyles from "../../styles/utils.module.css";
import { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  borderRadius: "10px",
  boxShadow: 24,
};

export default function PlacesToVisitPhoto(props) {
  const { image, altText } = props.photosToDisplay;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button className={styles.btn} onClick={handleOpen}>
        <div className={`${styles.pic}`}>
          <Image
            className={styles.modelPic}
            src={image}
            alt={altText}
            height={300}
            width={300}
            layout="responsive"
          />
        </div>
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style} className={styles.modelBox}>
          <Image
            className={styles.modelPic}
            src={image}
            alt={altText}
            height={500}
            width={500}
            layout="responsive"
            objectFit="cover"
          />
        </Box>
      </Modal>
    </>
  );
}
