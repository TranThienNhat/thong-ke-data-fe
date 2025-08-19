import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import TotalCasesCard from "./card/TotalCasesCard";
import DeathsCard from "./card/DeathsCard";
import InjuriesCard from "./card/InjuriesCard";
import DamageCard from "./card/DamageCard";
import ForestAreaCard from "./card/ForestAreaCard";

const sampleData = [
  { content: "Long Bình", values: 3 },
  { content: "Thảo Điền", values: 2 },
  { content: "An Khánh", values: 2 },
  { content: "Trường Thọ", values: 1 },
  { content: "Bình Trung Tây", values: 1 },
  { content: "Thạnh Mỹ Lợi", values: 1 },
  { content: "Linh Chiểu", values: 1 },
];
const sampleData2 = [
  { content: "Người chết", values: 1 },
  { content: "Người bị thương", values: 0 },
  { content: "Thiệt hại", values: 6.25 },
  { content: "Diện tích rừng", values: 0 },
];

const StatsCards: React.FC = () => {
  return (
    <Row className="mb-4">
      <Col md={2}>
        <Card className="h-100 ">
          <Card.Body>
            <TotalCasesCard data={sampleData} />
          </Card.Body>
        </Card>
      </Col>
      <Col md={2}>
        <Card className="h-100">
          <Card.Body>
            <DeathsCard data={sampleData2} />
          </Card.Body>
        </Card>
      </Col>
      <Col md={2}>
        <Card className="h-100">
          <Card.Body>
            <InjuriesCard data={sampleData2} />
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="h-100">
          <Card.Body>
            <DamageCard data={sampleData2} />
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="h-100">
          <Card.Body>
            <ForestAreaCard data={sampleData2} />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default StatsCards;
