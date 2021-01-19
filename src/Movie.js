import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, title, year, rating, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title}></img>

      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <h5 className="movie__rating"> {rating} / 10</h5>
        <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
        <p className="movie_summary">{summary.slice(0, 130)}...</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
