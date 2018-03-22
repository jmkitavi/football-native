import axios from 'axios'

class CompetitionAPI {
  static getCompetitions() {
    return axios.get(`http://api.football-data.org/v1/competitions`)
    .then(response => {
      return response.data
    }).catch(error => {
      console.log(error)
      return error
    })
  }

  static getCompetitionFixtures(competitionId) {
    return axios.get(`http://api.football-data.org/v1/competitions/${competitionId}/fixtures`)
    .then(response => {
      return response.data
    }).catch(error => {
      console.log(error)
      return error
    })
  }
  static getCompetitionTable(competitionId) {
    return axios.get(`http://api.football-data.org/v1/competitions/${competitionId}/leagueTable`)
    .then(response => {
      return response.data
    }).catch(error => {
      console.log(error)
      return error
    })
  }

  static getCompetition(competitionId) {
    const competition = {}
    return Promise.all([
      this.getCompetitionFixtures(competitionId),
      this.getCompetitionTable(competitionId),
    ]).then((values) => {
      competition.fixtures = values[0]
      competition.table = values[1]
      return competition
    })
  } 
}

export default CompetitionAPI