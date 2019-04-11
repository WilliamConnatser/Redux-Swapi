import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL
} from "../actions/index";

const initialState = {
  characters: [],
  fetching: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        fetching: true
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        characters: action.payload
      }
    case FETCH_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return state;
  }
};