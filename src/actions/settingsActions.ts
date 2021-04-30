import { ApplicationStatus } from '@/enums/ApplicationStatus';
import { Units } from '@/enums/Units';
import { City } from '@/interfaces/City';
import { createAction } from 'redux-actions';

export enum Type {
  CHANGE_DAY = 'CHANGE_DAY',
  CHANGE_UNITS = 'CHANGE_UNITS',
  SET_CITY = 'SET_CITY',
  UPDATE_APPLICATION_STATUS = 'SET_ERROR_STATUS',
}

const changeDay = createAction<number>(Type.CHANGE_DAY);
const changeUnits = createAction<Units>(Type.CHANGE_UNITS);
const setCity = createAction<City>(Type.SET_CITY);
const updateApplicationStatus = createAction<ApplicationStatus>(Type.UPDATE_APPLICATION_STATUS);

export const SettingsActions = {
  changeDay,
  changeUnits,
  setCity,
  updateApplicationStatus,
};

export type SettingsPayloads = City & Units & number & ApplicationStatus;
