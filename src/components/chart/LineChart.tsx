import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

interface LineChartProps {
    data: { month: number; values: number }[];
    type: "soNguoiChet" | "soNguoiBiThuong";
}

// Hàm tiện dụng
const getCssVar = (name: string) =>
    getComputedStyle(document.documentElement)
        .getPropertyValue(name)
        .trim();

// Lấy màu
const datasetColor = getCssVar('--datasets-color');

const LineChart: React.FC<LineChartProps> = ({ data, type }) => {
    const isSoNguoiChet = type === "soNguoiChet";
    const labels = data.map(i => i.month);
    const values = data.map(i => i.values);
    const lineData = {
        labels: labels,
        datasets: [
            {
                data: values,
                borderColor: datasetColor,
                backgroundColor: 'transparent',
                tension: 0,
                pointBackgroundColor: datasetColor,
                pointBorderColor: datasetColor,
                pointRadius: 4,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        layout: { padding: { right: 0, left: 0, top: 20, bottom: 0 } }, // chừa chỗ cho % bên phải
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                // vẽ nhãn trên mỗi điểm
                anchor: 'end' as const,          // bám vào điểm, hướng ra ngoài
                align: 'top' as const,           // nằm phía trên điểm
                offset: 1,              // khoảng cách nhỏ
                color: '#111',
                font: { weight: 'bold' as const, size: 10 }, // 👈
                clip: false,
                clamp: true,
                display: isSoNguoiChet ? true : false
            },
        },
        scales: {
            x: {
                display: false
            },
            y: {
                display: false
            },
        },
    };

    return (
        <div className='w-100 h-100'>
            <Line data={lineData} options={chartOptions} />
        </div>
    );
};

export default LineChart;