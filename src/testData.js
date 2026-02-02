// Test data for Lead Finder system - Dallas handyman service leads

export const testLeads = [
  {
    id: 1,
    name: 'John Smith',
    phone: '214-555-0101',
    email: 'john.smith@email.com',
    address: '1234 Oak Street, Dallas, TX 75001',
    source: 'Facebook',
    service: 'Roof Repair',
    qualityScore: 'Hot',
    status: 'New',
    dateAdded: '2024-01-15',
    notes: 'Needs roof inspection'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    phone: '214-555-0102',
    email: 'sarah.j@email.com',
    address: '5678 Elm Avenue, Dallas, TX 75002',
    source: 'Google Maps',
    service: 'Kitchen Remodel',
    qualityScore: 'Warm',
    status: 'Contacted',
    dateAdded: '2024-01-14',
    notes: 'Interested in cabinet work'
  },
  {
    id: 3,
    name: 'Michael Brown',
    phone: '214-555-0103',
    email: 'mbrown@email.com',
    address: '9012 Pine Road, Dallas, TX 75003',
    source: 'Craigslist',
    service: 'Flooring Installation',
    qualityScore: 'Cold',
    status: 'Lost',
    dateAdded: '2024-01-13',
    notes: 'Budget constraints'
  }
];

export const testContactExtraction = {
  facebook_leads: [
    { name: 'Alice Williams', phone: '214-555-0201', service: 'Bathroom Tile' },
    { name: 'David Martinez', phone: '214-555-0202', service: 'Drywall Repair' }
  ],
  craigslist_leads: [
    { name: 'Emma Davis', phone: '214-555-0301', service: 'Door Installation' },
    { name: 'Frank Wilson', phone: '214-555-0302', service: 'Deck Building' }
  ],
  google_maps_reviews: [
    { name: 'Grace Lee', phone: '214-555-0401', service: 'Paint Job' },
    { name: 'Henry Taylor', phone: '214-555-0402', service: 'Fence Repair' }
  ]
};

export const conversionMetrics = {
  totalLeadsGenerated: 45,
  leadsContacted: 32,
  leadsWon: 8,
  conversionRate: 0.25,
  avgLeadValue: 2500,
  totalPipelineValue: 20000
};
