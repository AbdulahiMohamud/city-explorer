import React from "react";
import { Card } from "react-bootstrap";
import './Movies.css';


class Movies extends React.Component {
  render() {
    return(
      <>
      {
        this.props.movie.map((movie,idx) => (

         
          <Card className="cards" key={idx}>
            <Card.Body>
              <Card.Img id="Movie" src={`https://image.tmdb.org/t/p/w500/${movie.img}`} alt={movie.title}/> 
              <Card.Title>Movie Title: {movie.title}</Card.Title>
              <Card.Text>
              Description: {movie.description}
              </Card.Text>
              <Card.Text>
              average votes: {movie.avgVotes}
              </Card.Text>
              <Card.Text>
              popularity: {movie.popularity}
              </Card.Text>
              <Card.Text>
              released on:{movie.releasedOn}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </>

    );
  }
}
export default Movies;