import axios from "axios";
import * as actions from "../actions";

export async function getUsers(page, dispatch) {
  if (page) {
    await axios
      .get(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
      )
      .then((response) => {
        dispatch({
          type: actions.ADD_USERS,
          users: response.data.users,
          isNext: response.data.links.next_url,
        });
        dispatch({
          type: actions.REMOVE_LOADING,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return null;
}

export async function getPositions() {
  let positions = [];
  await axios
    .get(`https://frontend-test-assignment-api.abz.agency/api/v1/positions`)
    .then((response) => {
      positions = response.data.positions;
      return positions;
    })
    .catch((error) => {
      console.log(error);
    });

  return positions;
}

export async function getToken() {
  let token = null;
  await axios
    .get(`https://frontend-test-assignment-api.abz.agency/api/v1/token`)
    .then((response) => {
      token = response.data.token;
      return token;
    })
    .catch((error) => {
      console.log(error);
    });

  return token;
}

export async function createUser(
  formData,
  token,
  dispatch,
  setName,
  setEmail,
  setFile,
  setPhone,
  setPosition
) {
  axios
    .post(
      "https://frontend-test-assignment-api.abz.agency/api/v1/users",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Token: token,
        },
      }
    )
    .then((response) => {
      dispatch({
        type: actions.REMOVE_USERS,
      });
      getUsers(1, dispatch);
      setName("");
      setEmail("");
      setFile("");
      setPhone("");
      setPosition(1);
    })
    .catch((error) => {
      console.log(error);
    });

  return token;
}
