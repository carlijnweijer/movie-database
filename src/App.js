import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import Navbar from "./components/Navbar";
import MoviePage from "./pages/MoviePage";

function NotFound() {
  return <h1>Are you drunk??</h1>;
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/discover/:searchText?" component={DiscoverMoviesPage} />
        <Route path="/movies/:imdbID" component={MoviePage} />
        <Route path="/" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
