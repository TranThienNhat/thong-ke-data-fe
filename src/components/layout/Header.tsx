import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

type HeaderProps = {
    onClickExcel: () => void;   // hàm callback từ Layout
};
const Header: React.FC<HeaderProps> = ({ onClickExcel }) => {
    return (
        <div className="d-flex justify-content-between align-items-center px-3 py-2 border-bottom text-white">
            {/* Logo + Title */}
            <div className="d-flex align-items-center">
                {/* Logo (nếu có) */}
                {/* <img
          src="/logo192.png"
          alt="Logo"
          style={{ width: "40px", height: "40px", marginRight: "10px" }}
        /> */}
                <h5 className="m-0 fw-bold text-uppercase" style={{ color: "#000" }}>
                    Thống kê tình hình{" "}
                    <span className="text-danger">Cháy, Nổ, CNCH</span>
                </h5>
            </div>
            {/* Filter Buttons */}
            <div
                style={{
                    backgroundColor: '#fff',
                    border: '1px solid #000',
                    padding: '3px',
                    display: 'inline-block',
                    borderRadius: '6px',
                    fontWeight: 500,
                    color: '#000',
                    fontSize: '14px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    margin: '0 10px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    minWidth: '400px',
                }}
            >
                <ButtonGroup className="d-flex gap-2 align-items-center" style={{ width: '100%' }}>
                    <Button variant="outline-primary" style={{ backgroundColor: "#e6f0ff", borderColor: "#000000ff", fontWeight: 500, flex: 1 }}>CNCH</Button>
                    <Button variant="outline-primary" style={{ backgroundColor: "#e6f0ff", borderColor: "#000000ff", fontWeight: 500, flex: 1 }}>CHÁY</Button>
                    <Button variant="outline-primary" style={{ backgroundColor: "#e6f0ff", borderColor: "#000000ff", fontWeight: 500, flex: 1 }}>NỔ</Button>
                </ButtonGroup>
            </div>



            {/* Menu Buttons */}
            <div className="d-flex gap-2 align-items-center">
                <Button variant="primary">
                    Dash
                </Button>
                <Button variant="primary" >
                    Chi tiết
                </Button>
                <Button variant="primary" onClick={onClickExcel} >
                    Dữ liệu
                </Button>
            </div>
        </div>
    );
};

export default Header;