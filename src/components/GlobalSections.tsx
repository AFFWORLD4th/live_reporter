'use client'

import React, { useState, useEffect } from 'react';
import { marketSummary } from '@/lib/newsData';

export const MarketTicker = () => {
  return (
    <div className="ticker-container">
      <div className="ticker-track">
        {[1, 2, 3].map((i) => (
          <React.Fragment key={i}>
            <div className="ticker-item">
              <span className="ticker-label">SENSEX</span>
              <span className="price-up">{marketSummary.indices.sensex}</span>
            </div>
            <div className="ticker-item">
              <span className="ticker-label">NIFTY 50</span>
              <span className="price-up">{marketSummary.indices.nifty}</span>
            </div>
            <div className="ticker-item">
              <span className="ticker-label">Gold (24K)</span>
              <span className="ticker-value">₹{marketSummary.commodities.gold.toLocaleString()}</span>
            </div>
            <div className="ticker-item">
              <span className="ticker-label">Silver</span>
              <span className="ticker-value">₹{marketSummary.commodities.silver.toLocaleString()}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export const FlashBar = () => {
  return (
    <div className="flash-bar">
      <span className="flash-label">BREAKING</span>
      <div className="flash-content">
        <div className="flash-track">
          High-performance Live News & Media Portal Proposal for GoodMorning Nagpur is approved! • Nagpur Metro sets new ridership record today • Upcoming Vidarbha level Science Quiz for city schools.
        </div>
      </div>
      <div style={{ display: 'flex', gap: '15px', color: '#8b0000', fontSize: '0.75rem' }}>
        <span>LIVE TV</span>
        <span>E-PAPER</span>
      </div>
    </div>
  );
};
