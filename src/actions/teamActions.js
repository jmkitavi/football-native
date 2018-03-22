import TeamAPI from '../api/teamApi'

export function loadTeamSuccess(team) {
  return { type: 'LOAD_TEAM_SUCCESS', team}
}

export function loadTeamError(error) {
  return null
}

export function loadTeam(teamId) {
  return dispatch => {
    return TeamAPI.getTeam(teamId).then(team => {
      dispatch(loadTeamSuccess(team))
    }).catch(error => {
      dispatch(loadTeamError(error))
    })
  }
}
