import { useState } from 'react';
import { User, Wallet, Copy, Check, Star, Shield, Award, TrendingUp, Calendar, Link2, Edit3, Camera, Zap, Gift, Vote, BookOpen, MessageCircle, Trophy } from 'lucide-react';
import { useWallet } from '../../context/WalletContext';
import '../../styles/Profile.css';

function Profile() {
  const { wallet } = useWallet();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('activity');

  const handleCopy = () => {
    navigator.clipboard.writeText(wallet.address || '0x7B2F...F7E4');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const badges = [
    { name: 'Early Adopter', icon: Zap, color: '#7B2FF7', desc: 'Joined during launch phase' },
    { name: 'Referral Pro', icon: Link2, color: '#00D4FF', desc: 'Referred 20+ users' },
    { name: 'Voter', icon: Vote, color: '#00E68A', desc: 'Voted on 10+ proposals' },
    { name: 'Scholar', icon: BookOpen, color: '#FFB800', desc: 'Completed 5 courses' },
    { name: 'Social Star', icon: MessageCircle, color: '#FF4D6A', desc: '100+ community interactions' },
    { name: 'Top 100', icon: Trophy, color: '#FFD700', desc: 'Ranked in top 100 users' },
  ];

  const activities = [
    { icon: Gift, text: 'Claimed 250 $LB from referral rewards', time: '2 hours ago', color: '#00E68A' },
    { icon: Vote, text: 'Voted YES on Treasury Allocation proposal', time: '4 hours ago', color: '#7B2FF7' },
    { icon: Link2, text: 'New user joined via your referral link', time: '6 hours ago', color: '#00D4FF' },
    { icon: BookOpen, text: 'Completed "Web3 Fundamentals" course', time: '1 day ago', color: '#FFB800' },
    { icon: Zap, text: 'Earned 100 XP from daily mission', time: '1 day ago', color: '#7B2FF7' },
    { icon: MessageCircle, text: 'Your post received 42 likes', time: '2 days ago', color: '#FF4D6A' },
    { icon: Gift, text: 'Claimed Season 1 airdrop: 500 $LB', time: '3 days ago', color: '#00E68A' },
    { icon: Star, text: 'Reached Reputation Level 8', time: '4 days ago', color: '#FFD700' },
  ];

  const stats = [
    { label: 'Reputation Score', value: '892', max: 1000, icon: Star, color: '#FFB800' },
    { label: 'XP Points', value: '4,250', max: 5000, icon: Zap, color: '#7B2FF7' },
    { label: 'Level', value: '8', max: null, icon: TrendingUp, color: '#00D4FF' },
  ];

  const nfts = [
    { name: 'Genesis Member #247', rarity: 'Legendary', color: '#FFD700' },
    { name: 'DAO Voter Badge', rarity: 'Rare', color: '#7B2FF7' },
    { name: 'Season 1 Participant', rarity: 'Common', color: '#00D4FF' },
  ];

  return (
    <div className="profile-page">
      <div className="profile-banner">
        <div className="profile-banner-bg"></div>
        <div className="profile-banner-content">
          <div className="profile-avatar-large">
            <span>{wallet.address ? wallet.address.charAt(2) : 'U'}</span>
            <button className="avatar-edit-btn"><Camera size={14} /></button>
          </div>
          <div className="profile-identity">
            <div className="profile-name-row">
              <h1>LumaUser</h1>
              <button className="edit-profile-btn"><Edit3 size={14} /> Edit Profile</button>
            </div>
            <div className="profile-wallet-row">
              <Wallet size={14} />
              <span className="profile-wallet-address">{wallet.address || '0x7B2F...F7E4'}</span>
              <button className="profile-copy-btn" onClick={handleCopy}>
                {copied ? <Check size={14} /> : <Copy size={14} />}
              </button>
            </div>
            <p className="profile-bio">Web3 enthusiast and LUMA BRAINS early adopter. Building the future of decentralized intelligence.</p>
            <div className="profile-meta">
              <span><Calendar size={14} /> Joined Dec 2024</span>
              <span><Link2 size={14} /> Referral ID: LB-X7K2M9</span>
              <span><Shield size={14} /> Level 8</span>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-stats-row">
        {[
          { label: 'Token Balance', value: `${wallet.balance?.toLocaleString() || '12,450'} $LB`, icon: Wallet },
          { label: 'Referrals', value: '24', icon: Link2 },
          { label: 'Proposals Voted', value: '12', icon: Vote },
          { label: 'Courses Done', value: '5', icon: BookOpen },
          { label: 'Posts', value: '38', icon: MessageCircle },
          { label: 'Badges', value: '6', icon: Award },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="profile-stat-item">
              <Icon size={18} className="profile-stat-icon" />
              <span className="profile-stat-value">{s.value}</span>
              <span className="profile-stat-label">{s.label}</span>
            </div>
          );
        })}
      </div>

      <div className="profile-gamification">
        {stats.map((s) => {
          const Icon = s.icon;
          const pct = s.max ? (parseInt(s.value.replace(',', '')) / s.max) * 100 : null;
          return (
            <div key={s.label} className="gamification-card">
              <div className="gamification-header">
                <Icon size={20} style={{ color: s.color }} />
                <span className="gamification-label">{s.label}</span>
              </div>
              <span className="gamification-value" style={{ color: s.color }}>{s.value}</span>
              {pct !== null && (
                <div className="gamification-bar">
                  <div className="gamification-bar-fill" style={{ width: `${pct}%`, background: s.color }}></div>
                </div>
              )}
              {s.max && <span className="gamification-max">{s.value} / {s.max.toLocaleString()}</span>}
            </div>
          );
        })}
      </div>

      <div className="profile-tabs">
        {['activity', 'badges', 'nfts'].map((tab) => (
          <button
            key={tab}
            className={`profile-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="profile-tab-content">
        {activeTab === 'activity' && (
          <div className="profile-activity-list animate-fade-in">
            {activities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="profile-activity-item">
                  <div className="profile-activity-icon" style={{ background: `${item.color}15`, color: item.color }}>
                    <Icon size={16} />
                  </div>
                  <div className="profile-activity-info">
                    <span className="profile-activity-text">{item.text}</span>
                    <span className="profile-activity-time">{item.time}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'badges' && (
          <div className="profile-badges-grid animate-fade-in">
            {badges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div key={badge.name} className="profile-badge-card">
                  <div className="profile-badge-icon" style={{ background: `${badge.color}15`, color: badge.color }}>
                    <Icon size={24} />
                  </div>
                  <h4>{badge.name}</h4>
                  <p>{badge.desc}</p>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'nfts' && (
          <div className="profile-nfts-grid animate-fade-in">
            {nfts.map((nft) => (
              <div key={nft.name} className="profile-nft-card">
                <div className="nft-preview" style={{ background: `linear-gradient(135deg, ${nft.color}40, ${nft.color}10)` }}>
                  <Award size={40} style={{ color: nft.color }} />
                </div>
                <div className="nft-info">
                  <h4>{nft.name}</h4>
                  <span className="nft-rarity" style={{ color: nft.color }}>{nft.rarity}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
