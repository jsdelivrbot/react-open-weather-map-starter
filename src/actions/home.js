import fetch from 'cross-fetch'
 
export const REQUEST_WEATHER = 'REQUEST_WEATHER'
function requestWeather(search) {
  return {
    type: REQUEST_WEATHER,
    search
  }
}
 
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER'
function receiveWeather(search, json) {
  return {
    type: RECEIVE_WEATHER,
    search,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}
 
export const INVALIDATE_WEATHER = 'INVALIDATE_WEATHER'
export function invalidateWeather(search) {
  return {
    type: INVALIDATE_WEATHER,
    search
  }
}
 
// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(fetchWeather('reactjs'))
 
export function fetchWeather(search) {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.
 
  return function (dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
 
    dispatch(requestWeather(search))
 
    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.
 
    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.
 
    return fetch(`https://www.reddit.com/r/${search}.json`)
      .then(
        response => response.json(),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
 
        dispatch(receiveWeather(search, json))
      )
  }
}
