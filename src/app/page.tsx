'use client'

import React, { useState, useEffect } from 'react';
import { Play, Eye, Heart, Mail, ChevronRight } from 'lucide-react';
import { articles, reels, galleryItems } from '@/lib/newsData';
import { NewsCard, Sidebar } from '@/components/NewsComponents';

export default function ConsumerNewsHome() {
  const [bookmarks, setBookmarks] = useState<number[]>([]);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('gn_bookmarks');
    if (saved) setBookmarks(JSON.parse(saved));

    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleBookmark = (id: number) => {
    const newBookmarks = bookmarks.includes(id) 
      ? bookmarks.filter(b => b !== id) 
      : [...bookmarks, id];
    setBookmarks(newBookmarks);
    localStorage.setItem('gn_bookmarks', JSON.stringify(newBookmarks));
    // Trigger storage event for other components (like Navbar)
    window.dispatchEvent(new Event('storage'));
  };

  const featured = articles.find(a => a.isBreaking) || articles[0];
  const trending = articles.slice(1, 5);
  const editorsChoice = articles.slice(0, 4);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      
      <div className="wisdom-strip">
        <div className="wisdom-label">Daily Wisdom Drop</div>
        <div className="wisdom-text">
           "Knowledge is power. Information is liberating. Education is the premise of progress." — Nagpur Daily Wisdom.
        </div>
      </div>

      <div className="main-container">
        <NewsCard 
          article={featured} 
          isFeatured 
          isBookmarked={bookmarks.includes(featured.id)}
          onToggleBookmark={toggleBookmark}
        />
        <Sidebar trendingNews={trending} />
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

      {/* Editor's Choice Section */}
      <div style={{ padding: '4rem 4rem 2rem' }} className="mobile-padding">
         <div className="section-head">
            <h2>Editor's Choice</h2>
            <div className="line"></div>
         </div>
         <div className="horizontal-scroll">
            {editorsChoice.map((news) => (
              <NewsCard 
                key={news.id} 
                article={news} 
                isBookmarked={bookmarks.includes(news.id)}
                onToggleBookmark={toggleBookmark}
              />
            ))}
         </div>
      </div>

      {/* Media Gallery */}
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

      {/* Market Snapshot Recap (The Chart part is kept unique here for now) */}
      <section className="market-movers-section">
         <div className="section-head">
            <h2>Market Analysis</h2>
            <div className="line"></div>
         </div>
         <div className="market-chart-container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', color: '#fff', position: 'relative', zIndex: 2 }}>
               <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800 }}>NIFTY 50</h4>
                  <p style={{ color: '#2e7d32', fontWeight: 700 }}>22,453.30 (+1.23%)</p>
               </div>
               <div style={{ textAlign: 'right', fontSize: '0.7rem', opacity: 0.6 }}>
                  LIVE TRADING VIEW • NAGPUR DATA CENTER
               </div>
            </div>
            <div className="chart-line"></div>
         </div>
      </section>

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

      <style jsx>{`
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: #ccc; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #8b0000; }
        @media (max-width: 768px) {
          .mobile-padding { padding: 4rem 1rem 2rem !important; }
        }
      `}</style>
    </div>
  );
}
