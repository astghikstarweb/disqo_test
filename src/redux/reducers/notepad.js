import types from '../types/notepad'

const Notepad = (state = {data: []}, action) => {
  switch (action.type) {
    case types.ADD_NOTEPAD: {
      return {...state, isFetching: true};
    }
    case types.ADD_NOTEPAD_SUCCESS: {
      return {...state, isFetching: false, data: [...state.data, action.payload]}
    }

    case types.ADD_NOTEPAD_FAIL: {
      return {...state, isFetching: false, error: action.payload.data};
    }

    case types.REMOVE_NOTEPAD: {
      return {...state, isFetching: true};
    }
    case types.REMOVE_NOTEPAD_SUCCESS: {
      const data = state.data.filter((notepad) => { return notepad.id !== action.payload});
      return {...state, isFetching: false, data: [...data]}
    }
    case types.REMOVE_NOTEPAD_FAIL: {
      return {...state, isFetching: false};
    }

    case types.UPDATE_NOTEPAD: {
      return {...state, isFetching: true};
    }
    case types.UPDATE_NOTEPAD_SUCCESS: {
      const data = state.data.map((notepad) => {
        if (notepad.id == action.payload.id) {
          return action.payload;
        }
        return notepad;
      });
      return {...state, isFetching: false, data}
    }
    case types.UPDATE_NOTEPAD_FAIL: {
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
