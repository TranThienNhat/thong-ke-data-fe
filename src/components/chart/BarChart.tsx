import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    type ChartOptions
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, ChartDataLabels);

// Cho phép truyền data theo 2 kiểu label:
// - { month, values }   dùng cho soVu / thietHai
// - { content, values } dùng cho phanLoaiPhuong
type DataItem =
    | { month: number; values: number }
    | { content: string; values: number };

interface BarChartProps {
    data: DataItem[];
    type: 'soVu' | 'thietHai' | 'phanLoaiPhuong' | 'phanLoaiCoSo';
}

const BarChart: React.FC<BarChartProps> = ({ data, type }) => {
    const isSoVu = type === 'soVu';
    const isThietHai = type === 'thietHai'
    const isPhanLoaiPhuong = type === 'phanLoaiPhuong'
    const isPhanLoaiCoSo = type === 'phanLoaiCoSo'
    // Tạo labels linh hoạt theo kiểu dữ liệu
    const labels = data.map(d => ('content' in d ? d.content : `T${d.month}`));
    const values = data.map(d => Number(d.values) || 0);

    // format riêng cho 'thietHai' -> tiền rút gọn đơn vị triệu, còn lại giữ số
    const formatLabel = (v: number) =>
        isThietHai
            ? new Intl.NumberFormat('vi-VN', { notation: 'compact', maximumFractionDigits: 1 }).format(v / 10000000)
            : String(v);

    if (type === 'phanLoaiPhuong' || type === 'phanLoaiCoSo') {
        const total = values.reduce((a, b) => a + b, 0) || 1;

        const chartData = {
            labels,
            datasets: [
                {
                    label: 'Số vụ',
                    data: values,                    // vẽ theo số tuyệt đối
                    backgroundColor: '#5172a1',
                    borderRadius: 4,
                    maxBarThickness: 28,
                },
            ],
        };

        const chartOptions: ChartOptions<'bar'> = {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            layout: { padding: { right: 48, left: 0, top: 0, bottom: 0 } }, // chừa chỗ cho % bên phải
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: (ctx) => {
                            const raw = Number(ctx.parsed.x ?? 0);
                            const pct = Math.round((raw / total) * 100);
                            return `Số vụ: ${raw} (${pct}%)`;
                        },
                    },
                },
                datalabels: {
                    clip: false,   // cho phép vẽ ngoài chartArea
                    labels: {
                        // Giá trị nằm TRONG cột
                        value: {
                            formatter: (val: number, ctx) => {
                                if (isPhanLoaiPhuong) {
                                    return String(val); // chỉ hiện value
                                } else {
                                    const content = ctx.chart.data.labels?.[ctx.dataIndex] ?? '';
                                    return `${content}; ${val}`; // ghép content + value
                                }
                            },
                            anchor: 'center',
                            align: 'center',
                            font: { weight: 'bold' },
                            color: "#4b5563",
                        },
                        // % ở CUỐI cột (bên phải)
                        percent: {
                            formatter: (value: number) => `${((Number(value) / total) * 100).toFixed(2)}%`,
                            anchor: 'end' as const,
                            align: 'end' as const,
                            offset: 4,
                            color: '#4b5563',
                            font: { weight: 'bold' },
                            display: isPhanLoaiPhuong ? true : false
                        },
                    },
                },
            },
            scales: {
                x: {
                    display: false,
                    beginAtZero: true,
                    grid: { display: false },
                    ticks: { font: { size: 10 } },
                },
                y: {
                    display: isPhanLoaiPhuong ? true : false,
                    grid: { display: false },
                    ticks: {
                        font: { size: 10 },
                        display: isPhanLoaiPhuong ? true : false
                    },
                },
            },
        };

        return (
            <div className='w-100 h-100'>
                <Bar data={chartData} options={chartOptions} />
            </div>
        );
    } else if (type === 'soVu' || type === 'thietHai') {
        const maxVal = Math.max(0, ...values);
        const headroom = Math.max(1, Math.ceil(maxVal * 0.1)); // +10% khi chữ để trên cột
        const barData = {
            labels,
            datasets: [
                {
                    data: values,
                    backgroundColor: '#5172a1',
                    borderRadius: 4,
                    maxBarThickness: 30,
                },
            ],
        };

        const chartOptions: ChartOptions<'bar'> = {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                },
            },
            plugins: {
                legend: { display: false },
                datalabels: {
                    anchor: 'end',
                    align: (isSoVu ? 'end' : 'start') as 'end' | 'start', // literal to avoid TS error
                    offset: isSoVu ? 2 : -2,
                    color: isSoVu ? '#111' : '#fff',
                    font: { weight: 'bold', size: 10 },
                    formatter: (v: number) => formatLabel(v),
                    clip: false,
                    clamp: true,
                },
                tooltip: {
                    callbacks: {
                        label: (ctx) => {
                            const val = Number(ctx.parsed.y ?? ctx.parsed.x ?? 0);
                            return formatLabel(val);
                        },
                    },
                },
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { font: { size: 10 } },
                },
                y: {
                    beginAtZero: true,
                    display: false,
                    grid: { display: false },
                    suggestedMax: isSoVu ? maxVal + headroom : undefined,
                },
            },
        };
        return (
            <div className='w-100 h-100'>
                <Bar data={barData} options={chartOptions} />
            </div>
        );
    }
};

export default BarChart;
