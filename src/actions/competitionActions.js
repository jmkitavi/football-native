import CompetitionAPI from '../api/competitionAPI'

export function loadCompetitionsSuccess(competitions) {
  return { type: 'LOAD_COMPETITIONS_SUCCESS', competitions}
}

export function loadCompetitionsError(error) {
  return null
}

export function loadCompetitionSuccess(competition) {
  return {type: 'LOAD_COMPETITION_SUCCESS', competition }
}

export function loadCompetitionError(error) {
  return null
}

export function loadCompetitions() {
  return dispatch => {
    return CompetitionAPI.getCompetitions().then(competitions => {
      dispatch(loadCompetitionsSuccess(competitions))
    }).catch(error => {
      dispatch(loadCompetitionsError(error))
    })
  }
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
