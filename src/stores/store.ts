import { Settings } from './../reducers/settingsReducers';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '@/reducers/rootReducer';
import rootSaga from '@/sagas/rootSaga';
import { WeatherData } from '@/reducers/weatherDataReducers';

const sagaMiddleware = createSagaMiddleware();

export interface StoreState {
  settings: Settings;
  weatherData: WeatherData;
}

export const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
