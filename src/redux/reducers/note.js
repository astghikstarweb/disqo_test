import types from '../types/note'

const Notepad = (state = {data: []}, action) => {
  switch (action.type) {
    case types.ADD_NOTE: {
      return {...state, isFetching: true};
    }
    case types.ADD_NOTE_SUCCESS: {
      return {...state, isFetching: false, data: action.payload.data.payload}
    }
    case types.ADD_NOTE_FAIL: {
      return {...state, isFetching: false, error: action.payload.data};
    }

    case types.FETCH_NOTE: {
      return {...state, isFetching: true};
    }
    case types.FETCH_NOTE_SUCCESS: {
      return {...state, isFetching: false, data: action.payload.data.payload}
    }
    case types.FETCH_NOTE_FAIL: {
      return {...state, isFetching: false, error: action.payload.data};
    }

    default:
      return state;
  }
};

export default Notepad;
