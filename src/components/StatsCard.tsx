import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import TotalCasesCard from "./card/TotalCasesCard";
import DeathsCard from "./card/DeathsCard";
import InjuriesCard from "./card/InjuriesCard";
import DamageCard from "./card/DamageCard";
import ForestAreaCard from "./card/ForestAreaCard";

interface Summary {
  values: number;
  soNguoiChet: number;
  soNguoiBiThuong: number;
  thietHaiTaiSan: number;
  dienTichRung: number;
}

interface Props {
  summary?: Summary;
}

const StatsCards: React.FC<Props> = ({ summary }) => {
  if (!summary) {
    return <div>Đang tải dữ liệu...</div>;
  }

  return (
    <Row className="mb-4">
      <Col md={2}>
        <Card className="h-100">
          <Card.Body>
            <TotalCasesCard value={summary.values} />
          </Card.Body>
        </Card>
      </Col>
      <Col md={2}>
        <Card className="h-100">
          <Card.Body>
            <DeathsCard value={summary.soNguoiChet} />
          </Card.Body>
        </Card>
      </Col>
      <Col md={2}>
        <Card className="h-100">
          <Card.Body>
            <InjuriesCard value={summary.soNguoiBiThuong} />
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="h-100">
          <Card.Body>
            <DamageCard value={summary.thietHaiTaiSan} />
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="h-100">
          <Card.Body>
            <ForestAreaCard value={summary.dienTichRung} />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default StatsCards;
