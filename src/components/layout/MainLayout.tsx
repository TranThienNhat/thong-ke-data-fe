import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <Container fluid style={{ height: "100vh" }}>
      {/* Header */}
      <Row
        style={{ height: "60px", backgroundColor: "#0d6efd", color: "white" }}
      >
        <Col className="d-flex align-items-center px-3">
          <h5 className="m-0">🔥 Header (Logo + Menu)</h5>
        </Col>
      </Row>

      <Row style={{ height: "calc(100% - 60px)" }}>
        {/* Sidebar */}
        <Col md={2} style={{ backgroundColor: "#f8d7da" }} className="p-3">
          <h6 className="text-dark">Sidebar (Filter)</h6>
          <p className="small text-muted">Năm / Tháng / Phường</p>
        </Col>

        {/* Content */}
        <Col md={10} style={{ backgroundColor: "#e2e3e5" }} className="p-3">
          <h6 className="mb-3">Main Content (Outlet)</h6>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default MainLayout;
