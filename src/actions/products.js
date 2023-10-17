import { v4 as uuidv4 } from "uuid";
import {
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL,
    GET_ALL_PRODUCTS,
    DELETE_PRODUCT,
    GET_SINGLE_PRODUCT,
    UPDATE_SINGLE_PRODUCT,
} from "./types";
import { setAlert } from "./alerts";

export const addProduct =
    ({ title, price, ratings, desc, image }) =>
    (dispatch) => {
        const id = uuidv4();
        try {
            dispatch({
                type: ADD_PRODUCT_SUCCESS,
                payload: { id, title, price, ratings, desc, image },
            });
            dispatch(setAlert("Product added successfully", "success"));
        } catch (error) {
            dispatch({
                type: ADD_PRODUCT_FAIL,
            });
            dispatch(setAlert("Something went wrong", "danger"));
        }
    };

export const getAllProducts = () => (dispatch) => {
    dispatch({
        type: GET_ALL_PRODUCTS,
    });
};

export const deleteProduct = (id) => (dispatch) => {
    dispatch({
        type: DELETE_PRODUCT,
        payload: id,
    });
};

export const getSingleProduct = (id) => (dispatch) => {
    dispatch({
        type: GET_SINGLE_PRODUCT,
        payload: id,
    });
};

export const updateSingleProduct =
    ({ id, title, price, ratings, desc, image }) =>
    (dispatch) => {
        dispatch({
            type: UPDATE_SINGLE_PRODUCT,
            payload: { id, title, price, ratings, desc, image },
        });
        dispatch(setAlert("Product updated successfully", "success"));
    };
