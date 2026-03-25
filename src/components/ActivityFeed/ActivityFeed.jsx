import { Activity, Gift, Vote, BookOpen, Users, Zap } from 'lucide-react';
import '../../styles/ActivityFeed.css';

function ActivityFeed() {
  const activities = [
    { icon: Gift, type: 'reward', text: 'You earned 250 $LB from referral rewards', time: '2 hours ago', color: 'var(--success)' },
    { icon: Vote, type: 'governance', text: 'New DAO proposal: Community Treasury Allocation', time: '4 hours ago', color: 'var(--accent-primary)' },
    { icon: Users, type: 'referral', text: 'New user joined via your referral link', time: '6 hours ago', color: 'var(--accent-secondary)' },
    { icon: BookOpen, type: 'education', text: 'You completed Web3 Basics course', time: '1 day ago', color: 'var(--warning)' },
    { icon: Zap, type: 'airdrop', text: 'Airdrop claim successful: 100 $LB', time: '2 days ago', color: 'var(--success)' },
  ];

  return (
    <div className="activity-feed">
      <div className="feed-header">
        <Activity size={20} />
        <h3>Recent Activity</h3>
      </div>
      <div className="feed-list">
        {activities.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="feed-item">
              <div className="feed-icon" style={{ background: `${item.color}15`, color: item.color }}>
                <Icon size={16} />
              </div>
              <div className="feed-info">
                <span className="feed-text">{item.text}</span>
                <span className="feed-time">{item.time}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ActivityFeed;
