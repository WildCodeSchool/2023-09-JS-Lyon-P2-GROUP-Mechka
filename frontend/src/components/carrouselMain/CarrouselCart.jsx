import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./CarrouselCart.module.css";

export default function CarrouselCart({ img, nameAlbum, nameArtist, id }) {
  return (
    <div className={styles.container}>
      <div className={styles.containerImg}>
        <Link to={`/albums/${id}`}>
          <img className={styles.image} src={img} alt="Cover of album" />
        </Link>
      </div>
      <p className={styles.infoTitle}>{nameAlbum}</p>
      <p className={styles.infoArtist}>{nameArtist}</p>
    </div>
  );
}

CarrouselCart.propTypes = {
  img: PropTypes.string.isRequired,
  nameAlbum: PropTypes.string.isRequired,
  nameArtist: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
