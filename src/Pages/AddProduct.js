import React, { useState } from "react";
import { setAlert } from "../actions/alerts";
import { addProduct } from "../actions/products";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProductForm from "../Components/ProductForm";

const AddProduct = ({ setAlert, addProduct }) => {
    const initialState = {
        title: "",
        price: 0,
        ratings: "",
        desc: "",
        image: "",
    };
    const [formData, setFormData] = useState(initialState);

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
        addProduct({ title, price, ratings, desc, image });
        setFormData(initialState);
    };

    return (
        <ProductForm
            submitFunc={onSubmit}
            chnageFunc={onChange}
            title={title}
            price={price}
            ratings={ratings}
            desc={desc}
            image={image}
        />
    );
};

AddProduct.propTypes = {
    setAlert: PropTypes.func.isRequired,
    addProduct: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, addProduct })(AddProduct);
