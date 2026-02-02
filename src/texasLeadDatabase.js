// Texas Lead Generator Database
// Serves all of Texas with emphasis on Ark-La-Tex region (East Texas)
// Regions: Ark-La-Tex, North Texas, East Texas, Central Texas, South Texas, West Texas

export const REGIONS = {
  'ARK_LA_TEX': {
    name: 'Ark-La-Tex (East Texas)',
    cities: ['Texarkana', 'Marshall', 'Longview', 'Henderson', 'Gladewater'],
    priority: 1,
    description: 'Arkansas-Louisiana-Texas border region'
  },
  'EAST_TEXAS': {
    name: 'East Texas',
    cities: ['Tyler', 'Jacksonville', 'Rusk', 'Palestine', 'Nacogdoches'],
    priority: 2,
    description: 'East Texas piney woods region'
  },
  'NORTH_TEXAS': {
    name: 'North Texas',
    cities: ['Dallas', 'Fort Worth', 'Arlington', 'Denton', 'Plano'],
    priority: 3,
    description: 'Dallas-Fort Worth metroplex'
  },
  'CENTRAL_TEXAS': {
    name: 'Central Texas',
    cities: ['Austin', 'Waco', 'San Antonio', 'New Braunfels', 'Pflugerville'],
    priority: 4,
    description: 'Central Hill Country region'
  },
  'SOUTH_TEXAS': {
    name: 'South Texas',
    cities: ['Corpus Christi', 'Brownsville', 'Laredo', 'Alice', 'Kingsville'],
    priority: 5,
    description: 'South Texas coastal and border regions'
  },
  'WEST_TEXAS': {
    name: 'West Texas',
    cities: ['El Paso', 'Midland', 'Odessa', 'Abilene', 'Lubbock'],
    priority: 6,
    description: 'West Texas plains and deserts'
  }
};

export const generateTexasLeads = () => {
  // Ark-La-Tex Region Leads - PRIORITY
  const arkLaTexLeads = [
    {
      id: 'ARK001',
      name: 'James Robert',
      phone: '903-555-0101',
      email: 'james.robert@email.com',
      city: 'Texarkana',
      region: 'ARK_LA_TEX',
      address: '1234 Spruce Street, Texarkana, TX 75501',
      service: 'Roof Repair',
      budget: '$3,000-$5,000',
      timeframe: 'Immediate',
      source: 'Google Maps',
      qualityScore: 'Hot',
      status: 'New',
      notes: 'Emergency roof damage from storm'
    },
    {
      id: 'ARK002',
      name: 'Patricia Williams',
      phone: '903-555-0102',
      email: 'patricia.w@email.com',
      city: 'Marshall',
      region: 'ARK_LA_TEX',
      address: '5678 Oak Drive, Marshall, TX 75672',
      service: 'Home Remodel',
      budget: '$8,000-$12,000',
      timeframe: '2-3 weeks',
      source: 'Facebook',
      qualityScore: 'Hot',
      status: 'New',
      notes: 'Kitchen and bathroom remodel'
    },
    {
      id: 'ARK003',
      name: 'Michael Thompson',
      phone: '903-555-0103',
      email: 'mthompson@email.com',
      city: 'Longview',
      region: 'ARK_LA_TEX',
      address: '9012 Pine Road, Longview, TX 75601',
      service: 'Deck Building',
      budget: '$4,000-$6,000',
      timeframe: '4-6 weeks',
      source: 'Craigslist',
      qualityScore: 'Warm',
      status: 'New',
      notes: 'Backyard deck construction'
    },
    {
      id: 'ARK004',
      name: 'Susan Martinez',
      phone: '903-555-0104',
      email: 'susan.m@email.com',
      city: 'Henderson',
      region: 'ARK_LA_TEX',
      address: '2468 Elm Street, Henderson, TX 75654',
      service: 'Plumbing Repair',
      budget: '$1,500-$2,500',
      timeframe: 'Same week',
      source: 'Google Local',
      qualityScore: 'Hot',
      status: 'New',
      notes: 'Pipe burst in basement'
    },
    {
      id: 'ARK005',
      name: 'David Lee',
      phone: '903-555-0105',
      email: 'david.lee@email.com',
      city: 'Gladewater',
      region: 'ARK_LA_TEX',
      address: '3690 Cedar Lane, Gladewater, TX 75647',
      service: 'Exterior Painting',
      budget: '$2,000-$3,500',
      timeframe: '3 weeks',
      source: 'Nextdoor',
      qualityScore: 'Warm',
      status: 'New',
      notes: 'House exterior paint job'
    }
  ];

  // East Texas Leads
  const eastTexasLeads = [
    {
      id: 'ET001',
      name: 'Angela Davis',
      phone: '903-555-0201',
      email: 'angela.d@email.com',
      city: 'Tyler',
      region: 'EAST_TEXAS',
      address: '1111 Rose Street, Tyler, TX 75701',
      service: 'Window Replacement',
      budget: '$5,000-$8,000',
      timeframe: '4 weeks',
      source: 'Facebook',
      qualityScore: 'Warm',
      status: 'New',
      notes: 'Replace all windows'
    },
    {
      id: 'ET002',
      name: 'Robert Garcia',
      phone: '903-555-0202',
      email: 'robert.g@email.com',
      city: 'Jacksonville',
      region: 'EAST_TEXAS',
      address: '2222 Maple Drive, Jacksonville, TX 75766',
      service: 'Fence Installation',
      budget: '$3,000-$4,500',
      timeframe: '2-3 weeks',
      source: 'Craigslist',
      qualityScore: 'Warm',
      status: 'New',
      notes: 'Backyard privacy fence'
    }
  ];

  return {
    arkLaTexLeads,
    eastTexasLeads,
    totalLeads: arkLaTexLeads.length + eastTexasLeads.length,
    allLeads: [...arkLaTexLeads, ...eastTexasLeads]
  };
};

export const filterLeadsByQuality = (leads, quality) => {
  return leads.filter(lead => lead.qualityScore === quality);
};

export const filterLeadsByRegion = (leads, region) => {
  return leads.filter(lead => lead.region === region);
};

export const sortLeadsByBudget = (leads) => {
  return leads.sort((a, b) => {
    const aMin = parseInt(a.budget.split('-')[0].replace(/[^0-9]/g, ''));
    const bMin = parseInt(b.budget.split('-')[0].replace(/[^0-9]/g, ''));
    return bMin - aMin;
  });
};
