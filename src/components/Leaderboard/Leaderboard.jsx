import { Trophy, Medal, Award } from 'lucide-react';
import '../../styles/Leaderboard.css';

function Leaderboard({ data }) {
  const getRankIcon = (rank) => {
    if (rank === 1) return <Trophy size={18} className="rank-icon gold" />;
    if (rank === 2) return <Medal size={18} className="rank-icon silver" />;
    if (rank === 3) return <Award size={18} className="rank-icon bronze" />;
    return <span className="rank-number">{rank}</span>;
  };

  return (
    <div className="leaderboard">
      <div className="leaderboard-header">
        <Trophy size={20} />
        <h3>Top Contributors</h3>
      </div>
      <div className="leaderboard-list">
        {data.map((user, idx) => (
          <div key={idx} className={`lb-item ${idx < 3 ? 'top-three' : ''}`}>
            <div className="lb-rank">{getRankIcon(idx + 1)}</div>
            <div className="lb-avatar">
              <span>{user.name.charAt(0)}</span>
            </div>
            <div className="lb-info">
              <span className="lb-name">{user.name}</span>
              <span className="lb-address">{user.address}</span>
            </div>
            <div className="lb-points">
              <span className="lb-points-value">{user.points.toLocaleString()}</span>
              <span className="lb-points-label">$LB</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;
