import { useState } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';

export default function RevenueTrend({ data }) {
  const [period, setPeriod] = useState('weekly');

  return (
    <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 shadow-sm h-full">
      
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-slate-900">
          Revenue Trend
        </h3>

        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="border border-zinc-200 rounded-lg px-3 py-2 text-sm"
        >
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data[period]}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="label" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#ef4444"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}