import { createSelector } from 'reselect';
import { uniqueValues } from '../../utils';
import { REGION } from '../../utils/constants';

export const selectHouses = (state) => state.houses.houses;

export const selectRegions = createSelector([selectHouses], (items) => {
  return uniqueValues(items, REGION).sort();
});
