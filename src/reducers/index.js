import { combineReducers } from 'redux'
import navbar from './navbar'
import search from './search'

const index = combineReducers({
  navbar,
  search
})
 
export default index
