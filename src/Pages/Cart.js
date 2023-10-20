import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { getCart, removeFromCart } from "../actions/cart";
import Ratings from "../Components/Ratings";
import { Col, Row } from "react-bootstrap";
import { Trash2 } from "react-feather";
import { connect } from "react-redux";

const Cart = ({ getCart, removeFromCart, cart }) => {
    useEffect(() => {
        getCart();
    }, [getCart]);

    return (
        <div className="mt-2">
            <Row className="mb-3">
                <Col>
                    <h4>Cart</h4>
                </Col>
            </Row>
            <Row>
                {cart.map((product) => (
                    <Col md={12} className="single-product" key={product.id}>
                        <Row>
                            <Col md={3} className="product-img-section">
                                <img
                                    className="product-image"
                                    src={product.image}
                                    alt={product.title}
                                />
                            </Col>
                            <Col md={7} className="product-info-sec">
                                <h3 className="product-name">
                                    {product.title}
                                </h3>
                                <p className="product-desc">{product.desc}</p>
                                <div className="product-star">
                                    <Ratings ratings={product.ratings} />
                                </div>
                            </Col>
                            <Col md={2} className="product-action-sec">
                                <h3 className="product-price">
                                    Price: ${product.price}
                                </h3>
                                <h5>Qty: {product.qty}</h5>
                                <div className="product-action">
                                    <span
                                        onClick={() => {
                                            removeFromCart(product.id);
                                        }}
                                    >
                                        <Trash2 className="feather" />
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

Cart.propTypes = {
    getCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    cart: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    cart: state.cart.cart,
});

export default connect(mapStateToProps, { getCart, removeFromCart })(Cart);
