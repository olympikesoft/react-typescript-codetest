
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, fakeApi } from "../../../constants";

export const fetchUsers = () => async (dispatch: any) => {
    dispatch({ type: FETCH_USERS_REQUEST });
    try {
      const response = await fetch(`${fakeApi}/users`);
      const data = await response.json();
      dispatch({ type: FETCH_USERS_SUCCESS, payload: data });
    } catch (error) {
      console.error('Failed to get users:', error);
      dispatch({ type: FETCH_USERS_FAILURE, payload: error });
    }
  };
  