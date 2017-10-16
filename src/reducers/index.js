import {combineReducers} from 'redux'
import client from '../apollo'
import {reducer as userReducer} from './user'

const reducers = combineReducers({
  apollo: client.reducer(),
  user: userReducer
})

export default reducers
