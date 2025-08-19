import React from "react";

interface Props {
  value: number;
}

const TotalCasesCard: React.FC<Props> = ({ value }) => {
  return (
    <div className="p-4 text-center">
      <h6 className="text-muted">Số vụ</h6>
      <h4 className="fw-bold">{value}</h4>
    </div>
  );
};

export default TotalCasesCard;
