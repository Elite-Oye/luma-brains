import { useState } from 'react';
import { MessageCircle, Send, Image, Smile, TrendingUp, Hash, Users } from 'lucide-react';
import SocialPost from '../../components/SocialPost/SocialPost';
import '../../styles/SocialFeed.css';

function SocialFeed() {
  const [newPost, setNewPost] = useState('');

  const posts = [
    { author: 'CryptoKing', content: 'Just claimed my airdrop rewards! 500 $LB tokens. The LUMA BRAINS ecosystem is growing fast. Who else is accumulating? 🚀', time: '2h ago', likes: 42, comments: 8, liked: false },
    { author: 'Web3Alice', content: 'Completed the DeFi Deep Dive course on Education Hub. The content quality is amazing. Highly recommend it for anyone looking to understand yield farming and liquidity pools.', time: '4h ago', likes: 28, comments: 5, liked: true },
    { author: 'DeFiMax', content: 'Proposal to increase referral rewards is passing with 93% approval! This is what real community governance looks like. Proud to be part of LUMA BRAINS.', time: '6h ago', likes: 67, comments: 12, liked: false },
    { author: 'ChainMaster', content: 'Building a new tool on the LUMA BRAINS developer portal. The documentation is clean and the API design is solid. Can\'t wait to share what I\'m working on!', time: '8h ago', likes: 35, comments: 7, liked: false },
    { author: 'BlockNinja', content: 'The MarketSquare is going to change everything. P2P trading, knowledge marketplace, and creator monetization all in one place. This is the future of Web3 commerce.', time: '12h ago', likes: 53, comments: 15, liked: true },
  ];

  const trending = [
    { tag: 'LumaBrains', posts: 2400 },
    { tag: 'LBAirdrop', posts: 1800 },
    { tag: 'Web3Education', posts: 1200 },
    { tag: 'DeFi2025', posts: 950 },
    { tag: 'DAOGovernance', posts: 720 },
  ];

  const handlePost = () => {
    if (newPost.trim()) {
      setNewPost('');
    }
  };

  return (
    <div className="social-page">
      <div className="social-content">
        <div className="social-main">
          <div className="social-header">
            <MessageCircle size={24} />
            <h1>Social <span className="gradient-text">Feed</span></h1>
          </div>

          <div className="create-post animate-fade-in-up stagger-1">
            <div className="create-post-input">
              <div className="create-avatar">U</div>
              <textarea
                placeholder="Share something with the community..."
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                rows={3}
              />
            </div>
            <div className="create-post-actions">
              <div className="create-post-tools">
                <button className="tool-btn"><Image size={18} /></button>
                <button className="tool-btn"><Smile size={18} /></button>
              </div>
              <button className="post-submit-btn" onClick={handlePost}>
                <Send size={16} /> Post
              </button>
            </div>
          </div>

          <div className="posts-list">
            {posts.map((post, idx) => (
              <div key={idx} className={`animate-fade-in-up stagger-${idx + 2}`}>
                <SocialPost {...post} />
              </div>
            ))}
          </div>
        </div>

        <div className="social-sidebar animate-fade-in-up stagger-3">
          <div className="trending-card">
            <div className="trending-header">
              <TrendingUp size={18} />
              <h3>Trending</h3>
            </div>
            <div className="trending-list">
              {trending.map((item) => (
                <div key={item.tag} className="trending-item">
                  <Hash size={16} className="hash-icon" />
                  <div className="trending-info">
                    <span className="trending-tag">{item.tag}</span>
                    <span className="trending-count">{item.posts.toLocaleString()} posts</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="suggested-card">
            <div className="suggested-header">
              <Users size={18} />
              <h3>Suggested Groups</h3>
            </div>
            <div className="suggested-list">
              {['DeFi Traders', 'NFT Creators', 'DAO Builders', 'Web3 Devs'].map((group) => (
                <div key={group} className="suggested-item">
                  <div className="suggested-avatar">{group.charAt(0)}</div>
                  <span className="suggested-name">{group}</span>
                  <button className="join-btn">Join</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialFeed;
