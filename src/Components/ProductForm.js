import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import PropTypes from "prop-types";

const ProductForm = ({
    submitFunc,
    chnageFunc,
    title,
    price,
    ratings,
    desc,
    image,
}) => {
    return (
        <div className="mt-2">
            <Row>
                <Col md={3}></Col>
                <Col md={6}>
                    <h1 className="text-center">Add Product</h1>
                    <form className="form" onSubmit={(e) => submitFunc(e)}>
                        <div className="mb-3">
                            <Form.Label htmlFor="title">Title*</Form.Label>
                            <Form.Control
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Enter title"
                                value={title}
                                onChange={(e) => chnageFunc(e)}
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
                                onChange={(e) => chnageFunc(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="ratings">Ratings*</Form.Label>
                            <Form.Select
                                id="ratings"
                                name="ratings"
                                value={ratings}
                                onChange={(e) => chnageFunc(e)}
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
                                onChange={(e) => chnageFunc(e)}
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
                                onChange={(e) => chnageFunc(e)}
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

ProductForm.propTypes = {
    submitFunc: PropTypes.func.isRequired,
    chnageFunc: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    ratings: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default ProductForm;
