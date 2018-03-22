import axios from 'axios'

class TeamAPI {
  static getTeamDetails(teamId) {
    return axios.get(`http://api.football-data.org/v1/teams/${teamId}`)
    .then(response => {
      return response.data
    }).catch(error => {
      console.log(error)
      return error
    })
  }
  static getTeamFixtures(teamId) {
    return axios.get(`http://api.football-data.org/v1/teams/${teamId}/fixtures`)
    .then(response => {
      return response.data
    }).catch(error => {
      console.log(error)
      return error
    })
  }
  static getTeamPlayers(teamId) {
    return axios.get(`http://api.football-data.org/v1/teams/${teamId}/players`)
    .then(response => {
      return response.data.players
    }).catch(error => {
      console.log(error)
      return error
    })
  }
  static getTeam(teamId) {
    const team = {}
    return Promise.all([
      this.getTeamDetails(teamId),
      this.getTeamFixtures(teamId),
      this.getTeamPlayers(teamId)
    ]).then(values => {
      team.details = values[0]
      team.fixtures = values[1]
      team.players = values[2]
      return team
    })
  }
}

export default TeamAPI
