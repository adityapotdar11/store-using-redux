import React, { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Edit2, Eye, Trash2 } from "react-feather";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllProducts, deleteProduct } from "../actions/products";
import Ratings from "../Components/Ratings";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../actions/cart";
import { ReactComponent as Box } from "../assets/images/box.svg";

const Home = ({ getAllProducts, deleteProduct, addToCart, products }) => {
    useEffect(() => {
        getAllProducts();
    }, [getAllProducts]);

    const navigate = useNavigate();

    const editSingleProduct = (id) => {
        navigate("/edit-product/" + id);
    };

    const viewSingleProduct = (id) => {
        navigate("/product/" + id);
    };

    return (
        <div className="mt-2">
            <Row className="mb-3">
                <Col>
                    <h4 className="product-heading">
                        <Box /> Products
                    </h4>
                </Col>
            </Row>
            <Row>
                {products.map((product) => (
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
                                <Button
                                    variant="warning"
                                    onClick={() =>
                                        addToCart({
                                            prodId: product.id,
                                            title: product.title,
                                            price: product.price,
                                            ratings: product.ratings,
                                            desc: product.desc,
                                            image: product.image,
                                        })
                                    }
                                >
                                    Add to Cart
                                </Button>
                                <div className="product-action">
                                    <span
                                        onClick={() =>
                                            viewSingleProduct(product.id)
                                        }
                                    >
                                        <Eye className="feather" />
                                    </span>
                                    <span>
                                        <Edit2
                                            className="feather"
                                            onClick={() =>
                                                editSingleProduct(product.id)
                                            }
                                        />
                                    </span>

                                    <span
                                        onClick={() =>
                                            deleteProduct(product.id)
                                        }
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

Home.propTypes = {
    getAllProducts: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    products: state.products.products,
});

export default connect(mapStateToProps, {
    getAllProducts,
    deleteProduct,
    addToCart,
})(Home);
