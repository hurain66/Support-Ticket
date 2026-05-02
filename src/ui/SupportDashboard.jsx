import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import StatCard from './StatCard';
import ChartCard from './ChartCard';
import KanbanBoard from './KanbanBoard';
import { summaryStats, volumeChartData, mockTickets } from '../data/mockData';

const SupportDashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50/50 font-sans text-gray-900">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden relative md:ml-0 ml-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -z-10 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

        <Topbar />

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Support Overview</h1>
                <p className="text-sm text-gray-500 mt-1">Monitor your team&apos;s performance and active issues.</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Showing data for:</span>
                <select className="text-sm font-medium border border-purple-100 bg-white text-purple-700 rounded-lg py-1.5 px-3 focus:ring-2 focus:ring-purple-200 outline-none shadow-sm cursor-pointer">
                  <option>Today</option>
                  <option>Last 7 Days</option>
                  <option>This Month</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {summaryStats.map((stat) => (
                <StatCard key={stat.id} {...stat} />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2">
                <ChartCard data={volumeChartData} />
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-6 text-white shadow-lg shadow-purple-200 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                <div>
                  <h3 className="font-semibold text-purple-100 mb-1">AI Assistant</h3>
                  <p className="text-2xl font-bold mb-4">Auto-resolved 24 tickets today</p>
                  <p className="text-sm text-purple-200 leading-relaxed">
                    Copilot is currently handling 15% of your Tier 1 support volume automatically based on knowledge base articles.
                  </p>
                </div>
                <button className="mt-6 bg-white text-purple-700 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-purple-50 transition w-full shadow-sm">
                  View Insights
                </button>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900">Active Tickets</h2>
                <button className="text-sm text-purple-600 hover:text-purple-800 font-medium">View all tickets &rarr;</button>
              </div>
              <KanbanBoard tickets={mockTickets} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SupportDashboard;
