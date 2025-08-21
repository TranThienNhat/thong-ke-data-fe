import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import DoughnutChart from './chart/DonutChart';
import BarChart from './chart/BarChart';
import LineChart from './chart/LineChart';
import TreemapChart from './chart/TreeMapChart';

interface ChartProps {
  data: {
    soVuTheoThang: { month: number; values: number }[]; // mảng nhiều tháng
    nguyenNhan: { content: string; values: number }[];
    thietHaiTheoThang: { month: number; values: number }[];
    soNguoiChetTheoThang: { month: number; values: number }[];
    soNguoiBiThuongTheoThang: { month: number; values: number }[];
    phanLoaiTheophuong: { content: string; values: number }[];
    phanLoaiCoSo: { content: string; values: number }[];
  }
}

const Charts: React.FC<ChartProps> = ({ data }) => {
  return (
    <>
      <Row className="g-3 mb-4 align-items-stretch" >
        <Col md={5} className="d-flex flex-column gap-3" >
          <div style={{ flex: 1, minHeight: 0 }}>
            <Card className=" bg-purple-light w-100 h-100">
              <Card.Text className=" center p-2 ml-3">
                <h6 className="mb-0">Số vụ</h6>
              </Card.Text>
              <Card.Body >
                <BarChart data={data.soVuTheoThang} type="soVu" />
              </Card.Body>
            </Card>
          </div>
          <div style={{ flex: 2, minHeight: 0 }}>
            <Card className=" bg-purple-light w-100 h-100">
              <Card.Text className=" center p-2 ml-3">
                <h6 className="mb-0">Nguyên nhân</h6>
              </Card.Text>
              <Card.Body>
                <DoughnutChart data={data.nguyenNhan} />
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col md={4} className="d-flex flex-column gap-3">
          <div style={{ flex: 1, minHeight: 0 }} >
            <Card className=" bg-purple-light w-100 h-100 " >
              <Card.Text className=" center p-2 ml-3">
                <h6 className="mb-0">Thiệt hại</h6>
              </Card.Text>
              <Card.Body>
                <BarChart data={data.thietHaiTheoThang} type="thietHai" />
              </Card.Body>
            </Card>
          </div>
          <div style={{ flex: 1, minHeight: 0 }}>
            <Card className=" bg-purple-light w-100 h-100">
              <Card.Text className=" center p-2 ml-3">
                <h6 className="mb-0">Số người chết</h6>
              </Card.Text>
              <Card.Body>
                <LineChart data={data.soNguoiChetTheoThang} type="soNguoiChet" />
              </Card.Body>
            </Card>
          </div>
          <div style={{ flex: 1, minHeight: 0 }}>
            <Card className=" bg-purple-light w-100 h-100">
              <Card.Text className=" center p-2 ml-3">
                <h6 className="mb-0">Số người bị thương</h6>
              </Card.Text>
              <Card.Body>
                <LineChart data={data.soNguoiBiThuongTheoThang} type="soNguoiBiThuong" />
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col md={3} className="d-flex" >
          <Card className=" bg-purple-light w-100 h-100" style={{ flex: 1 }}>
            <Card.Body>
              <BarChart data={data.phanLoaiTheophuong} type="phanLoaiPhuong" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className=" bg-purple-light w-100 h-100">
            <Card.Text className=" center p-2 ml-3">
              <h6 className="mb-0">Phân loại cơ sở</h6>
            </Card.Text>
            <Card.Body>
              <BarChart data={data.phanLoaiCoSo} type='phanLoaiCoSo' />
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card className="w-100 h-100">
            <Card.Text className=" center p-2 ml-3">
              <h6 className="mb-0 text-center">Phân tích theo phường</h6>
            </Card.Text>
            <Card.Body>
              <TreemapChart data={data.phanLoaiTheophuong} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Charts;