import axios from 'axios'

class FixtureAPI {
  static getFixture(fixtureId) {
    return axios.get(`http://api.football-data.org/v1/fixtures/${fixtureId}`)
    .then(response => {
      return response.data
    }).catch(error => {
      console.log(error)
      return error
    })
  }
}

export default FixtureAPI
