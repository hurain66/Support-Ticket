import React from 'react';
import KanbanColumn from './KanbanColumn';
import * as FiIcons from 'react-icons/fi';

const KanbanBoard = ({ tickets }) => {
  const newTickets = tickets.filter((t) => t.status === 'new');
  const inProgressTickets = tickets.filter((t) => t.status === 'in-progress');
  const resolvedTickets = tickets.filter((t) => t.status === 'resolved');

  return (
    <div className="flex gap-4 overflow-x-auto pb-4 h-full min-h-[500px]">
      <KanbanColumn
        title="New"
        tickets={newTickets}
        icon={FiIcons.FiInbox}
        colorClass="bg-blue-100 text-blue-600"
      />
      <KanbanColumn
        title="In Progress"
        tickets={inProgressTickets}
        icon={FiIcons.FiLoader}
        colorClass="bg-purple-100 text-purple-600"
      />
      <KanbanColumn
        title="Resolved"
        tickets={resolvedTickets}
        icon={FiIcons.FiCheckCircle}
        colorClass="bg-green-100 text-green-600"
      />
    </div>
  );
};

export default KanbanBoard;
