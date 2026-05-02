import React, { useState } from 'react';
import * as FiIcons from 'react-icons/fi';
import SupportDashboard from './ui/SupportDashboard';
import StatCard from './ui/StatCard';
import TicketCard from './ui/TicketCard';
import Badge from './ui/Badge';
import Avatar from './ui/Avatar';
import SafeIcon from './common/SafeIcon';
import { mockTickets } from './data/mockData';

function App() {
  const [showVariations, setShowVariations] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 relative">
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setShowVariations(!showVariations)}
          className="bg-white border border-purple-200 text-purple-700 px-4 py-2 rounded-xl shadow-lg shadow-purple-100/50 hover:bg-purple-50 hover:border-purple-300 transition-all font-medium text-sm flex items-center gap-2"
        >
          <SafeIcon icon={showVariations ? FiIcons.FiLayout : FiIcons.FiLayers} />
          {showVariations ? 'View Dashboard' : 'Show Components'}
        </button>
      </div>

      {showVariations ? (
        <div className="p-8 max-w-7xl mx-auto pt-20">
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Component Library</h1>
            <p className="text-gray-500">Individual building blocks of the Support Dashboard.</p>
          </div>

          <div className="space-y-16">
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">Stat Cards</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard label="Avg Response Time" value="1h 12m" trend="-15%" trendType="positive" icon="FiClock" />
                <StatCard label="SLA Breaches" value="3" trend="+1" trendType="negative" icon="FiAlertTriangle" />
                <StatCard label="Customer Satisfaction" value="4.8" trend="+0.2" trendType="positive" icon="FiSmile" />
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">Badges</h2>
              <div className="flex flex-wrap gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <Badge variant="default">Default</Badge>
                <Badge variant="purple">Feature</Badge>
                <Badge variant="blue">Medium Priority</Badge>
                <Badge variant="orange">High Priority</Badge>
                <Badge variant="red">Critical</Badge>
                <Badge variant="green">Resolved</Badge>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">Avatars</h2>
              <div className="flex flex-wrap items-end gap-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <Avatar initial="SM" size="sm" />
                <Avatar initial="MD" size="md" colorClass="bg-blue-100 text-blue-700" />
                <Avatar initial="LG" size="lg" colorClass="bg-green-100 text-green-700" />
                <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" size="lg" />
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">Ticket Cards</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockTickets.slice(0, 3).map((ticket) => (
                  <TicketCard key={ticket.id} ticket={ticket} />
                ))}
              </div>
            </section>
          </div>
        </div>
      ) : (
        <SupportDashboard />
      )}
    </div>
  );
}

export default App;
