import { ADD_TO_CART, GET_CART, REMOVE_FROM_CART } from "../actions/types";

const initialState = {
    cart: [],
    loading: true,
};

export default function cart(state = initialState, action) {
    const { type, payload } = action;
    let cart = [];
    let flag = false;
    switch (type) {
        case ADD_TO_CART:
            cart = state.cart.map((prod) => {
                let temp = Object.assign({}, prod);
                if (prod.prodId === payload.prodId) {
                    payload.id = temp.id;
                    payload.qty += temp.qty;
                    temp = payload;
                    flag = true;
                }
                return temp;
            });
            if (flag === false) {
                cart = [...cart, payload];
            }
            return {
                cart: cart,
                loading: false,
            };
        case GET_CART:
            return { ...state, loading: false };
        case REMOVE_FROM_CART:
            return {
                cart: state.cart.filter((product) => product.id !== payload),
                loading: false,
            };
        default:
            return state;
    }
}
