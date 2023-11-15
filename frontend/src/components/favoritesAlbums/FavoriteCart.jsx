import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function FavoriteCart({ img, title, artistName, alt, id }) {
  return (
    <Link to={`/albums/${id}`}>
      <div>
        <img src={img} alt={alt} />
        <p>{title}</p>
        <p>{artistName}</p>
      </div>
    </Link>
  );
}

FavoriteCart.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
