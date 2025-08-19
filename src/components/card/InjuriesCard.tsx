import React from "react";

interface Props {
  data: { content: string; values: number }[];
}

const InjuriesCard: React.FC<Props> = ({ data }) => {
  const injuries =
    data.find((item) => item.content === "Người bị thương")?.values || 0;

  return (
    <div className="p-3 bg-white text-center">
      <h6 className="text-muted">Số người bị thương</h6>
      <h4 className="fw-bold">{injuries}</h4>
    </div>
  );
};

export default InjuriesCard;
