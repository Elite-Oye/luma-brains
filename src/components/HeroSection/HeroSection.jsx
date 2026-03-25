import { Wallet, ArrowRight, Sparkles, Users, Coins, Shield } from 'lucide-react';
import { useWallet } from '../../context/WalletContext';
import { useNavigate } from 'react-router-dom';
import '../../styles/HeroSection.css';

function HeroSection() {
  const { setShowWalletModal, wallet } = useWallet();
  const navigate = useNavigate();

  const stats = [
    { icon: Users, value: '12,450+', label: 'Community Members' },
    { icon: Coins, value: '$2.4M', label: 'Total Value Locked' },
    { icon: Shield, value: '99.9%', label: 'Uptime Security' },
  ];

  const handleAction = () => {
    if (wallet.connected) {
      navigate('/dashboard');
    } else {
      setShowWalletModal(true);
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-orb orb-1"></div>
        <div className="hero-orb orb-2"></div>
        <div className="hero-orb orb-3"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge animate-fade-in-down">
            <Sparkles size={14} />
            <span>The Future of Decentralized Intelligence</span>
          </div>
          <h1 className="hero-title animate-fade-in-up stagger-1">
            Welcome to<br />
            <span className="gradient-text">LUMA BRAINS</span><br />
            Protocol
          </h1>
          <p className="hero-subtitle animate-fade-in-up stagger-2">
            A decentralized intelligence protocol powering community growth, 
            education, and economic freedom in the Web3 ecosystem.
          </p>
          <div className="hero-actions animate-fade-in-up stagger-3">
            <button className="hero-btn primary" onClick={handleAction}>
              <Wallet size={20} />
              {wallet.connected ? 'Go to Dashboard' : 'Connect Wallet'}
            </button>
            <button className="hero-btn secondary">
              Learn More <ArrowRight size={18} />
            </button>
          </div>
          <div className="hero-stats animate-fade-in-up stagger-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="hero-stat">
                  <Icon size={18} className="hero-stat-icon" />
                  <span className="hero-stat-value">{stat.value}</span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
