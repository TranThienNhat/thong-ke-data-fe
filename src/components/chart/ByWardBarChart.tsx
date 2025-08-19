import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartDataLabels);

interface ByWardBarChartProps {
  data: { content: string; values: number }[];
}

const ByWardBarChart: React.FC<ByWardBarChartProps> = ({ data }) => {
  const labels = data.map(d => d.content);
  const values = data.map(d => Number(d.values) || 0);
  const total = values.reduce((a, b) => a + b, 0) || 1; // tránh chia 0

  const chartData: ChartData<'bar'> = {
    labels,
    datasets: [
      {
        label: 'Số vụ',
        data: values,                         // VẼ THEO SỐ TUYỆT ĐỐI
        backgroundColor: '#5172a1',
        borderRadius: 4,
        maxBarThickness: 28,
      },
    ],
  };


  //   responsive: true,
  //   maintainAspectRatio: false,
  //   layout: { padding: { right: 30, left: 0, top: 0, bottom: 0 } },
  //   plugins: {
  //     legend: { display: false },
  //     tooltip: {
  //       callbacks: {
  //         // Tooltip hiển thị: "Số vụ: 7 (23%)"
  //         label: (ctx) => {
  //           const raw = ctx.parsed.x ?? 0;
  //           const pct = Math.round(((raw as number) / total) * 100);
  //           return `Số vụ: ${raw} (${pct}%)`;
  //         },
  //       },
  //     },
  //     // HIỂN THỊ % Ở ĐẦU CỘT
  //     datalabels: {
  //       anchor: 'end',   // neo về đầu thanh (bên trái)
  //       align: 'end',    // canh lề trái
  //       offset: 0,        // lệch nhẹ ra ngoài
  //       color: '#4b5563',  // xám đậm, bạn đổi tùy ý
  //       font: { weight: 'bold' },
  //       formatter: (value: number) => {
  //         const pct = Math.round((Number(value) / total) * 100);
  //         return `${pct}%`;
  //       },

  //     },
  //   },
  //   scales: {
  //     x: {
  //       beginAtZero: true,
  //       // bỏ max -> để auto theo số lớn nhất
  //       grid: { color: '#e9ecef' },
  //       ticks: { font: { size: 10 } },
  //     },
  //     y: {
  //       grid: { display: false },
  //       ticks: { font: { size: 10 } },
  //     },
  //   },
  // };
  const chartOptions: ChartOptions<'bar'> = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    layout: { padding: { right: 50, left: 0, top: 0, bottom: 0 } },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => {
            const raw = ctx.parsed.x ?? 0;
            const total = (ctx.dataset.data as number[]).reduce((a, b) => a + (b as number), 0) || 1;
            const pct = Math.round(((raw as number) / total) * 100);
            return `Số vụ: ${raw} (${pct}%)`;
          },
        },
      },
      datalabels: {
        // Cho phép label vẽ ngoài chart area (phần % phía đầu cột)
        clip: false,

        // Khai báo 2 nhãn: "value" nằm *trong* cột, "percent" ở *đầu* cột
        labels: {
          value: {
            formatter: (value: number, ctx) => `${value}`,   // số vụ
            anchor: 'center',    // neo vào giữa thanh
            align: 'center',     // căn giữa
            color: (ctx) => {
              // nếu muốn tương phản tốt hơn, để trắng khi cột dài
              const data = ctx.dataset.data as number[];
              const total = data.reduce((a, b) => a + (b as number), 0) || 1;
              const pct = Number(values) / total * 100;
              return '#111827'; // trắng khi đủ dài, đen khi ngắn
            },
            font: { weight: 'bold' },
            // Chỉ hiển thị khi cột đủ dài để text không bị tràn
            display: (ctx) => {
              const data = ctx.dataset.data as number[];
              const total = data.reduce((a, b) => a + (b as number), 0) || 1;
              const raw = Number(ctx.dataset.data[ctx.dataIndex] ?? 0);
              const pct = (raw / total) * 100;
              return pct >= 8; // tối thiểu 8% thì mới vẽ trong cột
            },
          },
          percent: {
            formatter: (value: number, ctx) => {
              const data = ctx.dataset.data as number[];
              const total = data.reduce((a, b) => a + (b as number), 0) || 1;
              const pct = ((Number(value) / total) * 100).toFixed(2);
              return `${pct}%`;
            },
            anchor: 'end',       // neo về đầu cột (phía phải với bar ngang)
            align: 'end',        // căn ra mép phải
            offset: 4,           // lệch ra ngoài 1 chút
            color: '#4b5563',
            font: { weight: 'bold' },
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: { display: false },
        ticks: { font: { size: 10 } },
      },
      y: {
        grid: { display: false },
        ticks: { font: { size: 10 } },
      },
    },
  };

  return (
    <div style={{ height: 260 }}>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default ByWardBarChart;
