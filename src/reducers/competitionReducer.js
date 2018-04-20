import initialState from '../store/initialState'

export function competitionReducer(state = initialState.competition, action) {
  switch(action.type) {
    case 'LOAD_COMPETITION_SUCCESS':
      return action.competition

    default:
      return state
  }
}