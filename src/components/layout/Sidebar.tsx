import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { FaFilter, FaBars } from "react-icons/fa";

interface SidebarProps {
  onFilterChange: (year: number, month: number | null, ward: string) => void;
}

const wards = [
  "An Khánh",
  "Bình Trưng Tây",
  "Linh Chiểu",
  "Long Bình",
  "Thành Mỹ Lợi",
  "Thảo Điền",
  "Trường Thọ",
];

const Sidebar: React.FC<SidebarProps> = ({ onFilterChange }) => {
  const [year, setYear] = useState<number>(2023);
  const [month, setMonth] = useState<number | null>(null);
  const [selectedWard, setSelectedWard] = useState<string>("");
  const [selectedMonths, setSelectedMonths] = useState<number[]>([]);
  const [selectedYears, setSelectedYears] = useState<number[]>([2023, 2024, 2025]);

  const commonBtnStyle = {
    borderColor: "#b9cce8",
    color: "#000",
    borderRadius: "0.25rem",
    height: "35px",
  };

  return (
<div style={{ height: "1030px" }}>
{/* Box Năm */}
<Card className="border-2 mb-3">
  <Card.Body className="p-3">
    <div className="d-flex justify-content-start align-items-center" style={{ height: "40px" }}>
      <button
        className="btn btn-sm"
        style={{
          ...commonBtnStyle,
          backgroundColor: year === 2023 ? "#b9cce8" : "transparent",
          border: year === 2023 ? "1px solid #b9cce8" : "1px solid #ced4da",
          color: year === 2023 ? "#000" : "#6c757d",
          width: "60px",
          borderRadius: "8px",
          marginRight: "15px"
        }}
        onClick={() => {
          setYear(2023);
          onFilterChange(2023, month, selectedWard);
        }}
      >
        2023
      </button>
      <button
        className="btn btn-sm"
        style={{
          ...commonBtnStyle,
          backgroundColor: year === 2024 ? "#b9cce8" : "transparent",
          border: year === 2024 ? "1px solid #b9cce8" : "1px solid #ced4da",
          color: year === 2024 ? "#000" : "#6c757d",
          width: "60px",
          borderRadius: "8px",
          marginRight: "15px"
        }}
        onClick={() => {
          setYear(2024);
          onFilterChange(2024, month, selectedWard);
        }}
      >
        2024
      </button>
      <button
        className="btn btn-sm"
        style={{
          ...commonBtnStyle,
          backgroundColor: year === 2025 ? "#b9cce8" : "transparent",
          border: year === 2025 ? "1px solid #b9cce8" : "1px solid #ced4da",
          color: year === 2025 ? "#000" : "#6c757d",
          width: "60px",
          borderRadius: "8px",
          marginRight: "15px"
        }}
        onClick={() => {
          setYear(2025);
          onFilterChange(2025, month, selectedWard);
        }}
      >
        2025
      </button>
    </div>
  </Card.Body>
</Card>


{/* Box Tháng */}
<Card className="border-2 mb-3">
  <Card.Body className="p-3">
    <div
      className="d-grid"
      style={{
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "8px",
      }}
    >
      {Array.from({ length: 12 }).map((_, index) => {
        const m = index + 1;
        const isSelected = selectedMonths.includes(m);
        return (
          <button
            key={index}
            className="btn btn-sm"
            style={{
              ...commonBtnStyle,
              backgroundColor: isSelected ? "#b9cce8" : "#f4f8fe",
              height: "30px",
              width: "100%",
            }}
            onClick={() => {
              let updatedMonths: number[];
              if (isSelected) {
                // Bỏ chọn
                updatedMonths = selectedMonths.filter((item) => item !== m);
              } else {
                // Chọn thêm
                updatedMonths = [...selectedMonths, m];
              }
              setSelectedMonths(updatedMonths);
              onFilterChange(year, updatedMonths, selectedWard);
            }}
          >
            {m < 10 ? `0${m}` : m}
          </button>
        );
      })}
    </div>
  </Card.Body>
</Card>

      {/* Box Phường */}
      <Card className="border-2 p-0 h-100" style={{ height: "100%" }}>
        <Card.Header className="bg-light d-flex justify-content-between align-items-center" style={{ height: "50px" }}>
          <h6 className="mb-0">Phường</h6>
          <div>
            <FaBars className="me-2 text-secondary" style={{ cursor: 'pointer' }} />
            <FaFilter className="text-secondary" style={{ cursor: 'pointer' }} />
          </div>
        </Card.Header>
        <Card.Body className="p-2">
          {wards.map((w) => (
            <button
              key={w}
              className="w-100 mb-2 btn btn-sm text-start"
              style={{
                ...commonBtnStyle,
                height: "auto", 
                backgroundColor: selectedWard === w ? "#b9cce8" : "#f4f8fe",
                padding: "8px 12px", 
              }}
              onClick={() => {
                setSelectedWard(w);
                onFilterChange(year, month, w);
              }}
            >
              {w}
            </button>
          ))}
          <button
            className="w-100 btn btn-sm text-start"
            style={{
              backgroundColor: "#f4f4f4",
              color: "#999",
              borderColor: "#ddd",
              padding: "8px 12px",
            }}
            onClick={() => {
              setSelectedWard("");
              onFilterChange(year, month, "");
            }}
          >
            (blank)
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Sidebar;