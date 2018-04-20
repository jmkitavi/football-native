import {
  combineReducers,
  createStore,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { competitionReducer } from '../reducers/competitionReducer'
import { teamReducer } from '../reducers/teamReducer'
import { fixtureReducer } from '../reducers/fixtureReducer'

const rootReducer =  combineReducers({
  competition: competitionReducer,
  team: teamReducer,
  fixture: fixtureReducer
})

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}
