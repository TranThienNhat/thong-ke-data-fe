import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import DoughnutChart from './chart/DonutChart';
import BarChart from './chart/BarChart';
import LineChart from './chart/LineChart';
import TreemapChart from './chart/TreeMapChart';
import data from '../data/dashboard.json'

const Charts: React.FC = () => {
  return (
    <>
      <Row className="mb-4">
        <Col md={4}>
          <Card className="h-100 bg-purple-light">
            <Card.Text className=" center p-2 ml-3">
              <h6 className="mb-0">Số vụ</h6>
            </Card.Text>
            <Card.Body>
              <BarChart data={data.soVuTheoThang} type="soVu" />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 bg-purple-light">
            <Card.Text className=" center p-2 ml-3">
              <h6 className="mb-0">Thiệt hại</h6>
            </Card.Text>
            <Card.Body>
              <BarChart data={data.thietHaiTheoThang} type="thietHai" />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 bg-purple-light">
            <Card.Body>
              <BarChart data={data.phanLoaiTheophuong} type="phanLoaiPhuong" />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4 ">
        <Col md={4}>
          <Card className="h-100 bg-purple-light">
            <Card.Text className=" center p-2 ml-3">
              <h6 className="mb-0">Nguyên nhân</h6>
            </Card.Text>
            <Card.Body>
              <DoughnutChart data={data.nguyenNhan} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 bg-purple-light">
            <Card.Text className=" center p-2 ml-3">
              <h6 className="mb-0">Số người chết</h6>
            </Card.Text>
            <Card.Body>
              <LineChart data={data.soNguoiChetTheoThang} type="soNguoiChet" />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
           <Card className="h-100 bg-purple-light">
            <Card.Text className=" center p-2 ml-3">
              <h6 className="mb-0">Số người bị thương</h6>
            </Card.Text>
            <Card.Body>
              <LineChart data={data.soNguoiBiThuongTheoThang} type="soNguoiBiThuong" />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Card>
            <Card.Header className="bg-light">
              <h6 className="mb-0">Phân loại cơ sở</h6>
            </Card.Header>
            <Card.Body>
              <BarChart data={data.phanLoaiCoSo} type='phanLoaiCoSo'/>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Header className="bg-light">
              <h6 className="mb-0">Phân tích theo phường</h6>
            </Card.Header>
            <Card.Body>
              <TreemapChart data={data.phanLoaiTheophuong}/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Charts;