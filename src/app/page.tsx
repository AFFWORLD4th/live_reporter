'use client'

import React from 'react';

export default function ConsumerNewsHome() {
  const [marketData, setMarketData] = React.useState<any>(null);

  React.useEffect(() => {
    fetch('/api/market')
      .then(res => res.json())
      .then(data => setMarketData(data))
      .catch(err => console.error('Market data fetch error:', err));
  }, []);

  const categories = [
    'Trending', 'Top News', 'General', 'Business', 'Tech', 'Health', 'Sports', 'Entertainment', 'Travel', 'Lifestyle', 'Education'
  ];

  const sidebarNews = [
    { title: 'Nagpur Metro reaches historic ridership milestone this festive season', id: 1 },
    { title: 'New Multi-speciality Hospital to open in Civil Lines by 2026', id: 2 },
    { title: 'Maharashtra Govt approves special fund for Nagpur Airport expansion', id: 3 },
    { title: 'City schools prepare for the upcoming Vidarbha level Science Quiz', id: 4 },
  ];

  const carouselNews = [
    { 
      img: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=800&q=80',
      title: 'Breaking: Historical find during Nagpur Metro excavation',
      category: 'CITY HISTORY'
    },
    { 
      img: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&q=80',
      title: 'Top tech companies eyeing Nagpur for new offices',
      category: 'BUSINESS'
    },
    { 
      img: 'https://images.unsplash.com/photo-1510076857177-74701a0a5447?w=800&q=80',
      title: 'Exploring the lush green gardens of Seminary Hills',
      category: 'LIFESTYLE'
    },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      {/* Running Market Ticker */}
      <div className="ticker-container">
        <div className="ticker-track">
          <div className="ticker-item">
            <span className="ticker-label">SENSEX</span>
            <span className="ticker-value">{marketData?.indices?.sensex || '74,320.30'}</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-label">NIFTY 50</span>
            <span className="ticker-value">{marketData?.indices?.nifty || '22,453.30'}</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-label">Gold (24K)</span>
            <span className="ticker-value">₹{marketData?.commodities?.gold?.toLocaleString() || '72,450'}</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-label">Silver</span>
            <span className="ticker-value">₹{marketData?.commodities?.silver?.toLocaleString() || '84,200'}</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-label">Brent Crude</span>
            <span className="ticker-value">${marketData?.commodities?.crude || '84.12'}</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-label">Petrol (Nagpur)</span>
            <span className="ticker-value">₹{marketData?.commodities?.petrol || '104.05'}</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-label">BTC/INR</span>
            <span className="ticker-value">₹{marketData?.crypto?.bitcoin?.toLocaleString() || '5,500,000'}</span>
          </div>
          {/* Duplicate for seamless loop if needed, or track logic */}
        </div>
      </div>

      {/* Header Area */}
      <header>
        <div className="branding">
           <img src="/newslogo.png" alt="Good Morning Nagpur" />
        </div>

        <div className="header-center">
           <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', color: '#666', marginBottom: '8px' }}>
              <span>Nagpur, MH</span>
              <span>{marketData?.weather?.condition || 'Cloudy'} • {marketData?.weather?.temp || '28'}°C</span>
           </div>
           <div className="header-banner">
              DAILY EDITION • {new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })}
           </div>
        </div>

        <div className="header-right">
           <button className="advertise-btn">ADVERTISE</button>
        </div>
      </header>

      {/* Nav */}
      <nav>
        <div className="nav-links">
          {categories.map(cat => (
            <a key={cat} href="#">{cat}</a>
          ))}
        </div>
      </nav>

      {/* Wisdom Strip */}
      <div className="wisdom-strip">
        <div className="wisdom-label">Daily Wisdom Drop</div>
        <div className="wisdom-text">
           "The best way to predict the future is to create it." — A morning update from the heart of Nagpur.
        </div>
      </div>

      {/* Hero Content */}
      <div className="main-container">
        <div className="featured-story">
           <img src="https://images.unsplash.com/photo-1546422904-90eab23c3d7e?w=1200&q=80" alt="Featured News" />
           <div className="overlay">
              <span className="badge">LATEST</span>
              <h2>Vidarbha Heatwave Alert: IMD predicts record highs for Nagpur and surrounding districts this April.</h2>
              <p style={{ marginTop: '10px', fontSize: '1rem', color: '#efeff4' }}>Authorities issue health guidelines as temperatures expected to cross 44°C mark. City schools advised for early sessions.</p>
           </div>
        </div>

        <div>
           <div className="section-head">
              <h2>Trending</h2>
              <div className="line"></div>
           </div>
           <div className="latest-list">
              {sidebarNews.map(news => (
                <div key={news.id} className="list-item">
                   <div style={{ width: '80px', height: '80px', background: '#f0f0f0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#bbb' }}>IMG</div>
                   <div>
                      <h3>{news.title}</h3>
                      <span style={{ fontSize: '0.75rem', color: '#999', marginTop: '4px', display: 'block' }}>2 HOURS AGO • 2 MIN READ</span>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* General News Section */}
      <div style={{ padding: '0 4rem 4rem' }}>
         <div className="section-head">
            <h2>General News</h2>
            <div className="line"></div>
         </div>
         <div className="horizontal-scroll">
            {carouselNews.map((news, i) => (
              <div className="scroll-card" key={i}>
                 <img src={news.img} alt={news.title} />
                 <div className="scroll-card-body">
                    <span style={{ fontSize: '0.7rem', color: '#8b0000', fontWeight: 800 }}>{news.category}</span>
                    <h3 style={{ marginTop: '8px', fontSize: '1.1rem' }}>{news.title}</h3>
                    <p style={{ marginTop: '8px', fontSize: '0.85rem', color: '#666' }}>Brief summary of the news story and what you need to know about this event in Nagpur City.</p>
                 </div>
              </div>
            ))}
         </div>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #eee', padding: '4rem', background: '#fbfbfb' }}>
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4rem' }}>
            <div>
               <h4 style={{ fontWeight: 800, marginBottom: '1.5rem', color: '#8b0000' }}>GOOD MORNING NAGPUR</h4>
               <p style={{ fontSize: '0.9rem', color: '#666' }}>Your trusted source for local journalism, city updates, and market intelligence from the heart of Nagpur.</p>
            </div>
            <div>
               <h4 style={{ fontSize: '0.8rem', fontWeight: 800, marginBottom: '1rem' }}>QUICK LINKS</h4>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: '#666' }}>
                  <span>About Us</span>
                  <span>Categories</span>
                  <span>Gallery</span>
                  <span>Contact</span>
               </div>
            </div>
            <div>
               <h4 style={{ fontSize: '0.8rem', fontWeight: 800, marginBottom: '1rem' }}>OUR CHANNELS</h4>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: '#666' }}>
                  <span>WhatsApp Channel</span>
                  <span>Telegram alerts</span>
                  <span>Daily Newsletter</span>
                  <span>Press Releases</span>
               </div>
            </div>
            <div>
               <h4 style={{ fontSize: '0.8rem', fontWeight: 800, marginBottom: '1rem' }}>CONTACT</h4>
               <div style={{ fontSize: '0.85rem', color: '#666' }}>
                  <p>MIHAN SEZ, Nagpur</p>
                  <p>contact@goodmorningnagpur.news</p>
               </div>
            </div>
         </div>
         <div style={{ textAlign: 'center', marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #eee', fontSize: '0.8rem', color: '#999' }}>
           © 2026 GOODMORNING NAGPUR • ALL RIGHTS RESERVED
         </div>
      </footer>
    </div>
  );
}
