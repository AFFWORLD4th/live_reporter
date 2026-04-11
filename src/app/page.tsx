'use client'

import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Bell, Search, TrendingUp, ChevronRight, 
  ArrowUp, Play, Heart, Bookmark, Share2, Mail, 
  MapPin, Calendar, Clock, Eye 
} from 'lucide-react';

const SocialIcon = ({ type }: { type: string }) => {
  const icons: { [key: string]: React.ReactNode } = {
    facebook: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
    ),
    twitter: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
    ),
    instagram: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
    ),
    youtube: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
    )
  };
  return icons[type] || null;
};

export default function ConsumerNewsHome() {
  const [marketData, setMarketData] = useState<any>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [bookmarks, setBookmarks] = useState<number[]>([]);
  const [pollVote, setPollVote] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/market')
      .then(res => res.json())
      .then(data => setMarketData(data))
      .catch(err => console.error('Market data fetch error:', err));

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);

    const saved = localStorage.getItem('gn_bookmarks');
    if (saved) setBookmarks(JSON.parse(saved));

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleBookmark = (id: number) => {
    const newBookmarks = bookmarks.includes(id) 
      ? bookmarks.filter(b => b !== id) 
      : [...bookmarks, id];
    setBookmarks(newBookmarks);
    localStorage.setItem('gn_bookmarks', JSON.stringify(newBookmarks));
  };

  const categories = [
    'Trending', 'Top News', 'General', 'Business', 'Tech', 'Health', 'Sports', 'Entertainment', 'Travel', 'Lifestyle', 'Education'
  ];

  const sidebarNews = [
    { 
      title: 'Nagpur Metro reaches historic ridership milestone this festive season', 
      id: 1,
      img: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=150&q=80',
      time: '2h ago'
    },
    { 
      title: 'New Multi-speciality Hospital to open in Civil Lines by 2026', 
      id: 2,
      img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&q=80',
      time: '4h ago'
    },
    { 
      title: 'Maharashtra Govt approves special fund for Nagpur Airport expansion', 
      id: 3,
      img: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=150&q=80',
      time: '6h ago'
    },
    { 
      title: 'City schools prepare for the upcoming Vidarbha level Science Quiz', 
      id: 4,
      img: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=150&q=80',
      time: '8h ago'
    },
  ];

  const popularNews = [
    { title: 'Top 5 weekend getaways within 100km of Nagpur', id: 20 },
    { title: 'Why real estate prices in MIHAN are skyrocketing', id: 21 },
    { title: 'New Orange Express flight schedule announced', id: 22 },
  ];

  const galleryItems = [
    { id: 1, title: 'Futala Lake Fountain', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=402&q=80' },
    { id: 2, title: 'Zero Mile Pillar', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=402&q=80' },
    { id: 3, title: 'Metro Architecture', img: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=402&q=80' },
    { id: 4, title: 'Tadoba Safari', img: 'https://images.unsplash.com/photo-1472396961695-1ad7a82efe12?w=402&q=80' },
    { id: 5, title: 'Ganesh Chaturthi', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=402&q=80' },
    { id: 6, title: 'Ambazari Lake', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=402&q=80' },
  ];

  const carouselNews = [
    { 
      id: 10,
      img: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=800&q=80',
      title: 'Breaking: Historical find during Nagpur Metro excavation',
      category: 'CITY HISTORY'
    },
    { 
      id: 11,
      img: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&q=80',
      title: 'Top tech companies eyeing Nagpur for new offices',
      category: 'BUSINESS'
    },
    { 
      id: 12,
      img: 'https://images.unsplash.com/photo-1510076857177-74701a0a5447?w=800&q=80',
      title: 'Exploring the lush green gardens of Seminary Hills',
      category: 'LIFESTYLE'
    },
  ];

  const reels = [
    { id: 1, title: 'Morning walk at Futala Lake', plays: '12K', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80' },
    { id: 2, title: 'Nagpur Food Festival Highlights', plays: '45K', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80' },
    { id: 3, title: 'Metro Station Architecture', plays: '8K', img: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=400&q=80' },
    { id: 4, title: 'The Tiger Capital Vibes', plays: '22K', img: 'https://images.unsplash.com/photo-1472396961695-1ad7a82efe12?w=400&q=80' },
    { id: 5, title: 'Rainy Day in Civil Lines', plays: '15K', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' },
  ];

  const trendingTags = ['#NagpurMetro', '#SmartCity', '#VidarbhaHeat', '#MIHAN', '#OrangeCity', '#CricketInNagpur'];

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* Breaking News Flash Bar */}
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

      <div className={`drawer-overlay ${isDrawerOpen ? 'open' : ''}`} onClick={toggleDrawer} />
      
      <div className={`mobile-drawer ${isDrawerOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <img src="/newslogo.png" alt="Logo" style={{ height: '40px' }} />
          <button onClick={toggleDrawer} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#333' }}>
            <X size={24} />
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
          <div style={{ padding: '0.5rem 0', fontWeight: 800, color: '#8b0000', fontSize: '0.9rem' }}>MAIN MENU</div>
          {categories.map(cat => (
            <a key={cat} href="#" className="drawer-link" onClick={toggleDrawer}>
              {cat}
            </a>
          ))}
          <div style={{ padding: '1.5rem 0 0.5rem', fontWeight: 800, color: '#8b0000', fontSize: '0.9rem' }}>YOUR LIBRARY</div>
          <a href="#" className="drawer-link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Bookmark size={18} /> Bookmarks ({bookmarks.length})
          </a>
        </div>
        <div style={{ marginTop: '2rem', borderTop: '1px solid #eee', paddingTop: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '1rem', color: '#666' }}>
            <SocialIcon type="facebook" />
            <SocialIcon type="twitter" />
            <SocialIcon type="instagram" />
            <SocialIcon type="youtube" />
          </div>
        </div>
      </div>

      <div className="ticker-container">
        <div className="ticker-track">
          {[1, 2].map((i) => (
            <React.Fragment key={i}>
              <div className="ticker-item">
                <span className="ticker-label">SENSEX</span>
                <span className="price-up">{marketData?.indices?.sensex || '74,320.30'}</span>
              </div>
              <div className="ticker-item">
                <span className="ticker-label">NIFTY 50</span>
                <span className="price-up">{marketData?.indices?.nifty || '22,453.30'}</span>
              </div>
              <div className="ticker-item">
                <span className="ticker-label">Gold (24K)</span>
                <span className="ticker-value">₹{marketData?.commodities?.gold?.toLocaleString() || '72,450'}</span>
              </div>
              <div className="ticker-item">
                <span className="ticker-label">Silver</span>
                <span className="ticker-value">₹{marketData?.commodities?.silver?.toLocaleString() || '84,200'}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <header>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button className="mobile-menu-btn" onClick={toggleDrawer} title="Menu">
            <Menu size={28} />
          </button>
          <div className="branding">
            <img src="/newslogo.png" alt="Good Morning Nagpur" />
          </div>
        </div>

        <div className="header-center">
           <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', color: '#666', marginBottom: '8px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={10} /> Nagpur, MH</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={10} /> {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span>
           </div>
           <div className="header-banner">
              DAILY EDITION • PREMIUM NEWS PORTAL
           </div>
        </div>

        <div className="header-right" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
           <div className="header-icons" style={{ display: 'flex', gap: '1.2rem', color: '#666' }}>
              <Search size={20} style={{ cursor: 'pointer' }} />
              <div style={{ position: 'relative' }}>
                <Bell size={20} style={{ cursor: 'pointer' }} />
                <span style={{ position: 'absolute', top: '-5px', right: '-5px', width: '8px', height: '8px', background: 'red', borderRadius: '50%' }}></span>
              </div>
           </div>
           <button className="advertise-btn">ADVERTISE</button>
        </div>
      </header>

      <nav>
        <div className="nav-links">
          {categories.map(cat => (
            <a key={cat} href="#">{cat}</a>
          ))}
        </div>
      </nav>

      <div className="wisdom-strip">
        <div className="wisdom-label">Daily Wisdom Drop</div>
        <div className="wisdom-text">
           "Knowledge is power. Information is liberating. Education is the premise of progress." — Nagpur Daily Wisdom.
        </div>
      </div>

      <div className="main-container">
        <div className="featured-story">
           <img src="https://images.unsplash.com/photo-1546422904-90eab23c3d7e?w=1200&q=80" alt="Featured News" />
           <div className="overlay">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span className="badge" style={{ background: '#8b0000', padding: '4px 12px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '1px' }}>LATEST</span>
                <div style={{ display: 'flex', gap: '0.8rem' }}>
                  <button onClick={() => toggleBookmark(999)} style={{ background: 'none', border: 'none', color: bookmarks.includes(999) ? '#ffcc00' : 'white', cursor: 'pointer' }}>
                    <Bookmark size={20} fill={bookmarks.includes(999) ? '#ffcc00' : 'none'} />
                  </button>
                  <Share2 size={20} style={{ cursor: 'pointer' }} />
                </div>
              </div>
              <h2 style={{ marginTop: '1rem', lineHeight: 1.2, fontSize: '2.5rem', fontWeight: 800 }}>Vidarbha Heatwave Alert: IMD predicts record highs for Nagpur and districts.</h2>
              <div style={{ marginTop: '15px', color: '#efeff4', display: 'flex', gap: '1.5rem', fontSize: '0.85rem' }}>
                 <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Clock size={14} /> 5 MIN READ</span>
                 <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Calendar size={14} /> APRIL 11, 2026</span>
              </div>
           </div>
        </div>

        <div className="trending-sidebar">
           <div className="section-head">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <TrendingUp size={18} color="#8b0000" />
                <h2>Trending</h2>
              </div>
              <div className="line"></div>
           </div>
           <div className="latest-list">
              {sidebarNews.map(news => (
                <div key={news.id} className="list-item">
                   <div style={{ minWidth: '80px', height: '80px', borderRadius: '8px', overflow: 'hidden' }}>
                      <img src={news.img} alt={news.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                   </div>
                   <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer' }}>{news.title}</h3>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
                        <span style={{ fontSize: '0.7rem', color: '#999', textTransform: 'uppercase' }}>{news.time} • 2 MIN READ</span>
                      </div>
                   </div>
                </div>
              ))}
           </div>

           {/* Popular List Section */}
           <div className="section-head" style={{ marginTop: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Eye size={18} color="#8b0000" />
                <h2>Most Read</h2>
              </div>
              <div className="line"></div>
           </div>
           <div className="popular-list">
              {popularNews.map(item => (
                <div key={item.id} className="popular-item">
                   <h3 style={{ fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer' }}>{item.title}</h3>
                </div>
              ))}
           </div>

           {/* Poll Widget */}
           <div className="poll-widget">
              <h3 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#8b0000', textAlign: 'center' }}>CITY POLL</h3>
              <p style={{ fontSize: '0.8rem', color: '#333', marginTop: '12px', textAlign: 'center', fontWeight: 600 }}>Do you support the new Metro extension to Kanhan?</p>
              <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['Strongly Support', 'Maybe / Undecided', 'Oppose'].map(opt => (
                  <button 
                    key={opt} 
                    className="poll-option" 
                    style={{ width: '100%', ...(pollVote === opt ? { background: '#8b0000', color: 'white' } : {}) }}
                    onClick={() => setPollVote(opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {pollVote && <p style={{ fontSize: '0.75rem', color: '#8b0000', marginTop: '12px', textAlign: 'center', fontWeight: 700, animation: 'pulse 1s infinite' }}>Thank you for voting!</p>}
           </div>
        </div>
      </div>

      {/* Reels Section */}
      <section className="reels-section">
         <div className="section-head" style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Play size={20} fill="#fff" />
              <h2 style={{ color: '#fff' }}>Nagpur Reels</h2>
            </div>
            <div className="line" style={{ background: '#333' }}></div>
         </div>
         <div className="reels-container">
            {reels.map(reel => (
              <div key={reel.id} className="reel-card">
                 <img src={reel.img} alt={reel.title} />
                 <div className="reel-overlay">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '5px' }}>
                      <Eye size={12} color="#fff" />
                      <span style={{ fontSize: '0.7rem', color: '#fff' }}>{reel.plays}</span>
                    </div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>{reel.title}</h4>
                 </div>
                 <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.5)', borderRadius: '50%', padding: '5px' }}>
                    <Heart size={16} color="#fff" />
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* Editor's Choice Section (Horizontal Scroll Override) */}
      <div style={{ padding: '4rem 4rem 2rem' }} className="mobile-padding">
         <div className="section-head">
            <h2>Editor's Choice</h2>
            <div className="line"></div>
         </div>
         <div className="horizontal-scroll">
            {carouselNews.map((news, i) => (
              <div className="scroll-card" key={i}>
                 <div style={{ position: 'relative' }}>
                    <img src={news.img} alt={news.title} />
                    <button onClick={() => toggleBookmark(news.id)} style={{ position: 'absolute', top: '10px', right: '10px', background: 'white', border: 'none', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
                      <Bookmark size={16} color={bookmarks.includes(news.id) ? '#8b0000' : '#666'} fill={bookmarks.includes(news.id) ? '#8b0000' : 'none'} />
                    </button>
                 </div>
                 <div className="scroll-card-body">
                    <span style={{ fontSize: '0.7rem', color: '#8b0000', fontWeight: 800 }}>{news.category}</span>
                    <h3 style={{ marginTop: '8px', fontSize: '1.1rem', cursor: 'pointer' }}>{news.title}</h3>
                    <p style={{ marginTop: '8px', fontSize: '0.85rem', color: '#666' }}>Comprehensive analysis of the most important developments in Nagpur City this week.</p>
                    <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', color: '#8b0000', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer' }}>
                        SEE ARTICLE <ChevronRight size={16} />
                      </div>
                    </div>
                 </div>
              </div>
            ))}
         </div>
      </div>

      {/* Media Gallery Section */}
      <section style={{ padding: '2rem 4rem' }} className="mobile-padding">
         <div className="section-head">
            <h2>Photo Gallery</h2>
            <div className="line"></div>
         </div>
         <div className="media-gallery">
            {galleryItems.map(item => (
              <div key={item.id} className="gallery-item">
                 <img src={item.img} alt={item.title} />
                 <div className="gallery-overlay">
                    <span style={{ color: 'white', fontSize: '0.8rem', fontWeight: 700 }}>{item.title}</span>
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* Market Mover Cards */}
      <section className="market-movers-section">
         <div className="section-head">
            <h2>Market Snapshot</h2>
            <div className="line"></div>
         </div>
         <div className="market-movers-grid">
            <div className="market-card">
               <h4 style={{ fontWeight: 800, marginBottom: '1rem', color: '#2e7d32' }}>TOP GAINERS</h4>
               {[
                 { sym: 'RELIANCE', c: '+2.4%', p: '2,940.00' },
                 { sym: 'HDFC BANK', c: '+1.8%', p: '1,540.30' },
                 { sym: 'TCS', c: '+1.5%', p: '3,845.00' }
               ].map(h => (
                 <div key={h.sym} className="market-item">
                    <span style={{ fontWeight: 700 }}>{h.sym}</span>
                    <div style={{ textAlign: 'right' }}>
                       <div className="price-up">{h.c}</div>
                    </div>
                 </div>
               ))}
            </div>
            <div className="market-card">
               <h4 style={{ fontWeight: 800, marginBottom: '1rem', color: '#d32f2f' }}>TOP LOSERS</h4>
               {[
                 { sym: 'INFY', c: '-1.4%', p: '1,420.00' },
                 { sym: 'WIPRO', c: '-0.8%', p: '480.30' }
               ].map(h => (
                 <div key={h.sym} className="market-item">
                    <span style={{ fontWeight: 700 }}>{h.sym}</span>
                    <div style={{ textAlign: 'right' }}>
                       <div className="price-down">{h.c}</div>
                    </div>
                 </div>
               ))}
            </div>
            <div className="market-card">
               <h4 style={{ fontWeight: 800, marginBottom: '1rem', color: '#333' }}>COMMODITIES</h4>
               {[
                 { sym: 'BRENT CRUDE', c: '-0.4%', p: '84.12' },
                 { sym: 'GOLD', c: '+0.2%', p: '72,450' }
               ].map(h => (
                 <div key={h.sym} className="market-item">
                    <span style={{ fontWeight: 700 }}>{h.sym}</span>
                    <div style={{ textAlign: 'right' }}>
                       <div className={h.c.startsWith('+') ? 'price-up' : 'price-down'}>{h.c}</div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Author Section */}
      <div className="main-container" style={{ paddingTop: 0 }}>
         <div className="author-profile-card">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80" className="author-avatar" alt="Reporter" />
            <div>
               <h4 style={{ fontWeight: 800, fontSize: '1.1rem' }}>Rahul Sharma</h4>
               <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '4px' }}>Senior Investigative Reporter covering city politics and urban development.</p>
               <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                  <button style={{ fontSize: '0.75rem', padding: '4px 12px', borderRadius: '100px', background: '#fdf2f2', border: '1px solid #fee2e2', color: '#8b0000', fontWeight: 700 }}>FOLLOW</button>
               </div>
            </div>
         </div>
      </div>

      {/* Newsletter Section */}
      <section className="newsletter-section">
         <div className="newsletter-glass">
            <Mail size={32} color="#fff" style={{ margin: '0 auto 1.5rem', display: 'block' }} />
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '10px' }}>Join the Nagpur Insider</h2>
            <p style={{ opacity: 0.9 }}>Get the latest Nagpur updates delivered to your inbox every morning.</p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
               <input type="email" placeholder="Your email..." className="newsletter-input" />
               <button className="advertise-btn" style={{ background: '#fff', color: '#8b0000', marginTop: '1.5rem' }}>SUBSCRIBE</button>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #eee', padding: '4rem 2rem', background: '#fbfbfb' }}>
         <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem' }}>
            <div>
               <h4 style={{ fontWeight: 800, marginBottom: '1.5rem', color: '#8b0000' }}>GOOD MORNING NAGPUR</h4>
               <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>Sustainable local journalism for the heart of India.</p>
               <div style={{ display: 'flex', gap: '1rem', color: '#666', marginTop: '2rem' }}>
                  <SocialIcon type="facebook" />
                  <SocialIcon type="twitter" />
                  <SocialIcon type="instagram" />
                  <SocialIcon type="youtube" />
               </div>
            </div>
            <div>
               <h4 style={{ fontSize: '0.8rem', fontWeight: 800, marginBottom: '1rem' }}>CATEGORIES</h4>
               <div className="footer-links" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '0.85rem', color: '#666' }}>
                  {categories.slice(0, 6).map(c => <span key={c} style={{ cursor: 'pointer' }}>{c}</span>)}
               </div>
            </div>
            <div>
               <h4 style={{ fontSize: '0.8rem', fontWeight: 800, marginBottom: '1rem' }}>SUPPORT</h4>
               <div style={{ fontSize: '0.85rem', color: '#666', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span>Privacy Policy</span>
                  <span>Terms of Service</span>
                  <span>Advertise with Us</span>
               </div>
            </div>
         </div>
         <div style={{ textAlign: 'center', marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #eee', fontSize: '0.8rem', color: '#999' }}>
           © {new Date().getFullYear()} GOODMORNING NAGPUR • ALL RIGHTS RESERVED
         </div>
      </footer>

      {showBackToTop && (
        <button onClick={scrollToTop} className="back-to-top-hover" style={{ position: 'fixed', bottom: '2rem', right: '2rem', width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#8b0000', color: 'white', border: 'none', boxShadow: '0 8px 24px rgba(139, 0, 0, 0.4)', cursor: 'pointer', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ArrowUp size={24} />
        </button>
      )}

      <style jsx>{`
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: #ccc; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #8b0000; }
        .back-to-top-hover { transition: transform 0.3s ease; }
        .back-to-top-hover:hover { transform: translateY(-5px); }
        @media (max-width: 768px) {
          .mobile-padding { padding: 4rem 1rem 2rem !important; }
          .featured-story h2 { fontSize: 1.8rem !important; }
        }
      `}</style>
    </div>
  );
}
