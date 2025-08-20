import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./../layout/Header";
import Sidebar from "./../layout/Sidebar";
import ExcelBox from "../layout/ExcelBox";

const MainLayout: React.FC = () => {
  const [showExcel, setShowExcel] = useState(false);

  return (
    <Container fluid style={{ height: "100vh", backgroundColor: "e6ecf8" }}>
      {/* Header */}
      <Row
        style={{ height: "60px", backgroundColor: "#0d6efd", color: "white" }}
      >
        <Header onClickExcel={() => setShowExcel(!showExcel)} />
      </Row>

      <Row style={{ height: "calc(100% - 60px)" }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <Col md={10} style={{ backgroundColor: "white" }} className="p-3">
          {showExcel && <ExcelBox onClose={() => setShowExcel(false)} />}
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default MainLayout;
