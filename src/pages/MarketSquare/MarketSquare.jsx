import { Store, ArrowLeftRight, GraduationCap, Users, Megaphone, ShoppingBag, Sparkles } from 'lucide-react';
import MarketCard from '../../components/MarketCard/MarketCard';
import '../../styles/MarketSquare.css';

function MarketSquare() {
  const modules = [
    { icon: ArrowLeftRight, title: 'P2P Trading', description: 'Trade tokens and digital assets directly with other users in a secure peer-to-peer environment.', status: 'coming-soon', color: '#7B2FF7' },
    { icon: GraduationCap, title: 'Knowledge Market', description: 'Buy and sell courses, tutorials, and educational content created by community experts.', status: 'active', color: '#00D4FF' },
    { icon: Users, title: 'Community Groups', description: 'Join or create interest-based groups for networking, collaboration, and knowledge sharing.', status: 'active', color: '#00E68A' },
    { icon: Megaphone, title: 'Ads Marketplace', description: 'Promote your projects, products, or services to the LUMA BRAINS community.', status: 'coming-soon', color: '#FFB800' },
    { icon: ShoppingBag, title: 'Digital Products', description: 'List and sell digital products including templates, tools, and creative assets.', status: 'coming-soon', color: '#FF4D6A' },
    { icon: Sparkles, title: 'Creator Hub', description: 'Monetize your content and build your creator brand within the ecosystem.', status: 'coming-soon', color: '#7B2FF7' },
  ];

  return (
    <div className="market-page">
      <div className="market-header">
        <div className="market-header-icon"><Store size={28} /></div>
        <h1 className="animate-fade-in">Market<span className="gradient-text">Square</span></h1>
        <p className="animate-fade-in-up stagger-1">The economic engine of the LUMA BRAINS ecosystem. Trade, learn, and grow.</p>
      </div>

      <div className="market-banner animate-fade-in-up stagger-2">
        <div className="banner-content">
          <h2>The marketplace is evolving</h2>
          <p>Core modules are launching soon. Join early to get exclusive access and rewards.</p>
        </div>
        <div className="banner-glow"></div>
      </div>

      <div className="market-grid animate-fade-in-up stagger-3">
        {modules.map((mod) => (
          <MarketCard key={mod.title} {...mod} />
        ))}
      </div>
    </div>
  );
}

export default MarketSquare;
