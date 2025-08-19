import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import DoughnutChart from './chart/DonutChart';

const Charts: React.FC = () => {
  return (
    <>
      <Row className="mb-4">
        <Col md={4}>
          <Card className="h-100">
            <Card.Header className="bg-light">
              <h6 className="mb-0">Số vụ</h6>
            </Card.Header>
            <Card.Body>
              {/* <BarChart title="Số vụ" data={[1, 2, 0]} /> */}
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100">
            <Card.Header className="bg-light">
              <h6 className="mb-0">Thiệt hại</h6>
            </Card.Header>
            <Card.Body>
              {/* <BarChart title="Thiệt hại" data={[0, 6.25, 0]} /> */}
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100">
            <Card.Header className="bg-light">
              <h6 className="mb-0">Phân tích theo địa điểm</h6>
            </Card.Header>
            <Card.Body>
              {/* <LocationAnalysis /> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={4}>
          <Card className="h-100">
            <Card.Text className="bg-light center p-2 ml-3">
              <h6 className="mb-0">Nguyên nhân</h6>
            </Card.Text>
            <Card.Body>
              <DoughnutChart title="Nguyên nhân" />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100">
            <Card.Header className="bg-light">
              <h6 className="mb-0">Số người chết</h6>
            </Card.Header>
            <Card.Body>
              {/* <LineChart title="Số người chết" /> */}
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100">
            <Card.Header className="bg-light">
              <h6 className="mb-0">Số người bị thương</h6>
            </Card.Header>
            <Card.Body>
              {/* <EmptyChart message="Không có dữ liệu" /> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card>
            <Card.Header className="bg-light">
              <h6 className="mb-0">Phân loại cơ sở</h6>
            </Card.Header>
            <Card.Body>
              {/* <FacilityClassification /> */}
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header className="bg-light">
              <h6 className="mb-0">Phân tích theo phường</h6>
            </Card.Header>
            <Card.Body>
              {/* <TreemapChart /> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Charts;