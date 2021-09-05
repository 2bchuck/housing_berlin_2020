import {
  REGION,
  PURCHASE_PRICE,
  LIVING_SPACE,
  NUMBER_OF_ROOMS,
  YEAR_CONSTRUCTED,
  HEATING_TYPE,
  FIRING_TYPES,
  NEU_BAU
} from "./constants";

export const isRegionSelected = (house) => (selectedRegion) => {
  return !selectedRegion || house[REGION] === selectedRegion;
}

export const isAcceptablePrice = (house) => (minPrice) => (maxPrice) => {
  return (!minPrice || parseFloat(house[PURCHASE_PRICE]) >= minPrice) &&
  (!maxPrice || parseFloat(house[PURCHASE_PRICE]) <= maxPrice)
};

export const isAcceptableSize = (house) => (minSize) => (maxSize) => {
  return (!minSize || parseFloat(house[LIVING_SPACE]) >= minSize) &&
  (!maxSize || parseFloat(house[LIVING_SPACE]) <= maxSize)
};

export const isAcceptableRoomNumbers = (house) => (minRooms) => (maxRooms) => {
  return (!minRooms || parseFloat(house[NUMBER_OF_ROOMS]) >= minRooms) &&
  (!maxRooms || parseFloat(house[NUMBER_OF_ROOMS]) <= maxRooms)
};

export const isAcceptableConstructionYears = (house) => (minYears) => (maxYears) => {
  return (!minYears || isNaN(parseInt(house[YEAR_CONSTRUCTED])) || parseInt(house[YEAR_CONSTRUCTED]) >= minYears) &&
  (!maxYears || isNaN(parseInt(house[YEAR_CONSTRUCTED])) || parseInt(house[YEAR_CONSTRUCTED]) <= maxYears)
};

export const isCentralHeatingHouse = (house) => (isCentralHeating) => {
  return !isCentralHeating || house[HEATING_TYPE].indexOf('central') > -1;
};

export const isGasHeatingHouse = (house) => (isGasHeating) => {
  return !isGasHeating || house[FIRING_TYPES].indexOf('gas') > -1;
};

export const isNewHouse = (house) => (isNew) => {
  return !isNew || house[NEU_BAU] === 'y';
};
