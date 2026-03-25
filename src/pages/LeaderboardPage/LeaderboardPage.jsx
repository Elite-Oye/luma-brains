import { Trophy, Medal, Award, TrendingUp, Users, Coins, Star, Crown } from 'lucide-react';
import '../../styles/LeaderboardPage.css';

function LeaderboardPage() {
  const topUsers = [
    { rank: 1, name: 'CryptoKing', address: '0x7B2F...F7E4', points: 15200, referrals: 48, badge: 'Diamond' },
    { rank: 2, name: 'Web3Alice', address: '0x3A1C...D8B2', points: 12800, referrals: 35, badge: 'Platinum' },
    { rank: 3, name: 'DeFiMax', address: '0x9E5D...A1C7', points: 11500, referrals: 31, badge: 'Platinum' },
    { rank: 4, name: 'ChainMaster', address: '0x4F2A...B3E1', points: 9800, referrals: 27, badge: 'Gold' },
    { rank: 5, name: 'BlockNinja', address: '0x1D8C...F4A2', points: 8200, referrals: 22, badge: 'Gold' },
    { rank: 6, name: 'TokenSage', address: '0x6E3B...C9D5', points: 7600, referrals: 19, badge: 'Gold' },
    { rank: 7, name: 'MetaVerse', address: '0x2C7A...E1F8', points: 6900, referrals: 16, badge: 'Silver' },
    { rank: 8, name: 'DAOBuilder', address: '0x8F1D...A4B7', points: 6200, referrals: 14, badge: 'Silver' },
    { rank: 9, name: 'SmartNode', address: '0x5A9E...D2C6', points: 5800, referrals: 12, badge: 'Silver' },
    { rank: 10, name: 'LumaFan', address: '0x3B4C...F7A1', points: 5100, referrals: 10, badge: 'Bronze' },
  ];

  const getRankDisplay = (rank) => {
    if (rank === 1) return <Crown size={20} className="rank-crown gold" />;
    if (rank === 2) return <Medal size={20} className="rank-medal silver" />;
    if (rank === 3) return <Award size={20} className="rank-award bronze" />;
    return <span className="rank-num">#{rank}</span>;
  };

  const getBadgeClass = (badge) => badge.toLowerCase();

  return (
    <div className="lb-page">
      <div className="lb-page-header">
        <Trophy size={28} className="lb-header-icon" />
        <h1 className="animate-fade-in">Leader<span className="gradient-text">board</span></h1>
        <p className="animate-fade-in-up stagger-1">Top contributors in the LUMA BRAINS ecosystem.</p>
      </div>

      <div className="lb-stats-row animate-fade-in-up stagger-2">
        <div className="lb-stat-card">
          <Users size={22} />
          <div>
            <span className="lb-stat-value">12,450</span>
            <span className="lb-stat-label">Total Participants</span>
          </div>
        </div>
        <div className="lb-stat-card">
          <Coins size={22} />
          <div>
            <span className="lb-stat-value">2.4M $LB</span>
            <span className="lb-stat-label">Total Distributed</span>
          </div>
        </div>
        <div className="lb-stat-card">
          <TrendingUp size={22} />
          <div>
            <span className="lb-stat-value">+18%</span>
            <span className="lb-stat-label">Growth This Week</span>
          </div>
        </div>
      </div>

      <div className="lb-podium animate-fade-in-up stagger-3">
        {topUsers.slice(0, 3).map((user) => (
          <div key={user.rank} className={`podium-card rank-${user.rank}`}>
            <div className="podium-rank">{getRankDisplay(user.rank)}</div>
            <div className="podium-avatar">{user.name.charAt(0)}</div>
            <h3 className="podium-name">{user.name}</h3>
            <span className="podium-address">{user.address}</span>
            <span className="podium-points">{user.points.toLocaleString()} $LB</span>
            <span className={`podium-badge ${getBadgeClass(user.badge)}`}>
              <Star size={12} /> {user.badge}
            </span>
          </div>
        ))}
      </div>

      <div className="lb-table animate-fade-in-up stagger-4">
        <div className="lb-table-header">
          <span className="lb-col-rank">Rank</span>
          <span className="lb-col-user">User</span>
          <span className="lb-col-points">Points</span>
          <span className="lb-col-refs">Referrals</span>
          <span className="lb-col-badge">Badge</span>
        </div>
        {topUsers.map((user) => (
          <div key={user.rank} className="lb-table-row">
            <span className="lb-col-rank">{getRankDisplay(user.rank)}</span>
            <div className="lb-col-user">
              <div className="lb-user-avatar">{user.name.charAt(0)}</div>
              <div>
                <span className="lb-user-name">{user.name}</span>
                <span className="lb-user-address">{user.address}</span>
              </div>
            </div>
            <span className="lb-col-points">{user.points.toLocaleString()}</span>
            <span className="lb-col-refs">{user.referrals}</span>
            <span className={`lb-col-badge-tag ${getBadgeClass(user.badge)}`}>
              {user.badge}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeaderboardPage;