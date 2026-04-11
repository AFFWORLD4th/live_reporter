'use client'

import React from 'react';
import Link from 'next/link';
import { SocialIcon } from './SocialIcon';
import { categories } from '@/lib/newsData';

export const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid #eee', padding: '4rem 2rem', background: '#fbfbfb' }}>
       <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem' }}>
          <div>
             <h4 style={{ fontWeight: 800, marginBottom: '1.5rem', color: '#8b0000' }}>GOOD MORNING NAGPUR</h4>
             <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>Sustainable local journalism for the heart of India. Empowering Nagpur with real-time news and transparent media.</p>
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
                {categories.slice(0, 10).map(c => <Link key={c} href={`/category/${c.toLowerCase()}`}>{c}</Link>)}
             </div>
          </div>
          <div>
             <h4 style={{ fontSize: '0.8rem', fontWeight: 800, marginBottom: '1rem' }}>SUPPORT</h4>
             <div style={{ fontSize: '0.85rem', color: '#666', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms of Service</Link>
                <Link href="/advertise">Advertise with Us</Link>
                <Link href="/contact">Contact Support</Link>
             </div>
          </div>
       </div>
       <div style={{ textAlign: 'center', marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #eee', fontSize: '0.8rem', color: '#999' }}>
         © {new Date().getFullYear()} GOODMORNING NAGPUR • INDEPENDENT MEDIA PORTAL
       </div>
    </footer>
  );
};
