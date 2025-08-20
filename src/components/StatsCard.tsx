import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import TotalCasesCard from "./card/TotalCasesCard";
import DeathsCard from "./card/DeathsCard";
import InjuriesCard from "./card/InjuriesCard";
import DamageCard from "./card/DamageCard";
import ForestAreaCard from "./card/ForestAreaCard";
import { color } from "chart.js/helpers";

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
      <Col>
        <Card className="shadow-sm" style={{ backgroundColor: "#3e4e58" }}>
          <Card.Body className="py-2 px-3"> {/* giảm padding */}
            <div className="d-flex flex-column">
              <span className="text-center text-white small mb-1 text-truncate">
                Số vụ
              </span>
              <strong
                className="text-white text-center fw-bold lh-1"                 // line-height thấp
                style={{ fontSize: "clamp(16px, 3dvh, 22px)" }}     // co theo màn hình
              >
                {summary.values.toLocaleString("vi-VN")}
              </strong>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="shadow-sm" style={{ backgroundColor: "#3e4e58" }}>
          <Card.Body className="py-2 px-3"> {/* giảm padding */}
            <div className="d-flex flex-column">
              <span className="text-center text-white small mb-1 text-truncate">
                Số người chết
              </span>
              <strong
                className="text-white text-center fw-bold lh-1"                 // line-height thấp
                style={{ fontSize: "clamp(16px, 3dvh, 22px)" }}     // co theo màn hình
              >
                {summary.soNguoiChet.toLocaleString("vi-VN")}
              </strong>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col >
        <Card className="shadow-sm" style={{ backgroundColor: "#3e4e58" }}>
          <Card.Body className="py-2 px-3"> {/* giảm padding */}
            <div className="d-flex flex-column">
              <span className="text-center text-white small mb-1 text-truncate">
                Số người bị thương
              </span>
              <strong
                className="text-white text-center fw-bold lh-1"                 // line-height thấp
                style={{ fontSize: "clamp(16px, 3dvh, 22px)" }}     // co theo màn hình
              >
                {summary.soNguoiBiThuong.toLocaleString("vi-VN")}
              </strong>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col >
        <Card className="shadow-sm" style={{ backgroundColor: "#3e4e58" }}>
          <Card.Body className="py-2 px-3"> {/* giảm padding */}
            <div className="d-flex flex-column">
              <span className="text-center text-white small mb-1 text-truncate">
                Thiệt hại tài sản
              </span>
              <strong
                className="text-white text-center fw-bold lh-1"                 // line-height thấp
                style={{ fontSize: "clamp(16px, 3dvh, 22px)" }}     // co theo màn hình
              >
                {(summary.thietHaiTaiSan/1000000).toLocaleString("vi-VN")} triệu
              </strong>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col >
        <Card className="shadow-sm" style={{ backgroundColor: "#3e4e58" }}>
          <Card.Body className="py-2 px-3"> {/* giảm padding */}
            <div className="d-flex flex-column">
              <span className="text-center text-white small mb-1 text-truncate">
                Diện tích rừng
              </span>
              <strong
                className="text-white text-center fw-bold lh-1"                 // line-height thấp
                style={{ fontSize: "clamp(16px, 3dvh, 22px)" }}     // co theo màn hình
              >
                {summary.values.toLocaleString("vi-VN")} ha
              </strong>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default StatsCards;
