import { useState } from 'react';
import { Link2, Copy, Check, Users, Gift, TrendingUp } from 'lucide-react';
import '../../styles/ReferralPanel.css';

function ReferralPanel() {
  const [copied, setCopied] = useState(false);
  const referralLink = 'https://lumabrains.io/ref/LB-X7K2M9';

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stats = [
    { icon: Users, label: 'Total Invites', value: '24' },
    { icon: Gift, label: 'Rewards Earned', value: '1,200 $LB' },
    { icon: TrendingUp, label: 'Active Referrals', value: '18' },
  ];

  return (
    <div className="referral-panel">
      <div className="referral-header">
        <Link2 size={20} />
        <h3>Referral System</h3>
      </div>

      <div className="referral-link-box">
        <span className="referral-link-label">Your Referral Link</span>
        <div className="referral-link-input">
          <input type="text" value={referralLink} readOnly />
          <button className="copy-btn" onClick={handleCopy}>
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>

      <div className="referral-stats">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="ref-stat">
              <Icon size={18} className="ref-stat-icon" />
              <span className="ref-stat-value">{stat.value}</span>
              <span className="ref-stat-label">{stat.label}</span>
            </div>
          );
        })}
      </div>

      <button className="share-btn">Share & Earn More</button>
    </div>
  );
}

export default ReferralPanel;
