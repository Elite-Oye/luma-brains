import { Lock, ArrowRight } from 'lucide-react';
import '../../styles/MarketCard.css';

function MarketCard({ icon: Icon, title, description, status, color }) {
  const isComingSoon = status === 'coming-soon';

  return (
    <div className={`market-card ${isComingSoon ? 'coming-soon' : ''}`}>
      <div className="market-card-icon" style={{ background: `${color}15`, color: color }}>
        <Icon size={28} />
      </div>
      <h3 className="market-card-title">{title}</h3>
      <p className="market-card-desc">{description}</p>
      {isComingSoon ? (
        <div className="market-card-badge">
          <Lock size={14} /> Coming Soon
        </div>
      ) : (
        <button className="market-card-btn">
          Explore <ArrowRight size={16} />
        </button>
      )}
    </div>
  );
}

export default MarketCard;
