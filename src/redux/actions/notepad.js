import notepadTypes from '../types/notepad';
import Service from '../service/notepad';
import {normalizeErrorResponse} from "../../util/helper";

const create = (data) => {
  return (dispatch) => {
    dispatch({type: notepadTypes.ADD_NOTEPAD});
    Service.create(data).then((res) => {
      const notes = [];
      Object.keys(res.data.files).map((key) => {
        notes.push({
          title: key,
          note: res.data.files[key].content
        });
      });
      let data = {id: res.data.id, title: res.data.description, notes: notes};
      dispatch({type: notepadTypes.ADD_NOTEPAD_SUCCESS, payload: data})
    }).catch((error) => {
      dispatch({type: notepadTypes.ADD_NOTEPAD_FAIL, payload: normalizeErrorResponse(error)})
    })
  };
};

const read = (id) => {
  return (dispatch) => {
    dispatch({type: notepadTypes.FETCH_NOTEPAD});
    Service.read(id).then((res) => {
      dispatch({type: notepadTypes.FETCH_NOTEPAD_SUCCESS, payload: res})
    }).catch((error) => {
      dispatch({type: notepadTypes.FETCH_NOTEPAD_FAIL, payload: normalizeErrorResponse(error)})
    })
  };
};

const update = (id, data) => {
  return (dispatch) => {
    dispatch({type: notepadTypes.UPDATE_NOTEPAD});
    Service.update(id, data).then((res) => {
      dispatch({type: notepadTypes.UPDATE_NOTEPAD_SUCCESS, payload: res})
    }).catch((error) => {
      dispatch({type: notepadTypes.UPDATE_NOTEPAD_FAIL, payload: normalizeErrorResponse(error)})
    })
  };
};

const remove = (id) => {
  return (dispatch) => {
    dispatch({type: notepadTypes.REMOVE_NOTEPAD});
    Service.remove(id).then((res) => {
      dispatch({type: notepadTypes.REMOVE_NOTEPAD_SUCCESS, payload: res})
    }).catch((error) => {
      dispatch({type: notepadTypes.REMOVE_NOTEPAD_FAIL, payload: normalizeErrorResponse(error)})
    })
  };
};

export default {create, read, update, remove}
