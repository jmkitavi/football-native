import initialState from '../store/initialState'

export function teamReducer(state = initialState.team, action) {
  switch(action.type) {
    case 'LOAD_TEAM_SUCCESS':
      return action.team

    default:
      return state
  }
}
