import axios from "axios";
import {
  GET_FAILLED,
  GET_REQUEST,
  GET_SUCCESS,
} from "../Constants/UserConstants";

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: GET_REQUEST });
    const res = await axios.get("http://localhost:5000/users");
    dispatch({ type: GET_SUCCESS, paylod: res.data });
  } catch (error) {
    dispatch({ type: GET_FAILLED, paylod: error.message });
  }
};
