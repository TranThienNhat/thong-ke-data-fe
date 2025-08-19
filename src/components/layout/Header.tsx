import React from "react";
import { Button, Col } from "react-bootstrap";
type HeaderProps = {
    onClickExcel: () => void;   // hàm callback từ Layout
};

const Header: React.FC<HeaderProps> = ({ onClickExcel }) => {
    return (
        <Col md={12} style={{ height: "60px", backgroundColor: "#0d6efd", color: "white" }} className="d-flex align-items-center px-3">
            <h5 className="m-0">🔥 Header (Logo ++ Menu)</h5>
            <Button type="button" className="btn btn-success" onClick={onClickExcel}
            >Dữ liệu</Button>
        </Col>
    );
}
export default Header;