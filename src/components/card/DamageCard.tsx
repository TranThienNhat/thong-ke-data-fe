import React from "react";

interface Props {
  data: { content: string; values: number }[];
}

const DamageCard: React.FC<Props> = ({ data }) => {
  const damage = data.find((item) => item.content === "Thiệt hại")?.values || 0;

  return (
    <div className="p-3 bg-white text-center">
      <h6 className="text-muted">Thiệt hại</h6>
      <h4 className="fw-bold">{damage} tỷ</h4>
    </div>
  );
};

export default DamageCard;
