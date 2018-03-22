import fixtureAPI from '../api/fixtureApi'

export function loadFixtureSuccess(fixture) {
  return { type: 'LOAD_FIXTURE_SUCCESS', fixture}
}

export function loadFixtureError(error) {
  return null
}

export function loadFixture(fixtureId) {
  return dispatch => {
    return fixtureAPI.getFixture(fixtureId).then(fixture => {
      dispatch(loadFixtureSuccess(fixture))
    }).catch(error => {
      dispatch(loadFixtureError(error))
    })
  }
}
