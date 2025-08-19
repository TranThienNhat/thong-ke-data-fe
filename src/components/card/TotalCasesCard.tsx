import React from "react";

interface Props {
  data: { content: string; values: number }[];
}

const TotalCasesCard: React.FC<Props> = ({ data }) => {
  const total = data.reduce((acc, item) => acc + item.values, 0);

  return (
    <div className="p-3 bg-white text-center">
      <h6 className="text-muted">Số vụ</h6>
      <h4 className="fw-bold">{total}</h4>
    </div>
  );
};

export default TotalCasesCard;
