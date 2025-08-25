import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import DoughnutChart from "./chart/DonutChart";
import BarChart from "./chart/BarChart";
import LineChart from "./chart/LineChart";
import TreemapChart from "./chart/TreeMapChart";

const Charts: React.FC = () => { 
  const { dashboardData } = useOutletContext<{ dashboardData: any | null }>();

  const soVuTheoThang = dashboardData?.soVuTheoThang ?? [];
  const nguyenNhan = dashboardData?.nguyenNhan ?? [];
  const thietHaiTheoThang = dashboardData?.thietHaiTheoThang ?? [];
  const soNguoiChetTheoThang = dashboardData?.soNguoiChetTheoThang ?? [];
  const soNguoiBiThuongTheoThang = dashboardData?.soNguoiBiThuongTheoThang ?? [];
  const phanLoaiTheophuong = dashboardData?.phanLoaiTheophuong ?? [];
  const phanLoaiCoSo = dashboardData?.phanLoaiCoSo ?? [];

  return (
    <>
      <Row className="g-3 mb-4 align-items-stretch">
        <Col md={5} className="d-flex flex-column gap-3">
          <Card className="w-100 h-100">
            <Card.Text className="center p-2 ml-3">
              <h6 className="mb-0 text-center">Số vụ</h6>
            </Card.Text>
            <Card.Body>
              <BarChart data={soVuTheoThang} type="soVu" />
            </Card.Body>
          </Card>

          <Card className="w-100 h-100">
            <Card.Text className="center p-2 ml-3">
              <h6 className="mb-0 text-center">Nguyên nhân</h6>
            </Card.Text>
            <Card.Body>
              <DoughnutChart data={nguyenNhan} />
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="w-100 h-100">
            <Card.Text className="center p-2 ml-3">
              <h6 className="mb-0 text-center">Thiệt hại</h6>
            </Card.Text>
            <Card.Body>
              <BarChart data={thietHaiTheoThang} type="thietHai" />
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="w-100 h-100">
            <Card.Text className="center p-2 ml-3">
              <h6 className="mb-0 text-center">Phân tích theo phường</h6>
            </Card.Text>
            <Card.Body>
              <BarChart data={phanLoaiTheophuong} type="phanLoaiPhuong" />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="g-3 align-items-stretch">
        <Col md={4}>
          <Card className="w-100 h-100">
            <Card.Text className="center p-2 ml-3">
              <h6 className="mb-0 text-center">Số người chết</h6>
            </Card.Text>
            <Card.Body>
              <LineChart data={soNguoiChetTheoThang} type="soNguoiChet" />
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="w-100 h-100">
            <Card.Text className="center p-2 ml-3">
              <h6 className="mb-0 text-center">Số người bị thương</h6>
            </Card.Text>
            <Card.Body>
              <LineChart data={soNguoiBiThuongTheoThang} type="soNguoiBiThuong" />
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="w-100 h-100">
            <Card.Text className="center p-2 ml-3">
              <h6 className="mb-0 text-center">Phân loại cơ sở</h6>
            </Card.Text>
            <Card.Body>
              <BarChart data={phanLoaiCoSo} type="phanLoaiCoSo" />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Nếu bạn cần treemap, dùng đúng nguồn data đã lấy */}
      <Row className="g-3 mt-3">
        <Col>
          <Card className="w-100 h-100">
            <Card.Text className="center p-2 ml-3">
              <h6 className="mb-0 text-center">Treemap theo phường</h6>
            </Card.Text>
            <Card.Body>
              <TreemapChart data={phanLoaiTheophuong} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Charts;
