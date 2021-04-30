import { Action, handleActions } from 'redux-actions';
import { City } from '@/interfaces/City';
import { Units } from '@/enums/Units';
import { SettingsPayloads, Type } from '@/actions/settingsActions';
import { ApplicationStatus } from '@/enums/ApplicationStatus';

export interface Settings {
  city: City;
  applicationStatus: ApplicationStatus;
  selectedDayIndex: number;
  units: Units;
}

export const settingsInitialState = {
  city: {} as City,
  applicationStatus: ApplicationStatus.INITIAL,
  selectedDayIndex: 0,
  units: Units.METRIC,
};

const changeDay = (
  state: Settings,
  action: Action<number>,
): Settings => {
  return { ...state, selectedDayIndex: action.payload };
};

const changeUnits = (
  state: Settings,
  action: Action<Units>,
): Settings => {
  return { ...state, units: action.payload };
};

const setCity = (
  state: Settings,
  action: Action<City>,
): Settings => {
  return { ...state, city: action.payload };
};

const updateApplicationStatus = (
  state: Settings,
  action: Action<ApplicationStatus>,
): Settings => {
  return { ...state, applicationStatus: action.payload };
};

const settingsReducer = handleActions<Settings, SettingsPayloads>(
  {
    [Type.CHANGE_UNITS]: changeUnits,
    [Type.CHANGE_DAY]: changeDay,
    [Type.SET_CITY]: setCity,
    [Type.UPDATE_APPLICATION_STATUS]: updateApplicationStatus,
  },
  settingsInitialState,
);

export default settingsReducer;
