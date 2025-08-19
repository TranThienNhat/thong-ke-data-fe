import React, { useMemo } from 'react';
import {
  Treemap,
  ResponsiveContainer,
} from 'recharts';

type Item = { content: string; values: number; fill?: string };

interface WardTreemapProps {
  data: { content: string; values: number }[];  // truyền từ ngoài vào
}

export default function WardTreemap({ data }: WardTreemapProps) {
  const { min, max } = useMemo(() => {
    const vs = data.map(d => d.values);
    return { min: Math.min(...vs), max: Math.max(...vs) };
  }, [data]);

  const colorByValue = (v: number) => {
    const hue = 0;   // 0 = đỏ
    const sat = 72;  // % bão hoà
    const L0 = 28;   // đỏ đậm
    const L1 = 82;   // đỏ nhạt
    const t = max === min ? 0.5 : 1 - (v - min) / (max - min);
    const L = L0 + (L1 - L0) * t;
    return `hsl(${hue}, ${sat}%, ${L}%)`;
  };

  const coloredData: Item[] = useMemo(
    () => data.map(it => ({ ...it, fill: colorByValue(it.values) })),
    [data, min, max]
  );

  const TreemapContent = (props: any) => {
    const { x, y, width, height, content, values, fill } = props;
    if (!width || !height) return null;

    return (
      <g>
        <rect x={x} y={y} width={width} height={height} fill={fill} stroke="#fff" />
        {width > 60 && height > 34 && (
          <text
            x={x + 8}
            y={y + height - 10}
            fill="#fff"
            fontSize={12}
          >
            {content} , {values}
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
