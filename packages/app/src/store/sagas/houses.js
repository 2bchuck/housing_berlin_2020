import { takeEvery, call, put, fork } from 'redux-saga/effects';
import * as actions from '../actions/houses';
import * as api from '../../api/houses';

function* fetchHouses(action) {
  try {
    const result = yield call(api.fetchHouses, action.payload.city);
    yield put(actions.fetchHousesSuccess(result.data));
  } catch (error) {
    console.error(error);
  }
}

function* watchFetchUsersRequest() {
  yield takeEvery(actions.FETCH_HOUSES_REQUEST, fetchHouses);
}

const houseSagas = [fork(watchFetchUsersRequest)];

export default houseSagas;
