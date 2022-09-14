import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Movies = (props) => {
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER}/mylists`).then((response) => {
      console.log("connected", response);
      props.setMovies(response.data);
    });
  }, []);

  return (
    <>
      {props.movies.map((movie, idx) => {
        // let location =
        // {
        //     pathname: '/favorite',
        //     state: movie
        // }

        return <li key={idx}>{movie.title}</li>;
      })}
    </>
  );
};

export default Movies;
