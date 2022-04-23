import React from "react";
import Forcast from "./Forcast";

class Weather extends React.Component {
  render() {

    let weather = this.props.weatherData.map((day, idx) => (
      <Forcast
        description={day.forecast}
        key={idx}
        city={this.props.city}
        date={day.time}
      />
    ))
    return (
      [weather]
    );
  }
}

  
export default Weather;