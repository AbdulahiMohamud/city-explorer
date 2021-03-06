import React from 'react'
import { Form, Button} from 'react-bootstrap'


class Forms extends React.Component{
  

  render() {
    
    
    return (
      <Form onSubmit={this.props.handleCitySubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Search for City</Form.Label>
          <Form.Control onInput={this.props.handleCityInput}/>

          <Button variant="primary" type="submit">
            Explore!
          </Button>
        </Form.Group>
      </Form>
    )
  }
}
export default Forms;