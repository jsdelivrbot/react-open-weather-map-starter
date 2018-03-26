// import fetch from 'cross-fetch'
import { url, appId } from '../resources/openWeatherMapInfo.json'

export const REQUEST_WEATHER = 'REQUEST_WEATHER'
function requestWeather(search) {
  return {
    type: REQUEST_WEATHER,
    search
  }
}
 
export const RECEIVE_WEATHER_DATA = 'RECEIVE_WEATHER_DATA'
function receiveWeatherData(search, json) {
  return {
    type: RECEIVE_WEATHER_DATA,
    search,
    weatherData: json,
    receivedAt: Date.now()
  }
}
 
export const INVALIDATE_SEARCH = 'INVALIDATE_SEARCH'
export function invalidateWeatherData(search) {
  return {
    type: INVALIDATE_SEARCH,
    search
  }
}

export function fetchWeather(search) {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.
  console.log('Fetching weather...');
  return function (dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
 
    dispatch(requestWeather(search))
 
    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.
 
    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.
 
    // return fetch(`${url}?q=${search}&appid=${appId}`)
    return fetch(`${url}?q=${search}&appid=${appId}`)
      .then(
        response => response.json(),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issue  s/6895
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
 
        dispatch(receiveWeatherData(search, json))
      )
  }
}

export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT'
export function setSearchText(value) {
  return {
    type: SET_SEARCH_TEXT,
    value
  }
}
