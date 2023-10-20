import React, { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { getSingleProduct } from "../actions/products";
import { connect } from "react-redux";
import Ratings from "../Components/Ratings";
import { addToCart } from "../actions/cart";

const ViewProduct = ({
    getSingleProduct,
    addToCart,
    products: { productDetail },
}) => {
    const { id } = useParams();
    useEffect(() => {
        getSingleProduct(id);
    }, [getSingleProduct, id, productDetail]);
    return (
        <div className="mt-2">
            <Row>
                <Col className="text-center">
                    <h2>Product Details</h2>
                </Col>
            </Row>
            <Row className="align-center mt-4">
                <Col md={6} className="single-product-image">
                    <img src={productDetail.image} alt={productDetail.title} />
                </Col>
                <Col md={6}>
                    <h3>{productDetail.title}</h3>
                    <hr />
                    <h5>Description:</h5>
                    <p>{productDetail.desc}</p>
                    <h4>Price: ${productDetail.price}</h4>
                    <p className="product-star">
                        <Ratings ratings={productDetail.ratings} />{" "}
                    </p>
                    <hr />
                    <div className="d-grid">
                        <Button
                            variant="warning"
                            onClick={() =>
                                addToCart({
                                    prodId: productDetail.id,
                                    title: productDetail.title,
                                    price: productDetail.price,
                                    ratings: productDetail.ratings,
                                    desc: productDetail.desc,
                                    image: productDetail.image,
                                })
                            }
                        >
                            Add to Cart
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

ViewProduct.propTypes = {
    getSingleProduct: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
    products: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    products: state.products,
});

export default connect(mapStateToProps, { getSingleProduct, addToCart })(
    ViewProduct
);
