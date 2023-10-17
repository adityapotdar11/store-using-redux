import { ADD_TO_CART, GET_CART } from "./types";
import { v4 as uuidv4 } from "uuid";
import { setAlert } from "./alerts";

export const addToCart =
    ({ prodId, title, price, ratings, desc, image, qty = 1 }) =>
    (dispatch) => {
        const id = uuidv4();
        dispatch({
            type: ADD_TO_CART,
            payload: { id, prodId, title, price, ratings, desc, image, qty },
        });
        dispatch(setAlert("Product added to cart", "success"));
    };

export const getCart = () => (dispatch) => {
    dispatch({
        type: GET_CART,
    });
};
