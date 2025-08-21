import React, { useMemo } from "react";
import Charts from "../components/Chart";
import StatsCards from "../components/StatsCard";
import Data from "../data/dashboard.json"

type DashboardProps = {
  filters: {
    month: [number],
    year: number,
    ward: [string]
  }
};

const DashboardPage: React.FC<DashboardProps> = ({ filters }) => {
  const filterData = (data: typeof Data) => {
    let filtered = { ...data };

    // filter theo tháng
    if (filters.month && filters.month.length > 0) {
      filtered.soVuTheoThang = data.soVuTheoThang.filter(d =>
        filters.month.includes(d.month)
      );
      filtered.thietHaiTheoThang = data.thietHaiTheoThang.filter(d =>
        filters.month.includes(d.month)
      );
      filtered.soNguoiChetTheoThang = data.soNguoiChetTheoThang.filter(d =>
        filters.month.includes(d.month)
      );
      filtered.soNguoiBiThuongTheoThang =
        data.soNguoiBiThuongTheoThang.filter(d =>
          filters.month.includes(d.month)
        );
    }

    // filter theo phường
    if (filters.ward && filters.ward.length > 0) {
      filtered.phanLoaiTheophuong = data.phanLoaiTheophuong.filter(d =>
        filters.ward.includes(d.content)
      );
    }

    return filtered;
  };

  // memoize để tránh re-render không cần thiết
  const filteredData = useMemo(() => filterData(Data), [filters]);

  return (
    <div>
      <StatsCards summary={Data.summary} />
      <Charts data={Data} />
    </div>
  );
};
export default DashboardPage;
