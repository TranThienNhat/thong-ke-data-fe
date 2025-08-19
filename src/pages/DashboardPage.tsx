import React from "react";
import Charts from "../components/Chart";
import StatsCards from "../components/StatsCard";
const DashboardPage: React.FC = () => {
  return (
    <div>
      <StatsCards />
      <Charts />
    </div>
  );
};

export default DashboardPage;
