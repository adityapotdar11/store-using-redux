import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Alert, Col, Row } from "react-bootstrap";

const Alerts = ({ alerts }) => {
    return (
        <Row>
            <Col md={3}></Col>
            <Col md={6}>
                {alerts !== null &&
                    alerts.length > 0 &&
                    alerts.map((alert) => (
                        <Alert
                            className="mt-3"
                            key={alert.id}
                            variant={alert.alertType}
                        >
                            {alert.msg}
                        </Alert>
                    ))}
            </Col>
            <Col md={3}></Col>
        </Row>
    );
};

Alerts.propTypes = {
    alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    alerts: state.alerts,
});

export default connect(mapStateToProps)(Alerts);
