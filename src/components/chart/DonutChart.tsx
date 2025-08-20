import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartOptions,
  type ChartData,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

interface DoughnutChartProps {
  data: { content: string; values: number }[];
}

const doughnutOptions: ChartOptions<'doughnut'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'right',
      labels: { usePointStyle: true, padding: 20, font: { size: 10 } },
    },
    datalabels: {
      color: '#fff',
      font: { weight: 'bold' },
      formatter: (value: number, ctx) => {
        const arr = (ctx.chart.data.datasets?.[0]?.data as number[]) ?? [];
        const sum = arr.reduce((a, b) => a + b, 0);
        if (!sum) return '0%';
        const pct = Math.round((Number(value) / sum) * 100);
        return `${value}, ${pct}%`;
      },
    },
  },
};

const DEFAULT_COLORS = ['#4a5568', '#e53e3e', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];

const DoughnutChart: React.FC<DoughnutChartProps> = ({ data }) => {
  const labels = data.map(i => i.content);
  const values = data.map(i => i.values);

  const doughnutData: ChartData<'doughnut'> = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: DEFAULT_COLORS.slice(0, values.length),
        borderWidth: 0,
      },
    ],
  };

  return (
    <div style={{ height: 250 }}>
      <Doughnut data={doughnutData} options={doughnutOptions} />
    </div>
  );
};

export default DoughnutChart;
