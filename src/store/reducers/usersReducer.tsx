import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "../../constants";
import { Action } from "../../interfaces";

const initialState = {
    users: [],
    loading: false,
    error: null,
};

const usersReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return { ...state, loading: true };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            };
        case FETCH_USERS_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

export default usersReducer;
