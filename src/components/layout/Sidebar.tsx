import React, { useState } from "react";
import { Card, Dropdown } from "react-bootstrap";
import dashboard from "../../data/dashboard.json";

interface Filters {
  year: number;
  month: number;
  ward: string;
}

interface SidebarProps {
  onFilterChange: (summary: typeof dashboard.summary) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onFilterChange }) => {
  const currentYear = new Date().getFullYear();

  const [filters, setFilters] = useState<Filters>({
    year: currentYear,
    month: 0,
    ward: "",
  });

  const applyFilter = (newFilters: Filters) => {
    setFilters(newFilters);

    let newSummary = { ...dashboard.summary };

    // lọc theo tháng
    if (newFilters.month > 0) {
      const monthData = dashboard.soVuTheoThang.find(
        (m) => m.month === newFilters.month
      );
      if (monthData) {
        newSummary.values = monthData.values;
      }
    }

    // lọc theo phường
    if (newFilters.ward) {
      const wardData = dashboard.phanLoaiTheophuong.find(
        (w) => w.content === newFilters.ward
      );
      if (wardData) {
        newSummary.values = wardData.values;
      }
    }

    // lọc theo năm (giả lập: khác currentYear thì về 0)
    if (newFilters.year !== currentYear) {
      newSummary = {
        values: 0,
        soNguoiChet: 0,
        soNguoiBiThuong: 0,
        thietHaiTaiSan: 0,
        dienTichRung: 0,
      };
    }

    //gọi callback để báo cho DashboardPage cập nhật
    onFilterChange(newSummary);
  };

  return (
    <Card className="border-0">
      <Card.Header className="bg-light">
        <h6 className="mb-0">Bộ lọc</h6>
      </Card.Header>
      <Card.Body>
        {/* Dropdown Năm */}
        <div className="mb-3">
          <label className="fw-bold d-block mb-1">Năm</label>
          <Dropdown>
            <Dropdown.Toggle variant="outline-secondary" size="sm">
              {filters.year}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {[2025, 2024, 2023].map((y) => (
                <Dropdown.Item
                  key={y}
                  active={filters.year === y}
                  onClick={() => applyFilter({ ...filters, year: y })}
                >
                  {y}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {/* Dropdown Tháng */}
        <div className="mb-3">
          <label className="fw-bold d-block mb-1">Tháng</label>
          <Dropdown>
            <Dropdown.Toggle variant="outline-secondary" size="sm">
              {filters.month === 0 ? "Tất cả" : `Tháng ${filters.month}`}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                active={filters.month === 0}
                onClick={() => applyFilter({ ...filters, month: 0 })}
              >
                Tất cả
              </Dropdown.Item>
              {dashboard.soVuTheoThang.map((item) => (
                <Dropdown.Item
                  key={item.month}
                  active={filters.month === item.month}
                  onClick={() => applyFilter({ ...filters, month: item.month })}
                >
                  Tháng {item.month}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {/* Dropdown Phường */}
        <div className="mb-3">
          <label className="fw-bold d-block mb-1">Phường</label>
          <Dropdown>
            <Dropdown.Toggle variant="outline-secondary" size="sm">
              {filters.ward === "" ? "Tất cả" : filters.ward}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                active={filters.ward === ""}
                onClick={() => applyFilter({ ...filters, ward: "" })}
              >
                Tất cả
              </Dropdown.Item>
              {dashboard.phanLoaiTheophuong.map((ward) => (
                <Dropdown.Item
                  key={ward.content}
                  active={filters.ward === ward.content}
                  onClick={() =>
                    applyFilter({ ...filters, ward: ward.content })
                  }
                >
                  {ward.content}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Sidebar;
