import PropTypes from "prop-types";

export default function ArtistMain({ img, artist }) {
  return (
    <div>
      <div>
        <img src={img} alt="Artist" />
      </div>
      <div>
        <p>{artist}</p>
      </div>
    </div>
  );
}

ArtistMain.propTypes = {
  img: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
};
