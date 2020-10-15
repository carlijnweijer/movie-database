import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MoviePage.scss";

export default function MoviePage() {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState({
    data: [],
    status: "idle",
  });

  useEffect(() => {
    async function fetchDetails() {
      const response = await axios.get(
        `https://omdbapi.com/?&apikey=aab4ea86&i=${params.imdbID}`
      );
      console.log("what is response:", response);
      setMovieDetails({ status: "succes", data: response.data });
    }

    fetchDetails();
  }, [params.imdbID]);

  console.log("WHAT ARE PARAMS:", params);

  return (
    <div className="moviePage">
      <h1>{movieDetails.data?.Title}</h1>
      <p>{movieDetails.data?.Year}</p>
      <p>{movieDetails.data?.Genre}</p>
      <p>{movieDetails.data?.Plot}</p>
      <img src={movieDetails.data?.Poster} alt={movieDetails.data?.Title} />
    </div>
  );
}
