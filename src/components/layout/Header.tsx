import React from "react";
import { Col } from "react-bootstrap";
const Header: React.FC = () => {
    return (
        <Col md={12} style={{ height: "60px", backgroundColor: "#0d6efd", color: "white" }} className="d-flex align-items-center px-3">
            <h5 className="m-0">🔥 Header (Logo ++ Menu)</h5>
        </Col>
    );
}
export default Header;