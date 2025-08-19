import React from "react";

interface Props {
  data: { content: string; values: number }[];
}

const DeathsCard: React.FC<Props> = ({ data }) => {
  const deaths =
    data.find((item) => item.content === "Người chết")?.values || 0;

  return (
    <div className="p-3 bg-white text-center">
      <h6 className="text-muted">Số người chết</h6>
      <h4 className="fw-bold">{deaths}</h4>
    </div>
  );
};

export default DeathsCard;
