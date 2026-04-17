import React from 'react';
import * as FiIcons from 'react-icons/fi';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import Badge from './Badge';
import Avatar from './Avatar';

const TicketCard = ({ ticket }) => {
  const getSlaColor = (status) => {
    switch (status) {
      case 'breached': return 'text-red-600 bg-red-50';
      case 'warning': return 'text-orange-600 bg-orange-50';
      default: return 'text-gray-500 bg-gray-50';
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'critical': return <Badge variant="red">Critical</Badge>;
      case 'high': return <Badge variant="orange">High</Badge>;
      case 'medium': return <Badge variant="blue">Medium</Badge>;
      default: return <Badge variant="default">Low</Badge>;
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm hover:shadow-md hover:border-purple-300 transition-all cursor-pointer group"
    >
      <div className="flex justify-between items-start mb-2">
        <span className="text-xs font-semibold text-purple-600">{ticket.id}</span>
        <div className={`text-xs px-2 py-1 rounded-md font-medium flex items-center gap-1 ${getSlaColor(ticket.slaStatus)}`}>
          <SafeIcon icon={ticket.slaStatus === 'breached' ? FiIcons.FiAlertCircle : FiIcons.FiClock} className="text-[10px]" />
          {ticket.sla}
        </div>
      </div>

      <h4 className="text-sm font-semibold text-gray-800 mb-1 group-hover:text-purple-700 transition-colors line-clamp-1">
        {ticket.title}
      </h4>
      <p className="text-xs text-gray-500 line-clamp-2 mb-3">
        {ticket.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {getPriorityBadge(ticket.priority)}
        {ticket.tags.map((tag) => (
          <Badge key={tag} variant="purple" className="capitalize">
            {tag.replace('-', ' ')}
          </Badge>
        ))}
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-gray-50">
        <div className="flex items-center gap-2">
          <Avatar initial={ticket.requester.initial} name={ticket.requester.name} size="sm" colorClass={ticket.requester.color} />
          <span className="text-xs text-gray-600 font-medium truncate max-w-[100px]">{ticket.requester.name}</span>
        </div>
        <span className="text-[10px] text-gray-400">{ticket.time}</span>
      </div>
    </motion.div>
  );
};

export default TicketCard;
