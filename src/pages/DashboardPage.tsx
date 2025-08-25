import React from "react";
import Charts from "../components/Chart";
import StatsCards from "../components/StatsCard";
import { useOutletContext } from "react-router-dom";

interface DashboardContext {
  summary: {
    values: number;
    soNguoiChet: number;
    soNguoiBiThuong: number;
    thietHaiTaiSan: number;
    dienTichRung: number;
  };
}

const DashboardPage: React.FC = () => {
  const { summary } = useOutletContext<DashboardContext>();
  return (
    <div>
      <StatsCards summary={summary} />
      <Charts/>
    </div>
  );
};

export default DashboardPage;
