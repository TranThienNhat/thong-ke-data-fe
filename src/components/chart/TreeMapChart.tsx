import React, { useMemo } from 'react';
import { Treemap, ResponsiveContainer } from 'recharts';

type Item = { content: string; values: number; fill?: string };

interface WardTreemapProps {
  data: { content: string; values: number }[];
  colorOrder?: 'byValue' | 'byIndex'; // mặc định: byValue
}

export default function WardTreemap({ data, colorOrder = 'byValue' }: WardTreemapProps) {
  // Tạo rank ổn định
  const ranked = useMemo(() => {
    const items = data.map((d, i) => ({ ...d, _i: i }));

    if (colorOrder === 'byIndex') {
      // Giảm dần theo thứ tự input
      return items.map(d => ({ ...d, _rank: d._i }));
    }

    // byValue: sắp theo values DESC, tie-breaker theo index ASC
    const sorted = [...items].sort((a, b) => (b.values - a.values) || (a._i - b._i));
    const rankByIndex = new Map<number, number>();
    sorted.forEach((d, rank) => rankByIndex.set(d._i, rank));
    return items.map(d => ({ ...d, _rank: rankByIndex.get(d._i)! }));
  }, [data, colorOrder]);

  const n = ranked.length || 1;

  // đỏ đậm -> đỏ nhạt theo rank (0 là đậm nhất)
  const colorByRank = (rank: number) => {
    const hue = 0;   // đỏ
    const sat = 72;  // %
    const L0 = 28;   // đậm
    const L1 = 82;   // nhạt
    const t = n === 1 ? 0 : rank / (n - 1); // 0..1
    const L = L0 + (L1 - L0) * t;
    return `hsl(${hue}, ${sat}%, ${L}%)`;
  };

  const coloredData: Item[] = useMemo(
    () =>
      ranked.map(d => ({
        content: d.content,
        values: d.values,
        fill: colorByRank(d._rank),
      })),
    [ranked, n]
  );

  const TreemapContent = (props: any) => {
    const { x, y, width, height, name, value, fill } = props; // name/value theo nameKey/dataKey
    if (!width || !height) return null;
    return (
      <g>
        <rect x={x} y={y} width={width} height={height} fill={fill} stroke="#fff" />
        {width > 60 && height > 34 && (
          <text x={x + 8} y={y + height - 10} fill="#fff" fontSize={12}>
            {name}, {value}
          </text>
        )}
      </g>
    );
  };

  return (
    <div style={{ width: '100%', height: 280 }}>
      <ResponsiveContainer>
        <Treemap
          data={coloredData}
          dataKey="values"
          nameKey="content"
          aspectRatio={0.8}
          stroke="#ffffff"
          isAnimationActive={false}
          content={<TreemapContent />}
        />
      </ResponsiveContainer>
    </div>
  );
}
