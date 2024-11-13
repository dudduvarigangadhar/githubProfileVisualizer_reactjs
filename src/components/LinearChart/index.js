// import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts'

// const LinearChart = props => {
//   const {quarterCommitCount} = props
//   const data = quarterCommitCount
//   return (
//     <LineChart
//       width={400}
//       height={400}
//       data={data}
//       margin={{top: 5, right: 20, left: 10, bottom: 5}}
//     >
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="name" height={80} />
//       <YAxis />
//       <Tooltip />
//       <Line
//         // type="monotone"
//         dataKey="commits"
//         stroke="#88884d8"
//         activeDot={{r: 8}}
//       />
//       {/* <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} /> */}
//     </LineChart>
//   )
// }

// export default LinearChart
import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

// const data = [
//   {name: '2012-Q1', value: 0},
//   {name: '2012-Q2', value: 90},
//   {name: '2012-Q3', value: 2},
//   {name: '2012-Q4', value: 16},
//   {name: '2013-Q1', value: 43},
//   {name: '2013-Q2', value: 0},
//   {name: '2013-Q3', value: 1},
//   {name: '2013-Q4', value: 0},
//   {name: '2014-Q1', value: 0},
//   {name: '2014-Q2', value: 0},
//   {name: '2014-Q3', value: 0},
//   {name: '2014-Q4', value: 0},
//   {name: '2015-Q1', value: 0},
//   {name: '2015-Q2', value: 0},
//   {name: '2015-Q3', value: 0},
//   {name: '2015-Q4', value: 0},
//   {name: '2016-Q1', value: 0},
//   {name: '2016-Q2', value: 0},
//   {name: '2016-Q3', value: 0},
//   {name: '2016-Q4', value: 0},
//   {name: '2017-Q1', value: 0},
//   {name: '2017-Q2', value: 0},
//   {name: '2017-Q3', value: 0},
//   {name: '2017-Q4', value: 0},
//   {name: '2018-Q1', value: 0},
//   {name: '2018-Q2', value: 0},
//   {name: '2018-Q3', value: 0},
//   {name: '2018-Q4', value: 0},
//   {name: '2019-Q1', value: 0},
//   {name: '2019-Q2', value: 0},
//   {name: '2019-Q3', value: 0},
//   {name: '2019-Q4', value: 16},
//   {name: '2020-Q1', value: 231},
//   {name: '2020-Q2', value: 271},
//   {name: '2020-Q3', value: 404},
//   {name: '2020-Q4', value: 534},
//   {name: '2021-Q1', value: 302},
//   {name: '2021-Q2', value: 285},
//   {name: '2021-Q3', value: 582},
//   {name: '2021-Q4', value: 355},
//   {name: '2022-Q1', value: 149},
//   {name: '2022-Q2', value: 258},
//   {name: '2022-Q3', value: 299},
//   {name: '2022-Q4', value: 267},
//   {name: '2023-Q1', value: 212},
//   {name: '2023-Q2', value: 92},
//   {name: '2023-Q3', value: 56},
//   {name: '2023-Q4', value: 88},
//   {name: '2024-Q1', value: 141},
//   {name: '2024-Q2', value: 43},
//   {name: '2024-Q3', value: 75},
//   {name: '2024-Q4', value: 35},
// ]

const LinearChart = props => {
  const {quarterCommitCount} = props
  console.log(quarterCommitCount)
  return (
    <div
      style={{backgroundColor: '#1f2937', padding: '20px', borderRadius: '8px'}}
    >
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={quarterCommitCount}>
          <CartesianGrid stroke="#374151" strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#9CA3AF" tick={{fontSize: 12}} />
          <YAxis stroke="#9CA3AF" tick={{fontSize: 12}} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#374151',
              borderColor: '#4B5563',
              color: '#E5E7EB',
            }}
            itemStyle={{color: '#E5E7EB'}}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3B82F6"
            strokeWidth={2}
            dot={{fill: '#3B82F6', r: 3}}
            activeDot={{r: 6}}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LinearChart
