import { RECEIVE_WEATHER_DATA, REQUEST_WEATHER, SET_SEARCH_TEXT } from '../actions/search'

const initialState = {
  searchText: '',
  weatherData: {}
}

const search = (state=initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.value
      }
      break;
    case RECEIVE_WEATHER_DATA:
      return {
        ...state,
        loading: false,
        weatherData: action.weatherData
      }
    case REQUEST_WEATHER:
      return {
        ...state,
        loading: true,
      }

    default:
      return state

  }
}

export default search
