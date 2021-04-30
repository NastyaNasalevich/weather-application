import { WeatherDataActions } from '@/actions/weatherDataActions';
import { takeEvery, call, put, select } from 'redux-saga/effects';
import { getWeatherByCoordinates } from '@/api/openWeatherMapAPI';
import { WeatherDataResponse } from '@/interfaces/WeatherDataResponse';
import { SettingsActions, Type } from '@/actions/settingsActions';
import { getCity } from '@/selectors/settingsSelectors';

function* changeUnits({ payload }: ReturnType<typeof SettingsActions.changeUnits>) {
  try {
    const { lat, lon } = yield select(getCity);
    const { current, daily }: WeatherDataResponse = yield call(getWeatherByCoordinates, lat, lon, payload);

    yield put(WeatherDataActions.setCurrentWeather(current));
    yield put(WeatherDataActions.setDailyWeather(daily));
  } catch (error) {
    console.error(error);
  }
}

function* settingsSaga() {
  yield takeEvery(Type.CHANGE_UNITS, changeUnits);
}

export default settingsSaga;
