import React from 'react';
import axios from 'axios';
import Forms from './Forms';
import Display from './Display';
import Weather from './Weather';
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      city:'',
      flag:false,
      cityData: 0,
      error:false,
      errorMessage:'',
      weatherData:[]

    }
  }

  handleCitySubmit = async(e) => {
    e.preventDefault();
    try {
      let data =  await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);

      let cityDataMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${data.data[0].lat},${data.data[0].lon}&zoom=14`

      let cityForeCast = await axios.get(`${process.env.REACT_APP_SERVER}/weather?searchQueryCity=${this.state.city}`);

      let forcast = cityForeCast.data;


      console.log(forcast);
      this.setState ({
        cityData: data.data[0],
        flag:true,
        img: cityDataMap,
        weatherData: forcast
      })


    } catch (error) {

      this.setState({
        error:true,
        errorMessage:`An Error Occurred: ${error.response.status}`

      })

    }

    
  }
  handleCityInput = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  render() {
    console.log(this.state.weatherData);
   
    return (
      <>
      <Forms
      handleCityInput={this.handleCityInput}
      handleCitySubmit={this.handleCitySubmit}
      />

      
        {this.state.flag ? (

          <Display
          img={this.state.img}
          errorMessage={this.state.errorMessage}
          error={this.state.error}
          cityData={this.state.cityData}
          /> 
        ): null}


        <Weather
        weatherData={this.state.weatherData}
        city={this.state.city}
        />       

      
    </>
  
  )
 }
}

export default App;
