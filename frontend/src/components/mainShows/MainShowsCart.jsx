import PropTypes from "prop-types";
import styles from "./MainShowsCart.module.css";

export default function MainShowsCart({ img }) {
  return (
    <div className={styles.containerImgShows}>
      <img className={styles.imageShows} src={img} alt="Cover of shows" />
    </div>
  );
}

MainShowsCart.propTypes = {
  img: PropTypes.string.isRequired,
};
