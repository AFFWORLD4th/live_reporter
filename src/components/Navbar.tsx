'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Bell, Search, MapPin, Calendar, Bookmark } from 'lucide-react';
import { SocialIcon } from './SocialIcon';
import { categories } from '@/lib/newsData';

export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [bookmarksCount, setBookmarksCount] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('gn_bookmarks');
    if (saved) {
      setBookmarksCount(JSON.parse(saved).length);
    }
    
    // Listen for storage changes to update count across pages
    const handleStorage = () => {
      const updated = localStorage.getItem('gn_bookmarks');
      if (updated) setBookmarksCount(JSON.parse(updated).length);
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      <div className={`drawer-overlay ${isDrawerOpen ? 'open' : ''}`} onClick={toggleDrawer} />
      
      <div className={`mobile-drawer ${isDrawerOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <Link href="/" onClick={toggleDrawer}>
            <img src="/newslogo.png" alt="Logo" style={{ height: '40px' }} />
          </Link>
          <button onClick={toggleDrawer} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#333' }}>
            <X size={24} />
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
          <div style={{ padding: '0.5rem 0', fontWeight: 800, color: '#8b0000', fontSize: '0.9rem' }}>MAIN MENU</div>
          {categories.map(cat => (
            <Link key={cat} href={`/category/${cat.toLowerCase().replace(' ', '-')}`} className="drawer-link" onClick={toggleDrawer}>
              {cat}
            </Link>
          ))}
          <div style={{ padding: '1.5rem 0 0.5rem', fontWeight: 800, color: '#8b0000', fontSize: '0.9rem' }}>YOUR LIBRARY</div>
          <Link href="/bookmarks" className="drawer-link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }} onClick={toggleDrawer}>
            <Bookmark size={18} /> Bookmarks ({bookmarksCount})
          </Link>
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

      <header>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button className="mobile-menu-btn" onClick={toggleDrawer} title="Menu">
            <Menu size={28} />
          </button>
          <div className="branding">
            <Link href="/">
              <img src="/newslogo.png" alt="Good Morning Nagpur" />
            </Link>
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
            <Link key={cat} href={`/category/${cat.toLowerCase().replace(' ', '-')}`}>{cat}</Link>
          ))}
        </div>
      </nav>
    </>
  );
};
