import { Zap, Github, Twitter, MessageCircle, Globe, ArrowUpRight, Heart } from 'lucide-react';
import '../../styles/Footer.css';

function Footer() {
  const links = {
    Protocol: ['Ecosystem', 'Token ($LB)', 'Roadmap', 'Whitepaper'],
    Community: ['Discord', 'Telegram', 'Twitter/X', 'Forum'],
    Resources: ['Documentation', 'Education Hub', 'Developer Portal', 'Blog'],
    Legal: ['Terms of Service', 'Privacy Policy', 'Cookie Policy'],
  };

  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <Zap size={22} />
              </div>
              <span className="footer-logo-text">LUMA<span className="gradient-text">BRAINS</span></span>
            </div>
            <p className="footer-desc">
              The decentralized intelligence protocol powering Web3 community growth, 
              education, and economic freedom.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-link"><Twitter size={18} /></a>
              <a href="#" className="social-link"><MessageCircle size={18} /></a>
              <a href="#" className="social-link"><Github size={18} /></a>
              <a href="#" className="social-link"><Globe size={18} /></a>
            </div>
          </div>

          <div className="footer-links-grid">
            {Object.entries(links).map(([title, items]) => (
              <div key={title} className="footer-link-group">
                <h4>{title}</h4>
                {items.map((item) => (
                  <a key={item} href="#" className="footer-link">
                    {item} <ArrowUpRight size={12} />
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>&copy; 2025 LUMA BRAINS Protocol. All rights reserved.</p>
          <p className="footer-made">
            Built with <Heart size={14} className="heart-icon" /> by the LUMA community
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
