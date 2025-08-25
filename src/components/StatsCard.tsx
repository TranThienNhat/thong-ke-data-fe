import React from "react";
import { Row, Col, Card } from "react-bootstrap";

interface Summary {
  totalCase: number;
  deaths: number;
  injureds: number;
  damages: number;      // BigDecimal từ BE, ép về number khi nhận
  areaDamages: number;  // BigDecimal từ BE
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
      {/* Số vụ */}
      <Col>
        <Card className="shadow-sm" style={{ backgroundColor: "var(--stats-card-color)" }}>
          <Card.Body className="py-2 px-3">
            <div className="d-flex flex-column">
              <span className="text-center text-white small mb-1 text-truncate">
                Số vụ
              </span>
              <strong
                className="text-white text-center fw-bold lh-1"
                style={{ fontSize: "clamp(16px, 3dvh, 22px)" }}
              >
                {summary.totalCase.toLocaleString("vi-VN")}
              </strong>
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* Số người chết */}
      <Col>
        <Card className="shadow-sm" style={{ backgroundColor: "var(--stats-card-color)" }}>
          <Card.Body className="py-2 px-3">
            <div className="d-flex flex-column">
              <span className="text-center text-white small mb-1 text-truncate">
                Số người chết
              </span>
              <strong
                className="text-white text-center fw-bold lh-1"
                style={{ fontSize: "clamp(16px, 3dvh, 22px)" }}
              >
                {summary.deaths.toLocaleString("vi-VN")}
              </strong>
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* Số người bị thương */}
      <Col>
        <Card className="shadow-sm" style={{ backgroundColor: "var(--stats-card-color)" }}>
          <Card.Body className="py-2 px-3">
            <div className="d-flex flex-column">
              <span className="text-center text-white small mb-1 text-truncate">
                Số người bị thương
              </span>
              <strong
                className="text-white text-center fw-bold lh-1"
                style={{ fontSize: "clamp(16px, 3dvh, 22px)" }}
              >
                {summary.injureds.toLocaleString("vi-VN")}
              </strong>
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* Thiệt hại tài sản */}
      <Col>
        <Card className="shadow-sm" style={{ backgroundColor: "var(--stats-card-color)" }}>
          <Card.Body className="py-2 px-3">
            <div className="d-flex flex-column">
              <span className="text-center text-white small mb-1 text-truncate">
                Thiệt hại tài sản
              </span>
              <strong
                className="text-white text-center fw-bold lh-1"
                style={{ fontSize: "clamp(16px, 3dvh, 22px)" }}
              >
                {(summary.damages / 1_000_000).toLocaleString("vi-VN")} triệu
              </strong>
            </div>
          </Card.Body>
        </Card>
      </Col>
    
      {/* Diện tích rừng */}
      <Col>
        <Card className="shadow-sm" style={{ backgroundColor: "var(--stats-card-color)" }}>
          <Card.Body className="py-2 px-3">
            <div className="d-flex flex-column">
              <span className="text-center text-white small mb-1 text-truncate">
                Diện tích rừng
              </span>
              <strong
                className="text-white text-center fw-bold lh-1"
                style={{ fontSize: "clamp(16px, 3dvh, 22px)" }}
              >
                {summary.areaDamages.toLocaleString("vi-VN")} ha
              </strong>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default StatsCards;
