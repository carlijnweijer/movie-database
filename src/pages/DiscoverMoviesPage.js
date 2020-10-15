import React, { useState } from "react";
import axios from "axios";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");

  const search = async () => {
    console.log("TODO search movies for:", searchText);

    // Best practice: encode the string so that special characters
    //  like '&' and '?' don't accidentally mess up the URL
    const queryParam = encodeURIComponent(searchText);

    // use the `axios` library to fetch the data
    const data = await axios.get(
      `https://omdbapi.com/?&apikey=aab4ea86&t=${queryParam}`
    );

    console.log("Success!", data);
  };

  function onSearchText(event) {
    console.log(event.target.value);
    set_searchText(event.target.value);
  }

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input value={searchText} onChange={onSearchText} />
        <button onClick={search}>Search</button>
      </p>
    </div>
  );
}
