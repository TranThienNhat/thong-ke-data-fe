import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  title: string;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ title}) => {
  const doughnutData = {
    labels: ['Chưa rõ nguyên nhân', 'Do sự cố hệ thống, thiết bị điện'],
    datasets: [
      {
        data: [67, 33],
        backgroundColor: ['#4a5568', '#e53e3e'],
        borderWidth: 0,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div style={{ height: '250px' }}>
      <Doughnut data={doughnutData} options={doughnutOptions} />
    </div>
  );
};

export default DoughnutChart;