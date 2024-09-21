export const salesByCategory = [
  { name: 'Bag', value: 400 },
  { name: 'Jewellery', value: 300 },
  { name: 'Watch', value: 300 },
  { name: 'Shirt', value: 200 },
];

export const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const RADIAN = Math.PI / 180;
export const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const style = {
  top: '90%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};