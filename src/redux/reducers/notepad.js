import types from '../types/notepad'

const Notepad = (state = {data: []}, action) => {
  switch (action.type) {
    case types.ADD_NOTEPAD: {
      return {...state, isFetching: true};
    }
    case types.ADD_NOTEPAD_SUCCESS: {
      return {...state, isFetching: false, data: action.payload.data.payload}
    }
    case types.ADD_NOTEPAD_FAIL: {
      return {...state, isFetching: false, error: action.payload.data};
    }

    case types.FETCH_NOTEPAD: {
      return {...state, isFetching: true};
    }
    case types.FETCH_NOTEPAD_SUCCESS: {
      return {...state, isFetching: false, data: action.payload.data.payload}
    }
    case types.FETCH_NOTEPAD_FAIL: {
      return {...state, isFetching: false, error: action.payload.data};
    }

    default:
      return state;
  }
};

export default Notepad;
