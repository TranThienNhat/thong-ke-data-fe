import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./../layout/Header";
import Sidebar from "./../layout/Sidebar";

const MainLayout: React.FC = () => {
  return (
    <Container fluid style={{ height: "100vh" , backgroundColor: "e6ecf8"}}>
      {/* Header */}
      <Row
        style={{ height: "60px", backgroundColor: "#0d6efd", color: "white" }}
      >
        <Header />
      </Row>

      <Row style={{ height: "calc(100% - 60px)" }}>
        {/* Sidebar */}
       <Sidebar />

        {/* Content */}
        <Col md={10} style={{ backgroundColor: "white" }} className="p-3">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default MainLayout;
