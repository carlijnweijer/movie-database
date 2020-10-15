import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./MoviePage.scss";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [movies, setMovies] = useState({
    status: "waiting for search",
    data: [],
  });

  const search = async () => {
    setMovies({ status: "loading..", data: [] });
    // Best practice: encode the string so that special characters
    //  like '&' and '?' don't accidentally mess up the URL
    const queryParam = encodeURIComponent(searchText);

    // use the `axios` library to fetch the data
    const response = await axios.get(
      `https://omdbapi.com/?&apikey=aab4ea86&s=${queryParam}`
    );

    if (response.data.Response === "False") {
      setMovies({ status: "error", data: [], message: response.data.Error });
    } else {
      setMovies({ status: "succes", data: response.data.Search });
    }
    set_searchText("");
  };

  console.log(movies);

  function onSearchText(event) {
    console.log(event.target.value);
    set_searchText(event.target.value);
  }

  return (
    <div className="discoverPage">
      <h1>Discover some movies!</h1>
      <p>
        <input
          className="inputField"
          value={searchText}
          onChange={onSearchText}
        />

        <button
          className="searchBtn"
          disabled={movies.status === "loading"}
          onClick={search}
        >
          Search
        </button>
      </p>
      {movies.status !== "error" ? movies.status : movies.message}

      {movies.data.map((movie) => {
        return (
          <div className="searchResult">
            <Link to={`/movies/${movie.imdbID}`}>
              <p>{movie.Title}</p>
            </Link>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        );
      })}
    </div>
  );
}
