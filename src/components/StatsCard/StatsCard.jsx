import '../../styles/StatsCard.css';

function StatsCard({ icon: Icon, label, value, change, changeType, iconColor }) {
  return (
    <div className="stats-card">
      <div className="stats-card-header">
        <div className="stats-icon" style={{ background: `${iconColor || 'var(--accent-primary)'}15`, color: iconColor || 'var(--accent-primary)' }}>
          <Icon size={22} />
        </div>
        {change && (
          <span className={`stats-change ${changeType === 'positive' ? 'positive' : 'negative'}`}>
            {changeType === 'positive' ? '+' : ''}{change}
          </span>
        )}
      </div>
      <div className="stats-value">{value}</div>
      <div className="stats-label">{label}</div>
    </div>
  );
}

export default StatsCard;
