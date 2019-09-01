import React, { Component } from 'react';
import PropTypes from "prop-types";

function Movie({id, title, summary, poster, genres}){
    return <div class="movie">
        <img src={poster} alt={title} title={title}></img>
        <h3 class="movie_title">{title}</h3>
        <h5 class="movie_summary">{summary}</h5>
        <ul className="genres">
            {genres.map((genre, index) => {
                <li key={index} className="genres_genre">{genre}</li>
            })}
        </ul>
    </div>
}

Movie.propTypes = {
    id: PropTypes.number,
    title:PropTypes.string,
    summary:PropTypes.string,
    poster:PropTypes.string
}

export default Movie;