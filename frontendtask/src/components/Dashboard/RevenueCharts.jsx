import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../../style/RevenueChart.css';
const RevenueCharts = () => {
    const data = [
        { name: 'Sep', revenue: 25, sales: 30 },
        { name: 'Oct', revenue: 10, sales: 25 },
        // ... add more data points
      ];
  return <>
    <div className="revenue-chart">
      <h2>Total Revenue</h2>
      <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
        <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
      </LineChart>
      </ResponsiveContainer>
    </div>
  </>
}

export default RevenueCharts