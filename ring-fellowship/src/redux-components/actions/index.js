import axios from "axios";
export const GET_USERS = "GET_USERS";
export const GET_USERS_FAIL = "GET_USERS_FAIL";

export const getUsers = () => dispatch => {
  axios
    .get(`http://localhost:8000/api/users`)
    .then(res => {
      dispatch({ type: GET_USERS, payload: res.data.data });
    })
    .catch(err => {
      dispatch({ type: GET_USERS_FAIL, payload: err });
    });
};

export const ADD_USER = "ADD_USER";
export const ADD_USER_FAIL = "ADD_USER_FAIL";

export const addUser = newUser => dispatch => {
  axios
    .post(`http://localhost:8000/api/users`, newUser)
    .then(res => {
      dispatch({ type: ADD_USER, payload: newUser, res });
    })
    .catch(err => {
      dispatch({ type: ADD_USER_FAIL, payload: err });
    });
};

export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_FAIL = "DELETE_USER_FAIL";

export const deleteUser = id => dispatch => {
  axios
    .delete(`http://localhost:8000/api/users/${id}`)
    .then(res => {
      dispatch({ type: DELETE_USER, payload: id, res });
    })
    .catch(err => {
      dispatch({ type: DELETE_USER_FAIL, payload: err });
    });
};

export const UPDATE_USER_START = "UPDATE_USER_START";
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_FAIL = "UPDATE_USER_FAIL";

export const toggleEdit = () => dispatch => {
  dispatch({ type: UPDATE_USER_START });
};

export const updateUser = (id, newUser) => dispatch => {
  axios
    .put(`http://localhost:8000/api/users/${id}`, newUser)
    .then(res => {
      console.log(res);
      dispatch({ type: UPDATE_USER, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: UPDATE_USER_FAIL, payload: err });
    });
};
