import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./../layout/Header";
import Sidebar from "./../layout/Sidebar";
import dashboard from "../../data/dashboard.json";

const MainLayout: React.FC = () => {
  const [summary, setSummary] = useState(dashboard.summary);

  return (
    <Container fluid style={{ height: "100vh", backgroundColor: "#e6ecf8" }}>
      {/* Header */}
      <Row
        style={{ height: "60px", backgroundColor: "#0d6efd", color: "white" }}
      >
        <Header />
      </Row>

      {/* Body */}
      <Row style={{ height: "calc(100% - 60px)" }}>
        {/* Sidebar */}
        <Col
          md={2}
          style={{ backgroundColor: "white" }}
          className="p-3 border-end"
        >
          <Sidebar onFilterChange={setSummary} />
        </Col>

        {/* Content */}
        <Col md={10} style={{ backgroundColor: "white" }} className="p-3">
          {/* truyền summary qua Outlet */}
          <Outlet context={{ summary }} />
        </Col>
      </Row>
    </Container>
  );
};

export default MainLayout;
