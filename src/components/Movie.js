import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const Movie = ({ key, data }) => (
  <div className="movie">
    <img src={IMG_API + data.poster_path} alt={data.title} />
    <div className="movie-info">
      <h3>{data.title}</h3>
      <span>{data.vote_average}</span>
    </div>
    <div className="movie-over">
      <h2>Overview:</h2>
      <p>{data.overview}</p>
    </div>
  </div>
);

export default Movie;
