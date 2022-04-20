import React from 'react'
import { Container, Card, } from 'react-bootstrap'



class Forcast extends React.Component {

  render() {
    return (

      <Container>
        <Card>
          <Card.Body>
            <Card.Title>Weather in: {this.props.city} on: {this.props.date}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}
export default Forcast;