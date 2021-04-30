import { StoreState } from '@/stores/store';
import { City } from '@/interfaces/City';
import { Units } from '@/enums/Units';
import { ApplicationStatus } from '@/enums/ApplicationStatus';

export const getApplicationStatus = (state: StoreState): ApplicationStatus => (
  state.settings.applicationStatus
);

export const getUnits = (state: StoreState): Units => (
  state.settings.units
);

export const getSelectedDayIndex = (state: StoreState): number => (
  state.settings.selectedDayIndex
);

export const getCity = (state: StoreState): City => (
  state.settings.city
);