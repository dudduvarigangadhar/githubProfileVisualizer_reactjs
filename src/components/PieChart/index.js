import React from 'react'
import {PieChart, Pie, Cell, Legend} from 'recharts'

const data = [
  {name: 'JavaScript', value: 24084},
  {name: 'CSS', value: 3241},
  {name: 'HTML', value: 2027},
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28']

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

export default function Piechart() {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        // label={renderCustomizedLabel}
        innerRadius="55%" // Adjust for the size of the hole
        outerRadius="80%" // Adjust for the thickness
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  )
}
