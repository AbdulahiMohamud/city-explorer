import React from 'react'
import { Container, Card, } from 'react-bootstrap'
import './Forcast.css';



class Forcast extends React.Component {

  render() {
    return (

      <Container>
        <Card className='forcast'>
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