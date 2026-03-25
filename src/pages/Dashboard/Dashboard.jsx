import { Wallet, Users, Gift, TrendingUp, Calendar, Star } from 'lucide-react';
import { useWallet } from '../../context/WalletContext';
import StatsCard from '../../components/StatsCard/StatsCard';
import TokenPanel from '../../components/TokenPanel/TokenPanel';
import ReferralPanel from '../../components/ReferralPanel/ReferralPanel';
import ActivityFeed from '../../components/ActivityFeed/ActivityFeed';
import '../../styles/Dashboard.css';

function Dashboard() {
  const { wallet } = useWallet();

  const stats = [
    { icon: Wallet, label: 'Token Balance', value: `${wallet.balance.toLocaleString()} $LB`, change: '+12.5%', changeType: 'positive', iconColor: '#7B2FF7' },
    { icon: Users, label: 'Total Referrals', value: '24', change: '+3', changeType: 'positive', iconColor: '#00D4FF' },
    { icon: Gift, label: 'Rewards Claimed', value: '1,850 $LB', change: '+250', changeType: 'positive', iconColor: '#00E68A' },
    { icon: TrendingUp, label: 'Reputation Score', value: '892', change: '+15', changeType: 'positive', iconColor: '#FFB800' },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="dashboard-welcome">
          <h1 className="animate-fade-in">Welcome back</h1>
          <p className="wallet-display animate-fade-in-up stagger-1">{wallet.address || 'Connect your wallet'}</p>
        </div>
        <div className="dashboard-date animate-fade-in">
          <Calendar size={16} />
          <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span>
        </div>
      </div>

      <div className="stats-grid animate-fade-in-up stagger-2">
        {stats.map((stat) => (
          <StatsCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-main animate-fade-in-up stagger-3">
          <TokenPanel />
        </div>
        <div className="dashboard-side animate-fade-in-up stagger-4">
          <ReferralPanel />
        </div>
      </div>

      <div className="dashboard-bottom animate-fade-in-up stagger-5">
        <ActivityFeed />
        <div className="profile-card">
          <div className="profile-card-header">
            <Star size={20} />
            <h3>Your Profile</h3>
          </div>
          <div className="profile-card-avatar">
            <span>{wallet.address ? wallet.address.charAt(2) : 'U'}</span>
          </div>
          <div className="profile-detail">
            <span className="profile-detail-label">Wallet ID</span>
            <span className="profile-detail-value">{wallet.address || 'Not connected'}</span>
          </div>
          <div className="profile-detail">
            <span className="profile-detail-label">Join Date</span>
            <span className="profile-detail-value">Dec 15, 2024</span>
          </div>
          <div className="profile-detail">
            <span className="profile-detail-label">Referral ID</span>
            <span className="profile-detail-value">LB-X7K2M9</span>
          </div>
          <div className="profile-detail">
            <span className="profile-detail-label">Reputation</span>
            <div className="reputation-bar">
              <div className="reputation-fill" style={{ width: '89%' }}></div>
            </div>
            <span className="profile-detail-value">892 / 1000</span>
          </div>
          <div className="profile-badges">
            <span className="badge">Early Adopter</span>
            <span className="badge">Referral Pro</span>
            <span className="badge">Voter</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
