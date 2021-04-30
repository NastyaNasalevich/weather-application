import {
  call, spawn, all, delay,
} from 'redux-saga/effects';
import settingsSaga from './settingsSaga';
import weatherDataSaga from './weatherDataSaga';

export default function* rootSaga() {
  const sagas = [
    settingsSaga,
    weatherDataSaga,
  ];

  yield all(sagas.map((saga) => spawn(function* callSagas() {
    while (true) {
      try {
        yield call(saga);
      } catch (error) {
        console.error('Saga error, the saga will be restarted');
      }
      yield delay(1000); // Workaround to avoid infinite error loops
    }
  })));
}
