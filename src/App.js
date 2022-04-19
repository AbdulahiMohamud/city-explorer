import React from 'react';
import axios from 'axios';
import Forms from './Forms';
import Display from './Display';
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      city:'',
      flag:false,
      // lat:'',
      // lon:'',
      // img: '',
      // display: '',
      cityData: 0,
      error:false,
      errorMessage:''

    }
  }

  handleCitySubmit = async(e) => {
    e.preventDefault();
    try {
      let data =  await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);

      let cityDataMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${data.data[0].lat},${data.data[0].lon}&zoom=14`


      // console.log(cityData.data[0].lon);
      this.setState ({
        cityData: data.data[0],
        flag:true,
        // lat:cityData.data[0].lat,
        // lon:cityData.data[0].lon,
        // display:cityData.data[0].display_name,
        img: cityDataMap
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
         

      
    </>
  
  )
 }
}

export default App;
