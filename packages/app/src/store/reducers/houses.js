import { FETCH_HOUSES_SUCCESS, APPLY_HOUSES_FILTER } from "../actions/houses";
import {
  isRegionSelected,
  isAcceptablePrice,
  isAcceptableSize,
  isAcceptableRoomNumbers,
  isAcceptableConstructionYears,
  isCentralHeatingHouse,
  isGasHeatingHouse,
  isNewHouse
} from "../../utils/filters";

const  initialState = {
  houses: [],
  filtered: []
};

const applyFilter = ({ houses }, filter) => {
  const {
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    minRooms,
    maxRooms,
    minYears,
    maxYears,
    isCentralHeating,
    isGasHeating,
    isNew,
    selectedRegion
  } = filter;

  const filtered = houses.filter(house => {
    return isRegionSelected(house)(selectedRegion) &&
      isAcceptablePrice(house)(minPrice)(maxPrice) &&
      isAcceptableSize(house)(minSize)(maxSize) &&
      isAcceptableRoomNumbers(house)(minRooms)(maxRooms) &&
      isAcceptableConstructionYears(house)(minYears)(maxYears) &&
      isCentralHeatingHouse(house)(isCentralHeating) && 
      isGasHeatingHouse(house)(isGasHeating) && 
      isNewHouse(house)(isNew)
  });

  return filtered;
};

export const housesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOUSES_SUCCESS:
      return {
        ...state,
        houses: action.payload.houses
      };
    case APPLY_HOUSES_FILTER:
      const { filter } = action.payload;
      
      return {
        ...state,
        filtered: applyFilter(state, filter)
      };
    default:
      return state;
  }
};
