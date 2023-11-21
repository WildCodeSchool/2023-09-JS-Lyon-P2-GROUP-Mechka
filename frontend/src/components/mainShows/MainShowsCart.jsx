import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./MainShowsCart.module.css";

export default function MainShowsCart({ img, id }) {
  return (
    <div className={styles.containerImgShows}>
      <Link to={`/shows/${id}`}>
        <img className={styles.imageShows} src={img} alt="Cover of shows" />
      </Link>
    </div>
  );
}

MainShowsCart.propTypes = {
  img: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
