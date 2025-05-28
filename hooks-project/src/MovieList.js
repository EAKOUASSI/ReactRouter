import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <Container>
      <Row>
        {movies.map((movie, index) => (
          <Col key={index}>
            <MovieCard movie={movie} id={index} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieList;
