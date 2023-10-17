import React from "react";
import { Col, Row } from "react-bootstrap";
import Ratings from "../Components/Ratings";
import { Trash2 } from "react-feather";

const Cart = () => {
    return (
        <div className="mt-2">
            <Row className="mb-3">
                <Col>
                    <h4>Products</h4>
                </Col>
            </Row>
            <Row>
                <Col md={12} className="single-product">
                    <Row>
                        <Col md={3} className="product-img-section">
                            <img
                                className="product-image"
                                src="https://img.freepik.com/free-photo/hard-drive-components-laptop_23-2149417054.jpg"
                                alt="{product.title}"
                            />
                        </Col>
                        <Col md={7} className="product-info-sec">
                            <h3 className="product-name">Hard Drive</h3>
                            <p className="product-desc">Fast</p>
                            <div className="product-star">
                                <Ratings ratings={5} />
                            </div>
                        </Col>
                        <Col md={2} className="product-action-sec">
                            <h3 className="product-price">Price: $100</h3>
                            <div className="product-action">
                                <span>
                                    <Trash2 className="feather" />
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Cart;
