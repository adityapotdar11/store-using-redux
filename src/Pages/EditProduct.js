import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct, updateSingleProduct } from "../actions/products";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setAlert } from "../actions/alerts";
import ProductForm from "../Components/ProductForm";

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
    }, [setFormData, productDetail, getSingleProduct, id, loading]);

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
