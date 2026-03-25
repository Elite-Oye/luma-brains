import { X, ArrowRight, Shield, Zap } from 'lucide-react';
import { useWallet } from '../../context/WalletContext';
import '../../styles/WalletConnect.css';

function WalletConnect() {
  const { setShowWalletModal, connectWallet } = useWallet();

  const wallets = [
    {
      id: 'metamask',
      name: 'MetaMask',
      desc: 'Connect using browser extension',
      color: '#F6851B',
      icon: '🦊',
    },
    {
      id: 'walletconnect',
      name: 'WalletConnect',
      desc: 'Scan with mobile wallet',
      color: '#3B99FC',
      icon: '🔗',
    },
    {
      id: 'trustwallet',
      name: 'Trust Wallet',
      desc: 'Connect via Trust Wallet',
      color: '#0500FF',
      icon: '🛡️',
    },
  ];

  return (
    <div className="wallet-overlay" onClick={() => setShowWalletModal(false)}>
      <div className="wallet-modal animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <button className="wallet-close" onClick={() => setShowWalletModal(false)}>
          <X size={20} />
        </button>

        <div className="wallet-header">
          <div className="wallet-header-icon">
            <Zap size={28} />
          </div>
          <h2>Connect Your Wallet</h2>
          <p>Choose a wallet to connect to LUMA BRAINS Protocol</p>
        </div>

        <div className="wallet-list">
          {wallets.map((w) => (
            <button
              key={w.id}
              className="wallet-option"
              onClick={() => connectWallet(w.id)}
            >
              <div className="wallet-option-icon" style={{ background: `${w.color}20` }}>
                <span>{w.icon}</span>
              </div>
              <div className="wallet-option-info">
                <span className="wallet-option-name">{w.name}</span>
                <span className="wallet-option-desc">{w.desc}</span>
              </div>
              <ArrowRight size={18} className="wallet-arrow" />
            </button>
          ))}
        </div>

        <div className="wallet-footer">
          <Shield size={14} />
          <span>Your wallet connection is secure and encrypted</span>
        </div>
      </div>
    </div>
  );
}

export default WalletConnect;
