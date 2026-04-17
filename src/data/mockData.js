export const summaryStats = [
  { id: 1, label: 'Avg Response Time', value: '1h 12m', trend: '-15%', trendType: 'positive', icon: 'FiClock' },
  { id: 2, label: 'Tickets Resolved (Today)', value: '142', trend: '+12%', trendType: 'positive', icon: 'FiCheckCircle' },
  { id: 3, label: 'Customer Satisfaction', value: '4.8/5', trend: '+0.2', trendType: 'positive', icon: 'FiSmile' },
  { id: 4, label: 'SLA Breaches', value: '3', trend: '+1', trendType: 'negative', icon: 'FiAlertTriangle' },
];

export const volumeChartData = {
  categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  series: [
    { name: 'New Tickets', data: [120, 132, 101, 134, 90, 230, 210] },
    { name: 'Resolved', data: [110, 120, 105, 140, 85, 200, 190] }
  ]
};

export const mockTickets = [
  {
    id: 'TKT-8901',
    title: 'Unable to access billing history',
    description: 'When I click on the billing tab, it shows a 500 error page.',
    requester: { name: 'Sarah Jenkins', initial: 'SJ', color: 'bg-blue-100 text-blue-700' },
    status: 'new',
    priority: 'high',
    sla: '45m left',
    slaStatus: 'warning',
    tags: ['billing', 'recurring'],
    time: '12 mins ago'
  },
  {
    id: 'TKT-8902',
    title: 'Feature request: Dark mode',
    description: 'Would love to see a dark mode option for the dashboard.',
    requester: { name: 'Mike Ross', initial: 'MR', color: 'bg-green-100 text-green-700' },
    status: 'new',
    priority: 'low',
    sla: '23h left',
    slaStatus: 'ok',
    tags: ['feature-request'],
    time: '1 hour ago'
  },
  {
    id: 'TKT-8895',
    title: 'API rate limit exceeded frequently',
    description: 'Our application keeps hitting the rate limit even though we upgraded.',
    requester: { name: 'Tech Corp', initial: 'TC', color: 'bg-purple-100 text-purple-700' },
    status: 'in-progress',
    priority: 'critical',
    sla: '0m left',
    slaStatus: 'breached',
    tags: ['api', 'urgent', 'recurring'],
    time: '3 hours ago',
    assignee: 'Alex'
  },
  {
    id: 'TKT-8890',
    title: 'Cannot invite team members',
    description: 'The invite button is greyed out for my admin account.',
    requester: { name: 'Emma Watson', initial: 'EW', color: 'bg-pink-100 text-pink-700' },
    status: 'in-progress',
    priority: 'medium',
    sla: '4h left',
    slaStatus: 'ok',
    tags: ['auth', 'bug'],
    time: '5 hours ago',
    assignee: 'Sam'
  },
  {
    id: 'TKT-8850',
    title: 'Payment failed but deducted from bank',
    description: 'Urgent: Money was deducted but subscription still inactive.',
    requester: { name: 'John Doe', initial: 'JD', color: 'bg-yellow-100 text-yellow-700' },
    status: 'resolved',
    priority: 'high',
    sla: 'Resolved within SLA',
    slaStatus: 'ok',
    tags: ['billing', 'payment'],
    time: '1 day ago',
    assignee: 'Alex'
  }
];
