import React, { Component } from 'react';
import fetchWeather from '../../actions/search'
import { connect } from 'react-redux'
import WeatherCard from './WeatherCard.jsx'
import convert from 'convert-units'
class HomePage extends Component {

  render() {
    const hasWeather = this.props.weatherData && this.props.weatherData.weather

    return (
      <div>
        <WeatherCard
          loading={this.props.loading}
          title={hasWeather ? this.props.weatherData.name : 'Type a city in search box'}
          icon={hasWeather ? this.props.weatherData.weather[0].icon : undefined}
          subtitle={hasWeather ? this.props.weatherData.weather[0].main : undefined}
          text={hasWeather ? `(${this.props.weatherData.weather[0].description})` : undefined}
          receivedAt={this.props.receivedAt}
          temperature={hasWeather ? convert(this.props.weatherData.main.temp).from('K').to('C').toFixed(0) + '°C' : undefined}
        />
        {/* <WeatherCard title={this.props.weatherData.wind.main}/> */}
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  weatherData: state.search.weatherData,
  receivedAt: state.search.receivedAt,
  loading: state.search.loading,
})

export default connect(mapStateToProps)(HomePage)
