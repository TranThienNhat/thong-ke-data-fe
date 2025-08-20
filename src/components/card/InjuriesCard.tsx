import React from "react";

interface Props {
  value: number;
}

const InjuriesCard: React.FC<Props> = ({ value }) => {
  return (
      <div className="p-4 text-center text-white" >
      <h6 className="text-white">Số người bị thương</h6>
      <h4 className="fw-bold">{value}</h4>
    </div>
  );
};

export default InjuriesCard;
