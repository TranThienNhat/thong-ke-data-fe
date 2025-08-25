import React, { useEffect, useMemo, useState } from "react";
import { Card } from "react-bootstrap";
import api from "../../routes/appRoute";

type Ward = { wardId: number; wardName: string };

interface Filters {
  years: number[];
  months: number[];
  wards: number[];
}

interface SidebarProps {

  onFilterChange: (dashboardData: any) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onFilterChange }) => {
  const [years, setYears] = useState<number[]>([]);
  const [wards, setWards] = useState<Ward[]>([]);
  const [filters, setFilters] = useState<Filters>({
    years: [],
    months: [],
    wards: [],
  });


  useEffect(() => {
    (async () => {
      try {
        const [y, w] = await Promise.all([api.get("/years"), api.get("/wards")]);
        setYears(y.data?.data ?? y.data ?? []);
        setWards(w.data ?? []);
      } catch (e) {
        console.error("Load danh mục thất bại", e);
      }
    })();
  }, []);

  // helper build query
  const queryString = useMemo(() => {
    const p = new URLSearchParams();
    if (filters.years.length > 0) p.set("year", String(filters.years[0])); // FE của bạn chỉ lọc 1 năm
    if (filters.months.length > 0) {
      // BE hiện nhận 1 month? nếu nhiều tháng hãy thay bằng month= & month=
      p.set("month", String(filters.months[0]));
    }
    filters.wards.forEach((id) => p.append("wardIds", String(id)));
    return p.toString();
  }, [filters]);

  // gọi dashboard mỗi khi bộ lọc đổi
  useEffect(() => {
    (async () => {
      try {
        const url = `/dashboard${queryString ? `?${queryString}` : ""}`;
        const res = await api.get(url);
        onFilterChange(res.data?.data ?? res.data);
      } catch (e) {
        console.error("Load dashboard thất bại", e);
        onFilterChange(null as any);
      }
    })();
  }, [queryString, onFilterChange]);

  // UI rất gọn (bạn có thể giữ UI cũ), quan trọng là không còn dùng JSON
  return (
    <div className="p-2" style={{ background: "#eef1fb", height: "100%" }}>
      <Card className="mb-3">
        <Card.Header className="fw-bold">Năm</Card.Header>
        <Card.Body className="d-flex flex-wrap gap-2">
          {years.map((y) => (
            <button
              key={y}
              className={`btn btn-sm ${filters.years.includes(y) ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() =>
                setFilters((f) => ({
                  ...f,
                  years: f.years.includes(y) ? [] : [y],
                }))
              }
            >
              {y}
            </button>
          ))}
        </Card.Body>
      </Card>
      
      <Card className="mb-3">
        <Card.Header className="fw-bold">Tháng</Card.Header>
        <Card.Body className="d-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
            <button
              key={m}
              className={`btn btn-sm ${filters.months.includes(m) ? "btn-secondary" : "btn-outline-secondary"}`}
              onClick={() =>
                setFilters((f) => ({
                  ...f,
                  months: f.months.includes(m) ? [] : [m],
                }))
              }
            >
              {String(m).padStart(2, "0")}
            </button>
          ))}
        </Card.Body>
      </Card>

      <Card>
        <Card.Header className="fw-bold">Phường</Card.Header>
        <Card.Body className="d-flex flex-column gap-2">
          {wards.length ? (
            wards.slice(0, 10).map((w) => {
              const active = filters.wards.includes(w.wardId);
              return (
                <button
                  key={w.wardId}
                  className={`btn btn-sm ${active ? "btn-success" : "btn-outline-success"}`}
                  onClick={() =>
                    setFilters((f) => ({
                      ...f,
                      wards: active ? f.wards.filter((id) => id !== w.wardId) : [...f.wards, w.wardId],
                    }))
                  }
                >
                  {w.wardName}
                </button>
              );
            })
          ) : (
            <p className="text-muted">Không có dữ liệu phường</p>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Sidebar;
