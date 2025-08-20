import React from "react";
import { Button } from "react-bootstrap";

type HeaderProps = {
    onClickExcel: () => void;   // hàm callback từ Layout
};
const Header: React.FC<HeaderProps> = ({onClickExcel}) => {
  return (
    <div className="d-flex justify-content-between align-items-center px-3 py-2 border-bottom bg-light">
      {/* Logo + Title */}
      <div className="d-flex align-items-center">
        {/* //chèn logo nếu có
        <img
          src="/logo192.png" // đổi thành logo của bạn
          alt="Logo"
          style={{ width: "40px", height: "40px", marginRight: "10px" }}
        />
        */}
        <h5 className="m-0 fw-bold text-uppercase text-primary">
          Thống kê tình hình
        </h5>
      </div>

      {/* Menu Buttons */}
      <div className="d-flex gap-2 align-items-center">
        <Button size="sm" variant="outline-primary">
          CNCH
        </Button>
        <Button size="sm" variant="outline-primary">
          Cháy
        </Button>
        <Button size="sm" variant="outline-primary">
          Nổ
        </Button>
        <span className="text-secondary">|</span>
        <Button size="sm" variant="primary">
          Dash
        </Button>
        <Button size="sm" variant="outline-primary">
          Chi tiết
        </Button>
        <Button size="sm" variant="outline-primary" onClick={onClickExcel}>
          Dữ liệu
        </Button >
      </div>
    </div>
  );
};

export default Header;
