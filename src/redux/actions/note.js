import noteTypes from '../types/note';
import Service from '../service/note';
import {normalizeErrorResponse} from "../../util/helper";


const create = (data) => {
  return (dispatch) => {
    dispatch({type: noteTypes.ADD_NOTE});
    Service.create(data).then((res) => {
      dispatch({type: noteTypes.ADD_NOTE_SUCCESS, payload: res})
    }).catch((error) => {
      dispatch({type: noteTypes.ADD_NOTE_FAIL, payload: normalizeErrorResponse(error)})
    })
  };
};

const read = (id) => {
  return (dispatch) => {
    dispatch({type: noteTypes.FETCH_NOTE});
    Service.read(id).then((res) => {
      dispatch({type: noteTypes.FETCH_NOTE_SUCCESS, payload: res})
    }).catch((error) => {
      dispatch({type: noteTypes.FETCH_NOTE_FAIL, payload: normalizeErrorResponse(error)})
    })
  };
};

const update = (id, data) => {
  return (dispatch) => {
    dispatch({type: noteTypes.UPDATE_NOTE});
    Service.update(id, data).then((res) => {
      dispatch({type: noteTypes.UPDATE_NOTE_SUCCESS, payload: res})
    }).catch((error) => {
      dispatch({type: noteTypes.UPDATE_NOTE_FAIL, payload: normalizeErrorResponse(error)})
    })
  };
};

const remove = (id) => {
  return (dispatch) => {
    dispatch({type: noteTypes.REMOVE_NOTE});
    Service.remove(id).then((res) => {
      dispatch({type: noteTypes.REMOVE_NOTE_SUCCESS, payload: res})
    }).catch((error) => {
      dispatch({type: noteTypes.REMOVE_NOTE_FAIL, payload: normalizeErrorResponse(error)})
    })
  };
};

export default {create, read, update, remove}
