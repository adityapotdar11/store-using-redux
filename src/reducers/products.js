import {
    ADD_PRODUCT_FAIL,
    ADD_PRODUCT_SUCCESS,
    DELETE_PRODUCT,
    GET_ALL_PRODUCTS,
    GET_SINGLE_PRODUCT,
    UPDATE_SINGLE_PRODUCT,
} from "../actions/types";

const initialState = {
    products: [],
    productDetail: null,
    loading: true,
};

export default function products(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                products: [...state.products, payload],
                loading: false,
            };
        case ADD_PRODUCT_FAIL:
        case GET_ALL_PRODUCTS:
            return { ...state, loading: false };
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(
                    (product) => product.id !== payload
                ),
                loading: false,
            };
        case GET_SINGLE_PRODUCT:
            let product = {};
            let productFake = [];
            productFake = state.products.map((prod) => {
                let temp = Object.assign({}, prod);
                if (prod.id === payload) {
                    product = prod;
                }
                return temp;
            });
            if (productFake) {
            }
            return {
                ...state,
                productDetail: product,
                loading: false,
            };
        case UPDATE_SINGLE_PRODUCT:
            let products = [];
            products = state.products.map((prod) => {
                let temp = Object.assign({}, prod);
                if (prod.id === payload.id) {
                    temp = payload;
                }
                return temp;
            });
            return {
                ...state,
                products: products,
                productDetail: payload,
                loading: false,
            };
        default:
            return state;
    }
}
