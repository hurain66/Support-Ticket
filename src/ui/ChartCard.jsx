import React from 'react';
import ReactECharts from 'echarts-for-react';

const ChartCard = ({ data }) => {
  const option = {
    color: ['#a855f7', '#d8b4fe'],
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderColor: '#f3e8ff',
      textStyle: { color: '#374151' },
      axisPointer: {
        type: 'line',
        lineStyle: { color: '#e9d5ff', type: 'dashed' }
      }
    },
    legend: {
      data: ['New Tickets', 'Resolved'],
      icon: 'circle',
      top: 0,
      right: 0,
      itemWidth: 8,
      textStyle: { color: '#6b7280', fontSize: 12 }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '15%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      data: data.categories,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: '#9ca3af', margin: 12 }
    }],
    yAxis: [{
      type: 'value',
      splitLine: {
        lineStyle: { color: '#f3f4f6', type: 'dashed' }
      },
      axisLabel: { color: '#9ca3af' }
    }],
    series: data.series.map((s) => ({
      name: s.name,
      type: 'line',
      smooth: true,
      lineStyle: { width: 3 },
      showSymbol: false,
      areaStyle: {
        opacity: 0.1,
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: s.name === 'New Tickets' ? '#a855f7' : '#d8b4fe' },
            { offset: 1, color: 'rgba(255,255,255,0)' }
          ]
        }
      },
      data: s.data
    }))
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow-[0_4px_20px_-4px_rgba(168,85,247,0.05)] border border-purple-50/50 h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base font-semibold text-gray-800">Support Volume Trends</h3>
        <select className="text-sm border-none bg-purple-50 text-purple-700 rounded-lg py-1 px-2 focus:ring-0 cursor-pointer outline-none">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
        </select>
      </div>
      <div className="flex-1 w-full min-h-[200px]">
        <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
      </div>
    </div>
  );
};

export default ChartCard;
