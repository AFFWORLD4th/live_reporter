'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { TrendingUp, Eye, Bookmark, Share2, Clock, Calendar } from 'lucide-react';
import { Article } from '@/lib/newsData';

export const NewsCard = ({ article, horizontal = false, isFeatured = false, isBookmarked = false, onToggleBookmark }: { 
  article: Article, 
  horizontal?: boolean, 
  isFeatured?: boolean,
  isBookmarked?: boolean,
  onToggleBookmark?: (id: number) => void
}) => {
  if (isFeatured) {
    return (
      <div className="featured-story">
         <img src={article.img} alt={article.title} />
         <div className="overlay">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span className="badge" style={{ background: '#8b0000', padding: '4px 12px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '1px' }}>{article.category}</span>
              <div style={{ display: 'flex', gap: '0.8rem' }}>
                <button onClick={() => onToggleBookmark?.(article.id)} style={{ background: 'none', border: 'none', color: isBookmarked ? '#ffcc00' : 'white', cursor: 'pointer' }}>
                  <Bookmark size={20} fill={isBookmarked ? '#ffcc00' : 'none'} />
                </button>
                <Share2 size={20} style={{ cursor: 'pointer' }} />
              </div>
            </div>
            {/* Floating Social Share Bar */}
            <div className="floating-share">
               <div className="share-btn"><Share2 size={18} /></div>
            </div>
            <Link href={`/article/${article.id}`}>
               <h2 style={{ marginTop: '1rem', lineHeight: 1.2, fontSize: '2.5rem', fontWeight: 800, color: 'white' }}>{article.title}</h2>
            </Link>
            <div style={{ marginTop: '15px', color: '#efeff4', display: 'flex', gap: '1.5rem', fontSize: '0.85rem' }}>
               <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Clock size={14} /> {article.readTime}</span>
               <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Calendar size={14} /> {article.time}</span>
            </div>
         </div>
      </div>
    );
  }

  return (
    <div className={horizontal ? "list-item" : "scroll-card"}>
       <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
          <img src={article.img} alt={article.title} style={{ width: horizontal ? '100px' : '100%', height: horizontal ? '100px' : '200px', objectFit: 'cover' }} />
          {!horizontal && (
            <button onClick={() => onToggleBookmark?.(article.id)} style={{ position: 'absolute', top: '10px', right: '10px', background: 'white', border: 'none', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
              <Bookmark size={16} color={isBookmarked ? '#8b0000' : '#666'} fill={isBookmarked ? '#8b0000' : 'none'} />
            </button>
          )}
       </div>
       <div style={{ padding: horizontal ? '0' : '1rem', flex: 1 }}>
          <span style={{ fontSize: '0.7rem', color: '#8b0000', fontWeight: 800 }}>{article.category}</span>
          <Link href={`/article/${article.id}`}>
             <h3 style={{ marginTop: '4px', fontSize: horizontal ? '0.9rem' : '1.1rem', fontWeight: 700, cursor: 'pointer' }}>{article.title}</h3>
          </Link>
          {!horizontal && <p style={{ marginTop: '8px', fontSize: '0.85rem', color: '#666' }}>{article.excerpt}</p>}
          <div style={{ marginTop: 'auto', paddingTop: '8px', display: 'flex', justifyContent: 'space-between', color: '#999', fontSize: '0.7rem' }}>
            <span>{article.time}</span>
            <span>{article.readTime}</span>
          </div>
       </div>
    </div>
  );
};

export const Sidebar = ({ trendingNews }: { trendingNews: Article[] }) => {
  const [pollVote, setPollVote] = useState<string | null>(null);

  return (
    <div className="trending-sidebar">
       <div className="section-head">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <TrendingUp size={18} color="#8b0000" />
            <h2>Trending</h2>
          </div>
          <div className="line"></div>
       </div>
       <div className="latest-list">
          {trendingNews.map(news => (
            <NewsCard key={news.id} article={news} horizontal />
          ))}
       </div>

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
          {pollVote && <p style={{ fontSize: '0.75rem', color: '#8b0000', marginTop: '12px', textAlign: 'center', fontWeight: 700 }}>Thank you for voting!</p>}
       </div>
    </div>
  );
};
