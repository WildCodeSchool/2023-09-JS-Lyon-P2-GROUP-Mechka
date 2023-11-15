import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./FavoriteCart.module.css";

export default function FavoriteCart({ img, title, artistName, alt, id }) {
  return (
    <div className={styles.containerFav}>
      <div className={styles.positionFav}>
        <Link to={`/albums/${id}`}>
          <img src={img} alt={alt} />
          <p>{title}</p>
          <p>{artistName}</p>
        </Link>
      </div>
    </div>
  );
}

FavoriteCart.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
