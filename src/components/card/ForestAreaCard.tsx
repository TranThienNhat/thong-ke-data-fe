import React from "react";

interface Props {
  data: { content: string; values: number }[];
}

const ForestAreaCard: React.FC<Props> = ({ data }) => {
  const forest =
    data.find((item) => item.content === "Diện tích rừng")?.values || 0;

  return (
    <div className="p-3 bg-white text-center">
      <h6 className="text-muted">Diện tích rừng</h6>
      <h4 className="fw-bold">{forest} ha</h4>
    </div>
  );
};

export default ForestAreaCard;
