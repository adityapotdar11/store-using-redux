import { combineReducers } from "@reduxjs/toolkit";
import alerts from "./alerts";
import products from "./products";
import cart from "./cart";

export default combineReducers({
    alerts,
    products,
    cart,
});
