import { useState } from 'react';
import { Users, Search, Plus, MessageCircle, TrendingUp, Globe, Shield, Zap, BookOpen, Code2, Coins, Crown, ArrowRight } from 'lucide-react';
import '../../styles/Communities.css';

function Communities() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filters = ['all', 'popular', 'new', 'defi', 'nft', 'dev'];

  const groups = [
    { name: 'DeFi Traders Hub', desc: 'Advanced DeFi strategies, yield farming tips, and liquidity pool discussions.', members: 2450, posts: 340, icon: Coins, color: '#7B2FF7', category: 'defi', trending: true },
    { name: 'NFT Creators Collective', desc: 'Share NFT art, learn creation tools, and discuss the NFT marketplace.', members: 1820, posts: 215, icon: Globe, color: '#00D4FF', category: 'nft', trending: true },
    { name: 'Web3 Developers', desc: 'Smart contract development, Solidity, Rust, and Web3 tooling discussions.', members: 3100, posts: 560, icon: Code2, color: '#00E68A', category: 'dev', trending: false },
    { name: 'LUMA DAO Council', desc: 'Official governance discussion group for protocol proposals and voting strategy.', members: 980, posts: 125, icon: Shield, color: '#FFB800', category: 'popular', trending: false },
    { name: 'Crypto Beginners', desc: 'A friendly space for newcomers to learn about crypto, wallets, and blockchain.', members: 4200, posts: 890, icon: BookOpen, color: '#FF4D6A', category: 'new', trending: true },
    { name: 'Whale Watchers', desc: 'Track large wallet movements, market analysis, and trading signals.', members: 1560, posts: 280, icon: TrendingUp, color: '#7B2FF7', category: 'defi', trending: false },
    { name: 'Token Economics Lab', desc: 'Deep dives into tokenomics, supply models, and incentive structures.', members: 720, posts: 95, icon: Zap, color: '#00D4FF', category: 'defi', trending: false },
    { name: 'Community Leaders', desc: 'For verified community moderators, ambassadors, and ecosystem contributors.', members: 340, posts: 60, icon: Crown, color: '#FFD700', category: 'popular', trending: false },
  ];

  const discussions = [
    { title: 'Best yield farming strategies for 2025?', author: 'CryptoKing', group: 'DeFi Traders Hub', replies: 24, time: '3h ago' },
    { title: 'How to create your first NFT collection', author: 'Web3Alice', group: 'NFT Creators', replies: 18, time: '5h ago' },
    { title: 'Proposal discussion: Should we increase staking rewards?', author: 'DAOBuilder', group: 'LUMA DAO Council', replies: 42, time: '8h ago' },
    { title: 'Solidity vs Rust for smart contracts — which to learn?', author: 'ChainMaster', group: 'Web3 Developers', replies: 31, time: '12h ago' },
  ];

  const filtered = groups.filter((g) => {
    const matchFilter = activeFilter === 'all' || g.category === activeFilter || (activeFilter === 'popular' && g.members > 1500) || (activeFilter === 'new' && g.category === 'new');
    const matchSearch = g.name.toLowerCase().includes(search.toLowerCase()) || g.desc.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <div className="communities-page">
      <div className="communities-header">
        <div className="communities-header-icon"><Users size={28} /></div>
        <h1 className="animate-fade-in">Community <span className="gradient-text">Groups</span></h1>
        <p className="animate-fade-in-up stagger-1">Join groups, share knowledge, and grow with the community.</p>
      </div>

      <div className="communities-actions animate-fade-in-up stagger-2">
        <div className="communities-search">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search communities..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="create-group-btn">
          <Plus size={18} /> Create Group
        </button>
      </div>

      <div className="communities-filters animate-fade-in-up stagger-2">
        {filters.map((f) => (
          <button
            key={f}
            className={`community-filter ${activeFilter === f ? 'active' : ''}`}
            onClick={() => setActiveFilter(f)}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="communities-layout">
        <div className="communities-main">
          <div className="communities-grid animate-fade-in-up stagger-3">
            {filtered.map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.name} className="community-card">
                  {group.trending && <div className="trending-badge"><TrendingUp size={12} /> Trending</div>}
                  <div className="community-card-top">
                    <div className="community-icon" style={{ background: `${group.color}15`, color: group.color }}>
                      <Icon size={24} />
                    </div>
                    <div className="community-card-info">
                      <h3>{group.name}</h3>
                      <div className="community-stats-mini">
                        <span><Users size={13} /> {group.members.toLocaleString()}</span>
                        <span><MessageCircle size={13} /> {group.posts} posts</span>
                      </div>
                    </div>
                  </div>
                  <p className="community-desc">{group.desc}</p>
                  <button className="join-community-btn">
                    Join Group <ArrowRight size={15} />
                  </button>
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="no-communities">No communities found matching your search.</div>
          )}
        </div>

        <div className="communities-sidebar animate-fade-in-up stagger-4">
          <div className="discussions-card">
            <div className="discussions-header">
              <MessageCircle size={18} />
              <h3>Hot Discussions</h3>
            </div>
            <div className="discussions-list">
              {discussions.map((d, idx) => (
                <div key={idx} className="discussion-item">
                  <h4>{d.title}</h4>
                  <div className="discussion-meta">
                    <span>{d.author}</span>
                    <span>·</span>
                    <span>{d.replies} replies</span>
                    <span>·</span>
                    <span>{d.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="community-invite-card">
            <Zap size={24} />
            <h3>Invite Friends</h3>
            <p>Grow the community and earn rewards for every new member.</p>
            <button className="invite-btn">Share Invite Link</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Communities;
