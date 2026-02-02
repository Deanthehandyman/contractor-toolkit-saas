// Multi-State Lead Generator Database
// Serves Ark-La-Tex region first, then expands to neighboring states
// States: Texas, Oklahoma, Louisiana, Arkansas, New Mexico
// Also supports virtual leads

export const REGIONS = {
  // PRIMARY REGION - Ark-La-Tex
  'ARK_LA_TEX': {
    name: 'Ark-La-Tex (East Texas/AR/LA Border)',
    cities: ['Texarkana', 'Marshall', 'Longview', 'Henderson', 'Gladewater'],
    state: 'TX',
    priority: 1,
    description: 'Arkansas-Louisiana-Texas border region - PRIMARY FOCUS'
  },
  
  // NEIGHBORING STATES - CLOSE
  'EAST_TEXAS': {
    name: 'East Texas',
    cities: ['Tyler', 'Jacksonville', 'Rusk', 'Palestine', 'Nacogdoches'],
    state: 'TX',
    priority: 2,
    description: 'East Texas piney woods region'
  },
  'NORTH_LOUISIANA': {
    name: 'North Louisiana',
    cities: ['Monroe', 'Shreveport', 'Morehouse', 'Ouachita'],
    state: 'LA',
    priority: 3,
    description: 'Northern Louisiana bordering Texas'
  },
  'SOUTH_ARKANSAS': {
    name: 'South Arkansas',
    cities: ['El Dorado', 'Camden', 'Magnolia', 'Hope'],
    state: 'AR',
    priority: 3,
    description: 'Southern Arkansas near Texas border'
  },
  'SE_OKLAHOMA': {
    name: 'Southeast Oklahoma',
    cities: ['Durant', 'Atoka', 'Hugo', 'Idabel'],
    state: 'OK',
    priority: 4,
    description: 'Southeast Oklahoma near Texas border'
  },
  
  // SECONDARY EXPANSION
  'NORTH_TEXAS': {
    name: 'North Texas',
    cities: ['Dallas', 'Fort Worth', 'Arlington', 'Denton'],
    state: 'TX',
    priority: 5,
    description: 'Dallas-Fort Worth metroplex'
  },
  'CENTRAL_TEXAS': {
    name: 'Central Texas',
    cities: ['Austin', 'Waco', 'San Antonio', 'New Braunfels'],
    state: 'TX',
    priority: 6,
    description: 'Central Hill Country region'
  },
  'NEW_MEXICO': {
    name: 'New Mexico',
    cities: ['Albuquerque', 'Santa Fe', 'Las Cruces', 'Roswell'],
    state: 'NM',
    priority: 7,
    description: 'New Mexico - Western expansion'
  },
  
  // VIRTUAL LEADS
  'VIRTUAL': {
    name: 'Virtual/Remote',
    cities: ['Online', 'Remote', 'Multi-State'],
    state: 'VIRTUAL',
    priority: 8,
    description: 'Virtual handyman services available nationwide'
  }
};

export const generateMultiStateLeads = () => {
  // Ark-La-Tex Priority Leads (PRIMARY)
  const arkLaTexLeads = [
    {
      id: 'ALT001',
      name: 'James Robert',
      phone: '903-555-0101',
      email: 'james.robert@email.com',
      city: 'Texarkana',
      state: 'TX',
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
      id: 'ALT002',
      name: 'Patricia Williams',
      phone: '903-555-0102',
      email: 'patricia.w@email.com',
      city: 'Marshall',
      state: 'TX',
      region: 'ARK_LA_TEX',
      address: '5678 Oak Drive, Marshall, TX 75672',
      service: 'Home Remodel',
      budget: '$8,000-$12,000',
      timeframe: '2-3 weeks',
      source: 'Facebook',
      qualityScore: 'Hot',
      status: 'New',
      notes: 'Kitchen and bathroom remodel'
    }
  ];

  // Louisiana Leads
  const louisianaLeads = [
    {
      id: 'LA001',
      name: 'Michael Davis',
      phone: '318-555-0301',
      email: 'michael.d@email.com',
      city: 'Monroe',
      state: 'LA',
      region: 'NORTH_LOUISIANA',
      address: '900 Madison Street, Monroe, LA 71201',
      service: 'Plumbing',
      budget: '$2,000-$3,500',
      timeframe: '1 week',
      source: 'Craigslist',
      qualityScore: 'Warm',
      status: 'New',
      notes: 'Water heater replacement needed'
    }
  ];

  // Arkansas Leads
  const arkansasLeads = [
    {
      id: 'AR001',
      name: 'Susan Martinez',
      phone: '870-555-0401',
      email: 'susan.m@email.com',
      city: 'El Dorado',
      state: 'AR',
      region: 'SOUTH_ARKANSAS',
      address: '345 Pine Road, El Dorado, AR 71730',
      service: 'Deck Building',
      budget: '$4,000-$6,000',
      timeframe: '3 weeks',
      source: 'Facebook',
      qualityScore: 'Warm',
      status: 'New',
      notes: 'Backyard deck construction'
    }
  ];

  // Oklahoma Leads
  const oklahomaLeads = [
    {
      id: 'OK001',
      name: 'David Wilson',
      phone: '580-555-0501',
      email: 'david.w@email.com',
      city: 'Durant',
      state: 'OK',
      region: 'SE_OKLAHOMA',
      address: '567 Oak Avenue, Durant, OK 74701',
      service: 'Window Replacement',
      budget: '$5,000-$8,000',
      timeframe: '4 weeks',
      source: 'Google Local',
      qualityScore: 'Warm',
      status: 'New',
      notes: 'Replace all windows in home'
    }
  ];

  // Virtual Leads
  const virtualLeads = [
    {
      id: 'VIRT001',
      name: 'John Smith',
      phone: '555-888-0001',
      email: 'john.smith@remote.com',
      city: 'Online',
      state: 'VIRTUAL',
      region: 'VIRTUAL',
      address: 'Remote - Multiple States',
      service: 'Virtual Consulting',
      budget: '$1,500-$3,000',
      timeframe: 'Flexible',
      source: 'Email',
      qualityScore: 'Warm',
      status: 'New',
      notes: 'Remote project management and consulting'
    }
  ];

  return {
    arkLaTexLeads,
    louisianaLeads,
    arkansasLeads,
    oklahomaLeads,
    virtualLeads,
    totalLeads: arkLaTexLeads.length + louisianaLeads.length + arkansasLeads.length + oklahomaLeads.length + virtualLeads.length,
    allLeads: [...arkLaTexLeads, ...louisianaLeads, ...arkansasLeads, ...oklahomaLeads, ...virtualLeads]
  };
};

export const filterLeadsByQuality = (leads, quality) => {
  return leads.filter(lead => lead.qualityScore === quality);
};

export const filterLeadsByRegion = (leads, region) => {
  return leads.filter(lead => lead.region === region);
};

export const filterLeadsByState = (leads, state) => {
  return leads.filter(lead => lead.state === state);
};

export const sortLeadsByBudget = (leads) => {
  return leads.sort((a, b) => {
    const aMin = parseInt(a.budget.split('-')[0].replace(/[^0-9]/g, ''));
    const bMin = parseInt(b.budget.split('-')[0].replace(/[^0-9]/g, ''));
    return bMin - aMin;
  });
};

export const sortLeadsByPriority = (leads) => {
  return leads.sort((a, b) => {
    const priorityA = REGIONS[a.region]?.priority || 999;
    const priorityB = REGIONS[b.region]?.priority || 999;
    return priorityA - priorityB;
  });
};

// Legacy export for backward compatibility
export const generateTexasLeads = generateMultiStateLeads;
