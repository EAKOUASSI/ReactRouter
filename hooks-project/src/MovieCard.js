import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie, id }) => {
  const navigate = useNavigate();

  if (!movie) {
    return <div>Loading...</div>; // Ou un message d'erreur approprié
  }

  const handleClick = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <Card className="movie-card">
      <Card.Img
        className="poster"
        variant="top"
        src={movie.posterURL}
        alt={`${movie.title} Poster`}
      />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          Rating:{" "}
          <span style={{ color: "rgb(0, 221, 255)" }}>{movie.rating}</span>/10
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>
          Voir plus
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
