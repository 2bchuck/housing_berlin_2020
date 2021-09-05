import { all } from 'redux-saga/effects';
import houseSagas from './houses';

export default function* rootSaga() {
  yield all([...houseSagas]);
}
