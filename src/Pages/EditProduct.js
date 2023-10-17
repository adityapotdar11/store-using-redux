import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct, updateSingleProduct } from "../actions/products";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Col, Row, Form, Button } from "react-bootstrap";
import { setAlert } from "../actions/alerts";

const EditProduct = ({
    setAlert,
    getSingleProduct,
    updateSingleProduct,
    product: { productDetail, loading },
}) => {
    const { id } = useParams();
    const initialState = {
        title: "",
        price: 0,
        ratings: "",
        desc: "",
        image: "",
    };
    const [formData, setFormData] = useState(initialState);
    useEffect(() => {
        getSingleProduct(id);
        setFormData({
            title:
                loading || !productDetail || !productDetail.title
                    ? ""
                    : productDetail.title,
            price:
                loading || !productDetail || !productDetail.price
                    ? ""
                    : productDetail.price,
            ratings:
                loading || !productDetail || !productDetail.ratings
                    ? ""
                    : productDetail.ratings,
            desc:
                loading || !productDetail || !productDetail.desc
                    ? ""
                    : productDetail.desc,
            image:
                loading || !productDetail || !productDetail.image
                    ? ""
                    : productDetail.image,
        });
    }, [getSingleProduct, productDetail, id, loading]);

    const { title, price, ratings, desc, image } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        let errorCount = 0;
        if (title === "") {
            setAlert("Title is required", "danger");
            errorCount++;
        }
        if (price === "" || Number(price) === 0) {
            setAlert("Price is required", "danger");
            errorCount++;
        }
        if (ratings === "") {
            setAlert("Ratings is required", "danger");
            errorCount++;
        }
        if (desc === "") {
            setAlert("Description is required", "danger");
            errorCount++;
        }
        if (image === "") {
            setAlert("Image is required", "danger");
            errorCount++;
        }
        if (errorCount !== 0) {
            return 0;
        }
        updateSingleProduct({ id, title, price, ratings, desc, image });
    };

    return (
        <div className="mt-2">
            <Row>
                <Col md={3}></Col>
                <Col md={6}>
                    <h1 className="text-center">Edit Product</h1>
                    <form className="form" onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <Form.Label htmlFor="title">Title*</Form.Label>
                            <Form.Control
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Enter title"
                                value={title}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="price">Price*</Form.Label>
                            <Form.Control
                                type="number"
                                id="price"
                                name="price"
                                min={0}
                                placeholder="Enter price"
                                value={price}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="ratings">Ratings*</Form.Label>
                            <Form.Select
                                id="ratings"
                                name="ratings"
                                value={ratings}
                                onChange={(e) => onChange(e)}
                            >
                                <option>Select ratings</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Form.Select>
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="desc">Description*</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                id="desc"
                                name="desc"
                                placeholder="Enter description"
                                value={desc}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="image">Image URL*</Form.Label>
                            <Form.Control
                                type="text"
                                id="image"
                                name="image"
                                placeholder="Enter image URL"
                                value={image}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div className="d-grid mb-5">
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </form>
                </Col>
                <Col md={3}></Col>
            </Row>
        </div>
    );
};
EditProduct.propType = {
    getSingleProduct: PropTypes.func.isRequired,
    updateSingleProduct: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired,
    setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    product: state.products,
});
export default connect(mapStateToProps, {
    getSingleProduct,
    setAlert,
    updateSingleProduct,
})(EditProduct);
