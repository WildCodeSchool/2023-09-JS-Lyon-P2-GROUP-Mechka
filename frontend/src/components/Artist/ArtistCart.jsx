import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ArtistCart.module.css";

export default function CarrouselCart({ img, nameAlbum, id }) {
  return (
    <div className={styles.container}>
      <div className={styles.containerImg}>
        <Link to={`/albums/${id}`}>
          <img className={styles.image} src={img} alt="Cover of album" />
        </Link>
      </div>
      <p className={styles.infoTitle}>{nameAlbum}</p>
    </div>
  );
}

CarrouselCart.propTypes = {
  img: PropTypes.string.isRequired,
  nameAlbum: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
