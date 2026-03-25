import { Shield, Brain, Coins, Users, Vote, Store, GraduationCap, Code2, ArrowRight, Zap, Globe, TrendingUp } from 'lucide-react';
import HeroSection from '../../components/HeroSection/HeroSection';
import EcosystemCard from '../../components/EcosystemCard/EcosystemCard';
import { useWallet } from '../../context/WalletContext';
import '../../styles/Landing.css';

function Landing() {
  const { setShowWalletModal } = useWallet();

  const ecosystemItems = [
    { icon: Brain, title: 'Social Intelligence', description: 'Connect, share knowledge, and build your Web3 reputation within a thriving community.', color: '#7B2FF7' },
    { icon: Coins, title: 'Token Economy', description: 'Earn $LB tokens through participation, referrals, and community contributions.', color: '#00D4FF' },
    { icon: Vote, title: 'DAO Governance', description: 'Shape the future of the protocol through decentralized community voting.', color: '#00E68A' },
    { icon: Store, title: 'MarketSquare', description: 'Trade services, digital products, and knowledge in our P2P marketplace.', color: '#FFB800' },
    { icon: GraduationCap, title: 'Education Hub', description: 'Learn Web3, crypto, NFTs, and blockchain through curated courses.', color: '#FF4D6A' },
    { icon: Code2, title: 'Developer Portal', description: 'Build on LUMA BRAINS with APIs, SDKs, and developer documentation.', color: '#7B2FF7' },
  ];

  const features = [
    { icon: Shield, title: 'Secure & Decentralized', desc: 'Built on blockchain with end-to-end encryption and trustless architecture.' },
    { icon: Globe, title: 'Global Community', desc: 'Join thousands of users from around the world building the future of Web3.' },
    { icon: TrendingUp, title: 'Reward-Driven', desc: 'Every action earns rewards. Refer, learn, create, trade — and get paid.' },
  ];

  const tokenomics = [
    { label: 'Community Rewards', value: '40%', color: '#7B2FF7' },
    { label: 'Development', value: '20%', color: '#00D4FF' },
    { label: 'Team & Advisors', value: '15%', color: '#00E68A' },
    { label: 'Liquidity Pool', value: '15%', color: '#FFB800' },
    { label: 'Reserve', value: '10%', color: '#FF4D6A' },
  ];

  return (
    <div className="landing">
      <HeroSection />

      <section className="section ecosystem-section" id="ecosystem">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge"><Zap size={14} /> Ecosystem</span>
            <h2 className="section-title">The LUMA BRAINS <span className="gradient-text">Ecosystem</span></h2>
            <p className="section-subtitle">A complete decentralized protocol with everything you need for Web3 success.</p>
          </div>
          <div className="eco-grid">
            {ecosystemItems.map((item, idx) => (
              <EcosystemCard key={item.title} {...item} delay={idx + 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="section features-section">
        <div className="section-container">
          <div className="features-grid">
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <div key={feat.title} className="feature-item">
                  <div className="feature-icon"><Icon size={28} /></div>
                  <h3>{feat.title}</h3>
                  <p>{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section token-section" id="token">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge"><Coins size={14} /> Token</span>
            <h2 className="section-title">The <span className="gradient-text">$LB Token</span></h2>
            <p className="section-subtitle">The native utility token powering the LUMA BRAINS ecosystem.</p>
          </div>
          <div className="token-grid">
            <div className="token-info-card">
              <h3>Token Distribution</h3>
              <div className="token-bars">
                {tokenomics.map((item) => (
                  <div key={item.label} className="token-bar-item">
                    <div className="token-bar-header">
                      <span>{item.label}</span>
                      <span className="token-bar-value">{item.value}</span>
                    </div>
                    <div className="token-bar-track">
                      <div className="token-bar-fill" style={{ width: item.value, background: item.color }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="token-utility-card">
              <h3>Token Utility</h3>
              <div className="utility-list">
                <div className="utility-item"><Zap size={18} /> Governance Voting</div>
                <div className="utility-item"><Zap size={18} /> Staking Rewards</div>
                <div className="utility-item"><Zap size={18} /> Marketplace Payments</div>
                <div className="utility-item"><Zap size={18} /> Access Premium Content</div>
                <div className="utility-item"><Zap size={18} /> Referral Bonuses</div>
                <div className="utility-item"><Zap size={18} /> Creator Monetization</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section" id="community">
        <div className="section-container">
          <div className="cta-card">
            <div className="cta-glow"></div>
            <h2>Ready to Join the <span className="gradient-text">Revolution</span>?</h2>
            <p>Connect your wallet and become part of the LUMA BRAINS ecosystem today.</p>
            <div className="cta-actions">
              <button className="cta-btn primary" onClick={() => setShowWalletModal(true)}>
                <Users size={20} /> Join Protocol
              </button>
              <button className="cta-btn secondary">
                Read Whitepaper <ArrowRight size={18} />
              </button>
            </div>
            <div className="cta-stats">
              <div className="cta-stat">
                <span className="cta-stat-value">12,450+</span>
                <span className="cta-stat-label">Members</span>
              </div>
              <div className="cta-stat-divider"></div>
              <div className="cta-stat">
                <span className="cta-stat-value">$2.4M+</span>
                <span className="cta-stat-label">TVL</span>
              </div>
              <div className="cta-stat-divider"></div>
              <div className="cta-stat">
                <span className="cta-stat-value">150+</span>
                <span className="cta-stat-label">Countries</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
