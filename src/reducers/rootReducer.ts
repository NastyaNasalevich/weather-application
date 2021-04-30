import { combineReducers, Reducer } from 'redux';
import { StoreState } from '@/stores/store';
import weatherDataReducer from './weatherDataReducers';
import settingsReducer from './settingsReducers';

const rootReducer: Reducer = combineReducers<StoreState>({
  settings: settingsReducer,
  weatherData: weatherDataReducer,
});

export default rootReducer;
