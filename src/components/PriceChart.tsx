import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';

const data = [
  { date: '2024-03-01', maize: 150, rice: 180 },
  { date: '2024-03-02', maize: 155, rice: 185 },
  { date: '2024-03-03', maize: 153, rice: 182 },
  { date: '2024-03-04', maize: 158, rice: 178 },
  { date: '2024-03-05', maize: 160, rice: 175 }
].map(item => ({
  ...item,
  date: format(new Date(item.date), 'MMM d')
}));

export function PriceChart() {
  return (
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="maize" stroke="#059669" name="Maize (KES/kg)" />
          <Line type="monotone" dataKey="rice" stroke="#7C3AED" name="Rice (KES/kg)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}