import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../../style/ProfitChart.css';
const data = [
  { day: 'M', sales: 40, revenue: 20 },
  { day: 'T', sales: 50, revenue: 25 },
  { day: 'W', sales: 35, revenue: 30 },
  { day: 'T', sales: 65, revenue: 15 },
  { day: 'F', sales: 20, revenue: 15 },
  { day: 'S', sales: 40, revenue: 30 },
  { day: 'S', sales: 60, revenue: 20 },
];

const ProfitChart=()=> {
  return (
    <div className="profit-chart">
      <div className="chart-header">
        <h3>Profit this week</h3>
        <select defaultValue="This Week">
          <option>This Week</option>
          <option>Last Week</option>
          <option>Last Month</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" stackId="a" fill="#4318FF" barSize={10} /> {/* Adjust barSize here */}
        <Bar dataKey="revenue" stackId="a" fill="#6AD2FF" barSize={10} /> {/* Adjust barSize here */}
      </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProfitChart;
