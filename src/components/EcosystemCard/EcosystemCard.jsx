import { ArrowUpRight } from 'lucide-react';
import '../../styles/EcosystemCard.css';

function EcosystemCard({ icon: Icon, title, description, color, delay }) {
  return (
    <div className={`eco-card animate-fade-in-up stagger-${delay}`}>
      <div className="eco-card-glow" style={{ background: `${color}10` }}></div>
      <div className="eco-card-icon" style={{ background: `${color}18`, color: color }}>
        <Icon size={28} />
      </div>
      <h3 className="eco-card-title">{title}</h3>
      <p className="eco-card-desc">{description}</p>
      <div className="eco-card-action">
        <span>Explore</span>
        <ArrowUpRight size={16} />
      </div>
    </div>
  );
}

export default EcosystemCard;
