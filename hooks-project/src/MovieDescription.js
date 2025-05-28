import React from "react";
import { useParams, Link } from "react-router-dom";

const MovieDescription = ({ movies }) => {
  const { id } = useParams();
  const movie = movies[id];

  if (!movie) {
    return <div>Film non trouvé</div>;
  }

  return (
    <div style={{ fontFamily: "Roboto serif" }}>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerURL}
        title={movie.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />
      <Link style={{ textDecoration: "none" }} to="/">
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default MovieDescription;
