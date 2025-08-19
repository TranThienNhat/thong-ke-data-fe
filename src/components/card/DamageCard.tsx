import React from "react";

interface Props {
  value: number; // giá trị VNĐ
}

const DamageCard: React.FC<Props> = ({ value }) => {
  const formatted = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(value);

  return (
    <div className="p-4 text-center">
      <h6 className="text-muted">Thiệt hại tài sản</h6>
      <h4 className="fw-bold">{formatted}</h4>
    </div>
  );
};

export default DamageCard;
