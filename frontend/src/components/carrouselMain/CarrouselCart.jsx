import PropTypes from "prop-types";
import styles from "./CarrouselCart.module.css";

export default function CarrouselCart({ img }) {
  return (
    <div className={styles.containerImg}>
      <img className={styles.image} src={img} alt="Cover of album" />
    </div>
  );
}

CarrouselCart.propTypes = {
  img: PropTypes.string.isRequired,
};
