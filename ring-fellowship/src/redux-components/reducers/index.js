import {
  GET_USERS,
  GET_USERS_FAIL,
  ADD_USER,
  ADD_USER_FAIL,
  DELETE_USER,
  DELETE_USER_FAIL,
  UPDATE_USER_START,
  UPDATE_USER,
  UPDATE_USER_FAIL
} from "../actions";

const initialState = {
  users: [],
  error: null,
  editing: false
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    case GET_USERS_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case ADD_USER_FAIL:
      return {
        ...state
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      };
    case DELETE_USER_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case UPDATE_USER_START:
      return {
        ...state,
        editing: !state.editing
      };
    case UPDATE_USER:
      return {
        ...state,
        editing: false
      };
    case UPDATE_USER_FAIL:
      return {
        ...state,
        error: action.payload,
        editing: false
      };
    default:
      return state;
  }
};

export default reducers;
