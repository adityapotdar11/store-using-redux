import { v4 as uuid4 } from "uuid";
import { REMOVE_ALERT, SET_ALERT } from "./types";

export const setAlert = (msg, alertType) => (dispatch) => {
    const id = uuid4();
    dispatch({
        type: SET_ALERT,
        payload: { msg, alertType, id },
    });

    setTimeout(function () {
        dispatch({
            type: REMOVE_ALERT,
            payload: id,
        });
    }, 5000);
};
