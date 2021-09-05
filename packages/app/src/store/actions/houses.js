export const FETCH_HOUSES_REQUEST = 'FETCH_HOUSES_REQUEST';
export const FETCH_HOUSES_SUCCESS = 'FETCH_HOUSES_SUCCESS';
export const APPLY_HOUSES_FILTER = 'APPLY_HOUSES_FILTER';

export const applyHousesFilter = (filter) => ({
  type: APPLY_HOUSES_FILTER,
  payload: {
    filter
  }
});

export const fetchHousesRequest = (city) => ({
  type: FETCH_HOUSES_REQUEST,
  payload: { city }
});

export const fetchHousesSuccess = (houses) => ({
  type: FETCH_HOUSES_SUCCESS,
  payload: { houses }
});