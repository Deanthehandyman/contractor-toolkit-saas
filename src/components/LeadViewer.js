import React, { useState } from 'react';
import { generateTexasLeads, filterLeadsByQuality, filterLeadsByRegion, sortLeadsByBudget, REGIONS } from '../texasLeadDatabase';
import './LeadViewer.css';

const LeadViewer = () => {
  const [leads, setLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('ARK_LA_TEX');
  const [selectedQuality, setSelectedQuality] = useState('all');
  const [sortBy, setSortBy] = useState('quality');
  const [selectedLead, setSelectedLead] = useState(null);
  const [loadingLeads, setLoadingLeads] = useState(false);

  // Load all leads on component mount
  React.useEffect(() => {
    loadLeads();
  }, []);

  const loadLeads = () => {
    setLoadingLeads(true);
    setTimeout(() => {
      const data = generateTexasLeads();
      setLeads(data.allLeads);
      filterAndSortLeads(data.allLeads, selectedRegion, selectedQuality, sortBy);
      setLoadingLeads(false);
    }, 500);
  };

  const filterAndSortLeads = (allLeads, region, quality, sort) => {
    let result = allLeads;

    if (region !== 'all') {
      result = filterLeadsByRegion(result, region);
    }

    if (quality !== 'all') {
      result = filterLeadsByQuality(result, quality);
    }

    if (sort === 'budget') {
      result = sortLeadsByBudget(result);
    }

    setFilteredLeads(result);
  };

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
    filterAndSortLeads(leads, region, selectedQuality, sortBy);
  };

  const handleQualityChange = (quality) => {
    setSelectedQuality(quality);
    filterAndSortLeads(leads, selectedRegion, quality, sortBy);
  };

  const handleSortChange = (sort) => {
    setSortBy(sort);
    filterAndSortLeads(leads, selectedRegion, selectedQuality, sort);
  };

  const getQualityColor = (quality) => {
    switch(quality) {
      case 'Hot': return '#ff4444';
      case 'Warm': return '#ff9800';
      case 'Cold': return '#2196f3';
      default: return '#666';
    }
  };

  const handleContactLead = (lead) => {
    alert(`Ready to contact ${lead.name} at ${lead.phone}?\n\nBefore sending message.`);
  };

  return (
    <div className="lead-viewer">
      <div className="lead-header">
        <h1>📍 Texas Lead Generator</h1>
        <p>Starting with Ark-La-Tex Region</p>
      </div>

      <div className="controls-panel">
        <div className="control-group">
          <label>Region:</label>
          <select value={selectedRegion} onChange={(e) => handleRegionChange(e.target.value)}>
            <option value="all">All Regions</option>
            {Object.entries(REGIONS).map(([key, value]) => (
              <option key={key} value={key}>{value.name}</option>
            ))}
          </select>
        </div>

        <div className="control-group">
          <label>Lead Quality:</label>
          <select value={selectedQuality} onChange={(e) => handleQualityChange(e.target.value)}>
            <option value="all">All Quality Levels</option>
            <option value="Hot">Hot 🔥</option>
            <option value="Warm">Warm ⚡</option>
            <option value="Cold">Cold ❄️</option>
          </select>
        </div>

        <div className="control-group">
          <label>Sort By:</label>
          <select value={sortBy} onChange={(e) => handleSortChange(e.target.value)}>
            <option value="quality">Quality Score</option>
            <option value="budget">Budget (High to Low)</option>
          </select>
        </div>
      </div>

      <div className="leads-stats">
        <div className="stat-box">
          <span className="stat-number">{filteredLeads.length}</span>
          <span className="stat-label">Leads Found</span>
        </div>
      </div>

      {loadingLeads ? (
        <div className="loading">Loading leads...</div>
      ) : (
        <div className="leads-container">
          {filteredLeads.map((lead) => (
            <div key={lead.id} className="lead-card" onClick={() => setSelectedLead(lead)}>
              <div className="lead-quality" style={{ backgroundColor: getQualityColor(lead.qualityScore) }}>
                {lead.qualityScore}
              </div>
              <h3>{lead.name}</h3>
              <p className="city">{lead.city}, TX • {lead.service}</p>
              <p className="budget">Budget: {lead.budget}</p>
              <p className="notes">{lead.notes}</p>
              <div className="lead-footer">
                <span className="source">{lead.source}</span>
                <button className="preview-btn">View</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedLead && (
        <div className="modal-overlay" onClick={() => setSelectedLead(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedLead(null)}>×</button>
            <h2>{selectedLead.name}</h2>
            <div className="lead-details">
              <p><strong>Phone:</strong> {selectedLead.phone}</p>
              <p><strong>Email:</strong> {selectedLead.email}</p>
              <p><strong>Address:</strong> {selectedLead.address}</p>
              <p><strong>Service:</strong> {selectedLead.service}</p>
              <p><strong>Budget:</strong> {selectedLead.budget}</p>
              <p><strong>Timeframe:</strong> {selectedLead.timeframe}</p>
              <p><strong>Quality:</strong> {selectedLead.qualityScore}</p>
              <p><strong>Notes:</strong> {selectedLead.notes}</p>
            </div>
            <div className="modal-actions">
              <button className="contact-btn" onClick={() => handleContactLead(selectedLead)}>Call Now</button>
              <button className="message-btn">Send Message</button>
              <button className="reject-btn">Skip Lead</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadViewer;
