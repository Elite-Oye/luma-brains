import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, Bell, ChevronDown, LogOut, User, Wallet } from 'lucide-react';
import { useWallet } from '../../context/WalletContext';
import '../../styles/Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { wallet, setShowWalletModal, disconnectWallet } = useWallet();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setProfileOpen(false);
  }, [location]);

  const navLinks = wallet.connected
    ? [
        { path: '/dashboard', label: 'Dashboard' },
        { path: '/profile', label: 'Profile' },
        { path: '/airdrop', label: 'Airdrop' },
        { path: '/rewards', label: 'Rewards' },
        { path: '/dao', label: 'DAO' },
        { path: '/marketsquare', label: 'MarketSquare' },
        { path: '/communities', label: 'Communities' },
        { path: '/education', label: 'Education' },
        { path: '/social', label: 'Social' },
        { path: '/developers', label: 'Developers' },
        { path: '/leaderboard', label: 'Leaderboard' },
        { path: '/settings', label: 'Settings' },
        { path: '/help', label: 'Help' },
      ]
    : [
        { path: '/', label: 'Home', hash: '#hero' },
        { path: '/', label: 'Ecosystem', hash: '#ecosystem' },
        { path: '/', label: 'Token', hash: '#token' },
        { path: '/', label: 'Community', hash: '#community' },
      ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-icon">
            <Zap size={24} />
          </div>
          <span className="logo-text">LUMA<span className="logo-accent">BRAINS</span></span>
        </Link>

        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          {!wallet.connected && (
            <button className="nav-connect-btn mobile-only" onClick={() => setShowWalletModal(true)}>
              <Wallet size={18} />
              Connect Wallet
            </button>
          )}
        </div>

        <div className="navbar-actions">
          {wallet.connected ? (
            <>
              <button className="notification-btn">
                <Bell size={20} />
                <span className="notif-dot"></span>
              </button>
              <div className="profile-wrapper">
                <button className="profile-btn" onClick={() => setProfileOpen(!profileOpen)}>
                  <div className="profile-avatar">
                    <User size={16} />
                  </div>
                  <span className="profile-address">{wallet.address}</span>
                  <ChevronDown size={14} className={`chevron ${profileOpen ? 'rotated' : ''}`} />
                </button>
                {profileOpen && (
                  <div className="profile-dropdown animate-fade-in-down">
                    <div className="dropdown-header">
                      <span className="dropdown-label">Wallet</span>
                      <span className="dropdown-address">{wallet.address}</span>
                    </div>
                    <div className="dropdown-balance">
                      <span className="balance-label">$LB Balance</span>
                      <span className="balance-value">{wallet.balance.toLocaleString()}</span>
                    </div>
                    <div className="dropdown-divider"></div>
                    <Link to="/dashboard" className="dropdown-item">
                      <User size={16} /> My Profile
                    </Link>
                    <button className="dropdown-item disconnect" onClick={disconnectWallet}>
                      <LogOut size={16} /> Disconnect
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <button className="connect-btn desktop-only" onClick={() => setShowWalletModal(true)}>
              <Wallet size={18} />
              <span>Connect Wallet</span>
            </button>
          )}
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
