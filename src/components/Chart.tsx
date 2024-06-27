import React, { useEffect, useRef, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import html2canvas from 'html2canvas';
import data from '../data/chartData.json'; 
import "../styles/Chart.css";

interface DataPoint {
  timestamp: string;
  value: number;
}

interface ChartProps {
  timeframe: 'daily' | 'weekly' | 'monthly';
}

const Chart: React.FC<ChartProps> = ({ timeframe }) => {
  const [chartData, setChartData] = useState<DataPoint[]>([]);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setChartData(data[timeframe]);
  }, [timeframe]);

  const exportChart = () => {
    if (chartRef.current) {
      html2canvas(chartRef.current)
        .then((canvas) => {
          const dataUrl = canvas.toDataURL('image/png');
          const link = document.createElement('a');
          link.download = 'chart.png';
          link.href = dataUrl;
          link.click();
        })
        .catch((error: Error) => {
          console.error('Export failed', error);
        });
    }
  };

  return (
    <div className="chart-container" ref={chartRef}>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
      <button onClick={exportChart} className="export-image">Export as PNG</button>
    </div>
  );
};

export default Chart;
