import React from "react";

interface Props {
  value: number;
}

const ForestAreaCard: React.FC<Props> = ({ value }) => {
  return (
    <div className="p-4 text-center text-white" >
      <h6 className="text-white">Diện tích rừng</h6>
      <h4 className="fw-bold">{value} ha</h4>
    </div>
  );
};

export default ForestAreaCard;
