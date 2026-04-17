import React from 'react';
import TicketCard from './TicketCard';
import SafeIcon from '../common/SafeIcon';

const KanbanColumn = ({ title, tickets, icon, colorClass }) => {
  return (
    <div className="flex flex-col bg-slate-50/50 rounded-2xl p-3 min-w-[300px] flex-1 border border-purple-50/30">
      <div className="flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-2">
          <div className={`p-1.5 rounded-lg ${colorClass} shrink-0`}>
            <SafeIcon icon={icon} className="text-sm" />
          </div>
          <h3 className="font-semibold text-gray-700 text-sm">{title}</h3>
        </div>
        <span className="bg-white border border-purple-100 text-purple-700 text-xs font-bold px-2 py-0.5 rounded-full shadow-sm">
          {tickets.length}
        </span>
      </div>

      <div className="flex flex-col gap-3 overflow-y-auto pr-1 pb-2 scrollbar-thin scrollbar-thumb-purple-100 scrollbar-track-transparent">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
        {tickets.length === 0 && (
          <div className="text-center py-8 text-sm text-gray-400 border-2 border-dashed border-gray-200 rounded-xl">
            No tickets here
          </div>
        )}
      </div>
    </div>
  );
};

export default KanbanColumn;
