import {
  FETCH_SHIFTS_REQUEST,
  FETCH_SHIFTS_SUCCESS,
  FETCH_SHIFTS_FAILURE,
  CREATE_SHIFT,
  UPDATE_SHIFT,
  DELETE_SHIFT,
} from '../actions/shiftActions';

const initialState = {
  shifts: [],
  loading: false,
  error: null,
};

const shiftReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SHIFTS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_SHIFTS_SUCCESS:
      return { ...state, loading: false, shifts: action.payload };
    case FETCH_SHIFTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case CREATE_SHIFT:
      return { ...state, shifts: [...state.shifts, action.payload] };
    case UPDATE_SHIFT:
      return {
        ...state,
        shifts: state.shifts.map((shift) =>
          shift.id === action.payload.id ? action.payload : shift
        ),
      };
    case DELETE_SHIFT:
      return {
        ...state,
        shifts: state.shifts.filter((shift) => shift.id !== action.payload),
      };
    default:
      return state;
  }
};

export default shiftReducer;