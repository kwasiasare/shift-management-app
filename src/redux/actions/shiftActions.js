// src/redux/actions/shiftActions.js
export const FETCH_SHIFTS_REQUEST = 'FETCH_SHIFTS_REQUEST';
export const FETCH_SHIFTS_SUCCESS = 'FETCH_SHIFTS_SUCCESS';
export const FETCH_SHIFTS_FAILURE = 'FETCH_SHIFTS_FAILURE';
// ...other action types

export const fetchShifts = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_SHIFTS_REQUEST });
    try {
      const response = await axios.get('https://shift-funx-24.azurewebsites.net/api/HttpTrigger1');
      const shifts = response.data;
      dispatch({ type: FETCH_SHIFTS_SUCCESS, payload: shifts });
    } catch (error) {
      dispatch({ type: FETCH_SHIFTS_FAILURE, payload: error.message });
    }
  };
};

// ...other action creators for create, update, and delete