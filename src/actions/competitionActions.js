import CompetitionAPI from '../api/competitionAPI'

export function loadCompetitionSuccess(competition) {
  return {type: 'LOAD_COMPETITION_SUCCESS', competition }
}

export function loadCompetitionError(error) {
  return null
}

export function loadCompetition(competitionId) {
  return dispatch => {
    return CompetitionAPI.getCompetition(competitionId).then(competition => {
      dispatch(loadCompetitionSuccess(competition))
    }).catch(error => {
      dispatch(loadCompetitionError(error))
    })
  }
}
