import React from "react";
import './Display.css';

class Display extends React.Component {
  render () {

    return (
      <>
  
          <p>{this.props.errorMessage}</p>
           
           <ul>
           <li>Latitude: {this.props.cityData.lat}</li>
          
         <li>Longtitude: {this.props.cityData.lon}</li>
          
          <li>Location: {this.props.cityData.display_name}</li>
          <img src={this.props.img} alt={this.props.cityData.display_name}/>
          </ul> 
          
      </>
    )
  }
}
export default Display;