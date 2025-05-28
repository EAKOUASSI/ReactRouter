// src/App.js
import "./App.css";
import CustomNavbar from "./CustomNavbar"; // importation le composant Navbar
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./MovieList";
import Filter from "./Filter";
import MovieDescription from "./MovieDescription";

//Importation des images
import BlackPanther from "./Images/Black_Panther.jpg";
import Inception from "./Images/Inception.jpg";
import Titanic from "./Images/Titanic.jpg";
import Avatar from "./Images/Avatar-II.jpeg";
import CrazyDad from "./Images/CrazyDad.jpg";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Wakanda II",
      description: "Shuri saura-t-elle assumer l'héritage de Tchala ?",
      posterURL: BlackPanther,
      rating: 6.5,
      trailerURL: "https://www.youtube.com/embed/_Z3QKkl1WyM"
    },
    {
      title: "Inception",
      description:
        "Un voleur qui vole des secrets d'entreprise grâce à la technologie de partage de rêves.",
      posterURL: Inception,
      rating: 8.8,
      trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
      title: "Titanic",
      description:
        "Une histoire d'amour vouée à l'échec par le naufrage tragique du RMS Titanic.",
      posterURL: Titanic,
      rating: 7,
      trailerURL: "https://www.youtube.com/embed/kVrqfYjkTdQ"
    },
    {
      title: "Avatar 2",
      description:
        "Un Marine paraplégique envoyé sur la lune Pandora pour une mission unique.",
      posterURL: Avatar,
      rating: 8,
      trailerURL: "https://www.youtube.com/embed/d9MyW72ELq0"
    },
    {
      title: "Crazy Dad",
      description:
        "Un père immature débarque la veille des noces de son fils au péril de ces dernieres...",
      posterURL: CrazyDad,
      rating: 4,
      trailerURL: "https://www.youtube.com/embed/ZrXrZ5iiR0o"
    }
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState("");

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
  );

  return (
    <>
      <CustomNavbar />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Filter
                  setFilterTitle={setFilterTitle}
                  setFilterRating={setFilterRating}
                />
                <MovieList movies={filteredMovies} />
                <button
                  className="btn btn-primary m-3"
                  onClick={() =>
                    addMovie({
                      title: "New Movie",
                      description: "Description",
                      posterURL: "https://via.placeholder.com/150",
                      rating: 7.5
                    })
                  }
                >
                  Ajouter un film
                </button>
              </div>
            }
          />
          <Route
            path="/movie/:id"
            element={<MovieDescription movies={movies} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
