import React from "react";

interface Props {
  value: number; // giá trị VNĐ
}

const DamageCard: React.FC<Props> = ({ value }) => {
  const formatTrieu = (v: number) => {
    const trieu = v / 1_000_000;
    // Giữ tối đa 2 số lẻ, dùng dấu chấm
    const n = trieu.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
    return `${n} tr`;
  };

  return (
    <div className="p-4 text-center text-white" >
      <h6 className="text-white">Thiệt hại tài sản</h6>
      <h4 className="fw-bold">{formatTrieu(value)}</h4>
    </div>
  );
};

export default DamageCard;
