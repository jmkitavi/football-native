import initialState from '../store/initialState'

export function competitionsReducer(state = initialState.competitions, action) {
  switch(action.type) {
    case 'LOAD_COMPETITIONS_SUCCESS':
      return action.competitions

    default:
      return state
  }
}

export function competitionReducer(state = initialState.competition, action) {
  switch(action.type) {
    case 'LOAD_COMPETITION_SUCCESS':
      return action.competition

    default:
      return state
  }
}