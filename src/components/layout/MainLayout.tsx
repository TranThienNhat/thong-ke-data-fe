import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./../layout/Header";
import Sidebar from "./../layout/Sidebar";
import ExcelBox from "../layout/ExcelBox";

const MainLayout: React.FC = () => {
  const [summary, setSummary] = useState<any | undefined>(undefined);
  const [showExcel, setShowExcel] = useState(false);

  return (
<Container
  fluid
  className="hide-scrollbar bg-purple-light"
  style={{ height: "100vh", overflowY: "auto" }}
>      <Row className="h-100">
        {/* Sidebar */}
        <Col md={2} className="border-end p-0">
          <Sidebar onFilterChange={setSummary} />
        </Col>  

        {/* Main Content: Header + Outlet */}
        <Col md={10} className="d-flex flex-column p-0">
          {/* Header */}
          <div style={{ height: "60px", color: "#e6ecf8", marginLeft: "100px" }} className="bg-purple-light" >
            <Header onClickExcel={() => setShowExcel(!showExcel)} />
          </div>

          {/* Content */}
          <div className="flex-grow-1 p-3" style={{ backgroundColor: "#fff", overflowY: "auto", marginLeft: "10px"  }}>
            {showExcel && <ExcelBox onClose={() => setShowExcel(false)} />}
            <Outlet context={{ summary}} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainLayout;