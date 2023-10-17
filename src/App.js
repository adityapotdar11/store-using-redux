import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./Pages/Home";
import AddProduct from "./Pages/AddProduct";
import Alerts from "./Components/Alerts";
import Product from "./Pages/Product";
import Header from "./Components/Header";
import Cart from "./Pages/Cart";

function App() {
    return (
        <Provider store={store}>
            <Fragment>
                <Router>
                    <Header />
                    <Container>
                        <Alerts />
                        <Routes>
                            <Route Component={Home} path="/" />
                            <Route Component={AddProduct} path="/add" />
                            <Route Component={Product} path="/product/:id" />
                            <Route Component={Cart} path="/cart" />
                        </Routes>
                    </Container>
                </Router>
            </Fragment>
        </Provider>
    );
}

export default App;
