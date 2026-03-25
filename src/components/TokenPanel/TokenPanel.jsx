import { Coins, TrendingUp, ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react';
import { useWallet } from '../../context/WalletContext';
import '../../styles/TokenPanel.css';

function TokenPanel() {
  const { wallet } = useWallet();

  const activities = [
    { type: 'received', amount: '+250 $LB', desc: 'Referral Reward', time: '2h ago', icon: ArrowDownRight },
    { type: 'received', amount: '+100 $LB', desc: 'Airdrop Claim', time: '5h ago', icon: ArrowDownRight },
    { type: 'sent', amount: '-50 $LB', desc: 'DAO Vote Stake', time: '1d ago', icon: ArrowUpRight },
    { type: 'received', amount: '+500 $LB', desc: 'Task Completion', time: '2d ago', icon: ArrowDownRight },
  ];

  return (
    <div className="token-panel">
      <div className="token-panel-header">
        <div className="token-info">
          <div className="token-icon-wrap">
            <Coins size={24} />
          </div>
          <div>
            <h3>$LB Token Balance</h3>
            <span className="token-label">LUMA BRAINS Token</span>
          </div>
        </div>
        <div className="token-trend">
          <TrendingUp size={16} />
          <span>+12.5%</span>
        </div>
      </div>

      <div className="token-balance-display">
        <span className="token-balance-amount">{wallet.balance.toLocaleString()}</span>
        <span className="token-balance-usd">≈ $1,245.07 USD</span>
      </div>

      <button className="claim-rewards-btn">
        <Coins size={18} />
        Claim Rewards
      </button>

      <div className="token-activity">
        <h4>Recent Activity</h4>
        {activities.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="activity-item">
              <div className={`activity-icon ${item.type}`}>
                <Icon size={16} />
              </div>
              <div className="activity-info">
                <span className="activity-desc">{item.desc}</span>
                <span className="activity-time"><Clock size={12} /> {item.time}</span>
              </div>
              <span className={`activity-amount ${item.type}`}>{item.amount}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TokenPanel;
