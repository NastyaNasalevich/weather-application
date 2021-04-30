import { ApplicationStatus } from '@/enums/ApplicationStatus';
import { Type, WeatherDataActions } from '@/actions/weatherDataActions';
import { takeEvery, call, put, select } from 'redux-saga/effects';
import { getCoordinatesByCityName, getWeatherByCoordinates } from '@/api/openWeatherMapAPI';
import CoordinatesResponse from '@/interfaces/CoordinatesResponse';
import { WeatherDataResponse } from '@/interfaces/WeatherDataResponse';
import { City } from '@/interfaces/City';
import { Units } from '@/enums/Units';
import { SettingsActions } from '@/actions/settingsActions';
import { getUnits } from '@/selectors/settingsSelectors';

function* requestWeatherDataSaga({ payload }: ReturnType<typeof WeatherDataActions.requestWeatherData>) {
  try {
    const coordinatesResponse: CoordinatesResponse[] = yield call(getCoordinatesByCityName, payload);
    const { lat, lon, name } = coordinatesResponse[0];
    const city: City = { lat, lon, name };
    yield put(SettingsActions.setCity(city));

    const units: Units = yield select(getUnits);
    const { current, daily }: WeatherDataResponse = yield call(getWeatherByCoordinates, lat, lon, units);
    yield put(WeatherDataActions.setCurrentWeather(current));
    yield put(WeatherDataActions.setDailyWeather(daily));
    yield put(SettingsActions.updateApplicationStatus(ApplicationStatus.READY));
  } catch (error) {
    console.error(error);
  }
}

function* weatherDataSaga() {
  yield takeEvery(Type.REQUEST_WEATHER_DATA, requestWeatherDataSaga);
}

export default weatherDataSaga;
