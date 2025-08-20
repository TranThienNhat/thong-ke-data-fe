import React from "react";
import { Col } from "react-bootstrap";
const Sidebar: React.FC = () => {
    return (
        <Col md={2} style={{ backgroundColor: "#f8d7da" }} className="p-3">
            <h6 className="text-dark">Sidebar (Filter)</h6>
            <p className="small text-muted">Năm / Tháng / Phường</p>
        </Col>
    );
}
export default Sidebar;