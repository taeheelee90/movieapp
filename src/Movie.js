import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, title, year, rating, summary, poster }) {
  return (
    <div class="movie">
      <img src={poster} alt={title} title={title}></img>

      <div class="movie__data">
        <h3 class="movie__title">{title}</h3>
        <h5 class="movie__year">{year}</h5>
        <h5 class="movie__rating"> {rating} / 10</h5>
        <p class="movie_summary">{summary}</p>
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
};

export default Movie;
