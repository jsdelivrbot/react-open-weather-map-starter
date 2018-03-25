import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../src/actions/search'
import fetchMock from 'fetch-mock'
import moment from 'moment'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {

  beforeEach(() => {
    fetchMock.restore();
  })

  it('creates RECEIVE_WEATHER_DATA when fetching weather data has been done', () => {
    fetchMock.get('*', {
        headers: { 'content-type': 'application/json' },
        body: {
          name: 'London',
          main: { temp: '284.15' },
          weather: [{
            description: 'scattered clouds',
            icon: '03d',
            main: 'Clouds'
          }]
        }
      }
    )

    const expectedActions = [
      { type: actions.REQUEST_WEATHER, search: 'London' },
      { type: actions.RECEIVE_WEATHER_DATA,
        search: 'London',
        weatherData: {
          name: 'London',
          main: { temp: '284.15' },
          weather: [{
            description: 'scattered clouds',
            icon: '03d',
            main: 'Clouds'
          }]
        }
        // receivedAt: Date.now()
      }
    ]
    const store = mockStore({ search: {} })

    return store.dispatch(actions.fetchWeather('London')).then(() => {
      // return of async actions
      let actions = store.getActions()
      delete actions[1]['receivedAt']//Ignoring date comparizon. TODO: Mock date.
      expect(actions).toEqual(expectedActions)
    })
  })
})
