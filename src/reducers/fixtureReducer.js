import initialState from '../store/initialState'

export function fixtureReducer(state = initialState.fixture, action) {
  console.log(action.fixture)
  switch(action.type) {
    case 'LOAD_FIXTURE_SUCCESS':
      return action.fixture

    default:
      return state
  }
}
